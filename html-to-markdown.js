const fs = require('fs').promises;
const path = require('path');
const { JSDOM } = require('jsdom');
const TurndownService = require('turndown');

// Initialize Turndown service
const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced'
});

// --- Custom Turndown Rules to handle specific styling ---

// Rule for special info/warning blocks
turndownService.addRule('styledDivs', {
    filter: function (node, options) {
        return (
            node.nodeName === 'DIV' &&
            (node.classList.contains('bg-blue-50') || node.classList.contains('bg-amber-50'))
        );
    },
    replacement: function (content, node, options) {
        // Wrap the content of the div in a blockquote
        const lines = content.trim().split('\n');
        const blockquoteLines = lines.map(line => `> ${line}`);
        return `\n${blockquoteLines.join('\n')}\n`;
    }
});

// Rule for glossary terms
turndownService.addRule('glossaryTerm', {
    filter: 'span',
    replacement: function (content, node) {
        if (node.classList.contains('glossary-term')) {
            // Just return the text content, maybe bold it for emphasis
            return `**${content}**`;
        }
        return content;
    }
});

// Rule for source links in paragraphs
turndownService.addRule('sourceLink', {
    filter: function(node, options) {
        return node.nodeName === 'A' && node.getAttribute('href')?.startsWith('#source');
    },
    replacement: function(content, node) {
        // Keep the [1], [2], etc. as text
        return content;
    }
});

// Rule to ignore the audio player widget
turndownService.addRule('skipElements', {
    filter: function (node, options) {
        return node.id === 'elevenlabs-audionative-widget' || node.classList.contains('animate-pulse');
    },
    replacement: function () {
        return '';
    }
});

/**
 * Reads an HTML file, dynamically loads section content, and converts to Markdown.
 * @param {string} inputPath - Path to the root HTML file (e.g., index.html).
 * @param {string} outputPath - Path to the output Markdown file.
 */
async function convertHtmlToMarkdown(inputPath, outputPath) {
    try {
        const html = await fs.readFile(inputPath, 'utf8');
        const dom = new JSDOM(html);
        const document = dom.window.document;
        const mainContent = document.querySelector('main');

        if (!mainContent) {
            console.error('Could not find the <main> content element.');
            return;
        }

        const sections = mainContent.querySelectorAll('section[data-src]');
        const baseDir = path.dirname(inputPath);

        // Load content from fragment files
        for (const section of sections) {
            const fragmentPath = section.getAttribute('data-src');
            if (fragmentPath) {
                const fullFragmentPath = path.join(baseDir, fragmentPath);
                try {
                    const fragmentHtml = await fs.readFile(fullFragmentPath, 'utf8');
                    section.innerHTML = fragmentHtml;
                } catch (err) {
                    console.warn(`Warning: Could not load section from ${fullFragmentPath}`);
                }
            }
        }
        
        let markdownOutput = '';
        const allSections = mainContent.querySelectorAll('section');

        allSections.forEach((section, index) => {
            const sectionId = section.id || `section-${index + 1}`;
            
            if (sectionId === 'comments') {
                console.log('Skipping comments section.');
                return;
            }

            const sectionHtml = section.innerHTML;
            const sectionMarkdown = turndownService.turndown(sectionHtml);
            
            markdownOutput += sectionMarkdown.trim() + '\n\n---\n\n';
        });

        await fs.writeFile(outputPath, markdownOutput.trim(), 'utf8');
        console.log(`Successfully converted ${inputPath} to ${outputPath}`);

    } catch (err) {
        console.error(`An error occurred:`, err);
    }
}

// --- Script Execution ---
const args = process.argv.slice(2);

if (args.length !== 2) {
    console.log('Usage: node html-to-markdown.js <input-html-path> <output-markdown-path>');
    process.exit(1);
}

const inputFilePath = args[0];
const outputFilePath = args[1];

convertHtmlToMarkdown(inputFilePath, outputFilePath); 