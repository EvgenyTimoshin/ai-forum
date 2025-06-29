// Modular content loading functionality
async function loadFragments() {
    const sections = document.querySelectorAll('section[data-src]');
    
    for (const section of sections) {
        const src = section.getAttribute('data-src');
        if (!src) continue;
        
        try {
            const response = await fetch(src);
            if (response.ok) {
                const content = await response.text();
                section.innerHTML = content;
            } else {
                section.innerHTML = `
                    <div class="bg-red-50 dark:bg-red-950 border-l-4 border-red-400 dark:border-red-500 p-4 rounded-r-lg">
                        <p class="text-red-800 dark:text-red-200">
                            <strong>Loading Error:</strong> Failed to load ${src} (${response.status})
                        </p>
                        <p class="text-sm text-red-600 dark:text-red-400 mt-2">
                            You can try accessing this section directly: 
                            <a href="${src}" class="underline hover:no-underline">${src}</a>
                        </p>
                    </div>
                `;
            }
        } catch (error) {
            // Check if this is a CORS error due to file:// protocol
            if (window.location.protocol === 'file:' && error.message.includes('fetch')) {
                section.innerHTML = `
                    <div class="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-400 dark:border-blue-500 p-4 rounded-r-lg">
                        <p class="text-blue-800 dark:text-blue-200">
                            <strong>Local Development Mode:</strong> Cannot dynamically load ${src}
                        </p>
                        <p class="text-sm text-blue-600 dark:text-blue-400 mt-2">
                            This content will load automatically when deployed to GitHub Pages.
                        </p>
                        <p class="text-sm text-blue-600 dark:text-blue-400 mt-1">
                            For local development with dynamic loading, run: <code class="bg-blue-100 dark:bg-blue-900 px-1 rounded">python -m http.server 8000</code>
                        </p>
                        <p class="text-sm text-blue-600 dark:text-blue-400 mt-2">
                            View section directly: 
                            <a href="${src}" class="underline hover:no-underline">${src}</a>
                        </p>
                    </div>
                `;
            } else {
                section.innerHTML = `
                    <div class="bg-red-50 dark:bg-red-950 border-l-4 border-red-400 dark:border-red-500 p-4 rounded-r-lg">
                        <p class="text-red-800 dark:text-red-200">
                            <strong>Loading Error:</strong> Could not fetch ${src}
                        </p>
                        <p class="text-sm text-red-600 dark:text-red-400 mt-2">
                            Error: ${error.message}
                        </p>
                        <p class="text-sm text-red-600 dark:text-red-400 mt-1">
                            You can try accessing this section directly: 
                            <a href="${src}" class="underline hover:no-underline">${src}</a>
                        </p>
                    </div>
                `;
            }
        }
    }
    
    // After all fragments are loaded, reinitialize functionality that depends on content
    if (tocNav) generateTOC();
    setupSectionToggle();
    updateProgressBar();
    setupTooltipPositioning();
    updateReadingTimeDisplay();
    
    // Clear the reading time cache since content has changed
    cachedReadingTimes = null;
}

// Reading time calculation functionality
const WORDS_PER_MINUTE = 225; // Average reading speed
let totalWordCount = 0;
let sectionWordCounts = [];
let cachedReadingTimes = null; // Cache the reading times

function countWords(text) {
    // Remove extra whitespace and count words
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
}

function formatReadingTime(minutes) {
    if (minutes < 1) {
        return '< 1 min';
    } else if (minutes < 60) {
        return `${Math.ceil(minutes)} min`;
    } else {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = Math.ceil(minutes % 60);
        return `${hours}h ${remainingMinutes}m`;
    }
}

function calculateReadingTimes() {
    // Return cached result if available
    if (cachedReadingTimes) {
        return cachedReadingTimes;
    }
    
    const sections = document.querySelectorAll('section');
    totalWordCount = 0;
    sectionWordCounts = [];
    
    if (sections.length === 0) {
        // Fallback: count words in the entire main content area
        const mainContent = document.querySelector('main') || document.body;
        const text = mainContent.textContent || mainContent.innerText || '';
        totalWordCount = countWords(text);
        sectionWordCounts = [totalWordCount];
    } else {
        sections.forEach(section => {
            const text = section.textContent || section.innerText || '';
            const wordCount = countWords(text);
            sectionWordCounts.push(wordCount);
            totalWordCount += wordCount;
        });
    }
    
    cachedReadingTimes = {
        totalMinutes: Math.max(totalWordCount / WORDS_PER_MINUTE, 0.1), // Minimum 0.1 minutes
        sectionMinutes: sectionWordCounts.map(count => Math.max(count / WORDS_PER_MINUTE, 0.1))
    };
    
    return cachedReadingTimes;
}

