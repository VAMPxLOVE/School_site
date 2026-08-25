const fs = require('fs');
const path = require('path');

const filesToCheck = [
    'src/components/Home.jsx',
    'src/components/Academics.jsx',
    'src/components/Gallery.jsx',
    'src/components/About.jsx',
    'src/components/Founder.jsx',
    'src/components/Vision.jsx'
];

filesToCheck.forEach(file => {
    if (!fs.existsSync(file)) return;
    const content = fs.readFileSync(file, 'utf8');
    const regex = /['"](\/assets\/[^'"]+)['"]/g;
    let match;
    console.log(`=== CHECKING ${file} ===`);
    while ((match = regex.exec(content)) !== null) {
        const url = match[1];
        const disk = path.join('public', url.replace(/^\//, ''));
        const exists = fs.existsSync(disk);
        if (!exists) {
            console.log(`  ❌ MISSING: ${url}`);
        } else {
            console.log(`  ✓ FOUND: ${url}`);
        }
    }
});
