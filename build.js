const fs = require('fs');
const path = require('path');

// Get the project directory from command line arguments
const projectDir = process.argv[2];

if (!projectDir) {
    console.error('❌ Error: Please specify the project directory');
    console.log('📖 Usage: node build.js <project-directory>');
    console.log('📖 Example: node build.js rougelike-research-modular');
    process.exit(1);
}

const projectPath = path.resolve(projectDir);

// Check if project directory exists
if (!fs.existsSync(projectPath)) {
    console.error(`❌ Error: Directory "${projectDir}" does not exist`);
    process.exit(1);
}

// Check if index.html exists in the project directory
const mainHtmlPath = path.join(projectPath, 'index.html');
if (!fs.existsSync(mainHtmlPath)) {
    console.error(`❌ Error: index.html not found in "${projectDir}"`);
    process.exit(1);
}

console.log(`🏗️  Building static site from: ${projectDir}`);

// Read the main HTML file
const mainHtml = fs.readFileSync(mainHtmlPath, 'utf8');

// Function to replace section placeholders with actual content
function buildHtml(htmlContent, basePath) {
    // Find all sections with data-src attributes
    return htmlContent.replace(/<section[^>]*data-src="([^"]*)"[^>]*>[\s\S]*?<\/section>/g, (match, src) => {
        try {
            // Read the fragment file relative to the project directory
            const fragmentPath = path.join(basePath, src);
            
            if (!fs.existsSync(fragmentPath)) {
                console.warn(`⚠️  Warning: Fragment file not found: ${src}`);
                return match; // Return original if fragment doesn't exist
            }
            
            const fragmentContent = fs.readFileSync(fragmentPath, 'utf8');
            
            // Extract section attributes from the original tag (remove data-src)
            const sectionMatch = match.match(/<section([^>]*)>/);
            const attributes = sectionMatch ? sectionMatch[1].replace(/data-src="[^"]*"/, '').trim() : '';
            
            // Return the section with the fragment content
            console.log(`✅ Loaded fragment: ${src}`);
            return `<section${attributes ? ' ' + attributes : ''}>\n${fragmentContent}\n</section>`;
        } catch (error) {
            console.warn(`⚠️  Warning: Could not read fragment ${src}:`, error.message);
            return match; // Return original if fragment can't be read
        }
    });
}

// Build the HTML
const builtHtml = buildHtml(mainHtml, projectPath);

// Write the built HTML to the project directory
const outputPath = path.join(projectPath, 'index-built.html');
fs.writeFileSync(outputPath, builtHtml);

console.log(`\n🎉 Successfully built static HTML!`);
console.log(`📁 Output: ${path.relative(process.cwd(), outputPath)}`);
console.log(`🚀 This file can be deployed directly to GitHub Pages.`);
console.log(`\n💡 To preview locally, you can:`);
console.log(`   • Open ${path.relative(process.cwd(), outputPath)} directly in browser`);
console.log(`   • Or serve with: cd ${projectDir} && python -m http.server 8000`); 