// Reading time display functionality
const readingTimeDisplay = document.getElementById('readingTimeDisplay');
const readingTimeText = document.getElementById('readingTimeText');

function updateReadingTimeDisplay() {
    if (!readingTimeDisplay || !readingTimeText) return;
    
    const readingTimes = calculateReadingTimes();
    if (!readingTimes || !readingTimes.totalMinutes) {
        readingTimeText.textContent = `📖 < 1 min read`;
        return;
    }
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) : 0;
    
    const totalMinutes = readingTimes.totalMinutes;
    const remainingMinutes = totalMinutes * (1 - progress);
    
    if (progress < 0.01) {
        readingTimeText.textContent = `📖 ${formatReadingTime(totalMinutes)} read`;
    } else if (progress > 0.99) {
        readingTimeText.textContent = `📖 Complete!`;
    } else {
        readingTimeText.textContent = `📖 ${formatReadingTime(remainingMinutes)} left`;
    }
}

// Theme switching functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const html = document.documentElement;

if (themeToggle && themeIcon) {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        html.classList.add('dark');
        themeIcon.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        html.setAttribute('data-theme', newTheme);
        html.classList.toggle('dark');
        themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        localStorage.setItem('theme', newTheme);
    });
}

// Progress bar functionality
const progressBar = document.querySelector('.progress-bar');

function updateProgressBar() {
    if (!progressBar) return; // Exit if progress bar doesn't exist
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    
    progressBar.style.setProperty('--progress-width', `${Math.min(progress, 100)}%`);
    
    // Update reading time display when progress changes (lightweight operation now)
    updateReadingTimeDisplay();
}

// Only add scroll listeners if progress bar exists
if (progressBar) {
    window.addEventListener('scroll', throttle(updateProgressBar, 16)); // ~60fps
    window.addEventListener('resize', updateProgressBar);
}

// Table of Contents generation
const tocNav = document.getElementById('tocNav');

function generateTOC() {
    if (!tocNav) return; // Exit if TOC nav doesn't exist
    
    const headings = document.querySelectorAll('h2.section-header');
    const readingTimes = calculateReadingTimes(); // This now uses cache
    tocNav.innerHTML = '';
    
    headings.forEach((heading, index) => {
        const tocItem = document.createElement('a');
        tocItem.href = `#section-${index}`;
        tocItem.className = 'block px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors';
        
        // Add reading time estimate for each section
        const sectionMinutes = readingTimes.sectionMinutes[index] || 0;
        const readingTimeLabel = formatReadingTime(sectionMinutes);
        
        tocItem.innerHTML = `
            <div class="flex justify-between items-center">
                <span class="truncate">${heading.textContent}</span>
                <span class="text-xs opacity-60 ml-2 flex-shrink-0">${readingTimeLabel}</span>
            </div>
        `;
        
        // Add ID to heading for navigation
        heading.id = `section-${index}`;
        
        tocNav.appendChild(tocItem);
    });
}

// Section collapse functionality
function setupSectionToggle() {
    const sectionHeaders = document.querySelectorAll('h2.section-header');
    
    sectionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            if (content && content.classList.contains('section-content')) {
                content.classList.toggle('collapsed');
                cachedReadingTimes = null; // Clear cache when sections change
                if (tocNav) generateTOC(); // Only regenerate if TOC exists
                updateProgressBar(); // Update progress bar
            }
        });
    });
}

// Tooltip positioning functionality
function setupTooltipPositioning() {
    const glossaryTerms = document.querySelectorAll('.glossary-term');
    
    glossaryTerms.forEach(term => {
        term.addEventListener('mouseenter', (e) => {
            const rect = e.target.getBoundingClientRect();
            const tooltip = e.target;
            
            // Position tooltip above the element
            const tooltipTop = rect.top - 10;
            const tooltipLeft = rect.left + (rect.width / 2);
            
            // Set CSS custom properties for positioning
            tooltip.style.setProperty('--tooltip-top', `${tooltipTop}px`);
            tooltip.style.setProperty('--tooltip-left', `${tooltipLeft}px`);
        });
    });
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', async () => {
    // Load fragments first
    await loadFragments();
    
    // Then initialize other functionality (this happens again in loadFragments, but ensures it works if no fragments)
    if (tocNav) generateTOC();
    setupSectionToggle();
    updateProgressBar();
    setupTooltipPositioning();
    updateReadingTimeDisplay();
});

// Update progress bar and reading time on content changes
const targetNode = document.body;
if (targetNode) {
    const observer = new MutationObserver(debounce(() => {
        updateProgressBar();
        updateReadingTimeDisplay();
    }, 250));
    
    observer.observe(targetNode, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class']
    });
}

// Utility functions
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
} 