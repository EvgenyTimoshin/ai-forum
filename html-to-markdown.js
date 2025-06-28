const fs = require('fs');
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
turndownService.addRule('skipElevenLabs', {
    filter: function (node, options) {
        return node.id === 'elevenlabs-audionative-widget';
    },
    replacement: function (content, node, options) {
        return '';
    }
});


/**
 * Extracts content from an HTML file and converts it to Markdown.
 * @param {string} inputPath - Path to the input HTML file.
 * @param {string} outputPath - Path to the output Markdown file.
 */
function extractContentAsMarkdown(inputPath, outputPath) {
    fs.readFile(inputPath, 'utf8', (err, html) => {
        if (err) {
            console.error(`Error reading the file ${inputPath}:`, err);
            return;
        }

        const dom = new JSDOM(html);
        const document = dom.window.document;
        const mainContent = document.querySelector('main');

        if (!mainContent) {
            console.error('Could not find the <main> content element.');
            return;
        }

        const sections = mainContent.querySelectorAll('section');
        let markdownOutput = '';

        sections.forEach((section, index) => {
            const sectionId = section.id || `section-${index + 1}`;
            console.log(`Processing section: #${sectionId}`);

            // Skip the comments section
            if (sectionId === 'comments') {
                console.log('Skipping comments section.');
                return;
            }

            const sectionHtml = section.innerHTML;
            const sectionMarkdown = turndownService.turndown(sectionHtml);

            markdownOutput += sectionMarkdown + '\n\n---\n\n';
        });

        fs.writeFile(outputPath, markdownOutput, 'utf8', (err) => {
            if (err) {
                console.error(`Error writing the file ${outputPath}:`, err);
                return;
            }
            console.log(`Successfully converted ${inputPath} to ${outputPath}`);
        });
    });
}

// --- Script Execution ---
const args = process.argv.slice(2);

if (args.length !== 2) {
    console.log('Usage: node html-to-markdown.js <input-html-path> <output-markdown-path>');
    process.exit(1);
}

const inputFilePath = args[0];
const outputFilePath = args[1];

extractContentAsMarkdown(inputFilePath, outputFilePath); 