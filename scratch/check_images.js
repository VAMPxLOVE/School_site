const fs = require('fs');
const path = require('path');

const galleryData = fs.readFileSync('src/data/galleryData.js', 'utf8');
const regex = /"src":\s*"([^"]+)"/g;
let match;
const missing = [];
const found = [];
while ((match = regex.exec(galleryData)) !== null) {
    const p = path.join('public', match[1].replace(/^\//, ''));
    if (!fs.existsSync(p)) {
        missing.push({ path: match[1], disk: p });
    } else {
        found.push(match[1]);
    }
}

console.log('EXISTING IN GALLERYDATA:', found.length);
console.log('MISSING IN GALLERYDATA:', missing);

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const full = path.join(dir, file);
        const stat = fs.statSync(full);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(full));
        } else if (/\.(jpg|jpeg|png|webp)$/i.test(file)) {
            results.push(full.replace(/\\/g, '/'));
        }
    });
    return results;
}

const allGalleryImages = walk('public/assets/gallery');
console.log('TOTAL ON DISK in public/assets/gallery:', allGalleryImages.length);

const unused = allGalleryImages.filter(img => {
    const webPath = '/' + img.replace(/^public\//, '');
    return !found.includes(webPath);
});

console.log('UNUSED ON DISK count:', unused.length);
if (unused.length > 0) {
    console.log('Unused files:', unused);
}
