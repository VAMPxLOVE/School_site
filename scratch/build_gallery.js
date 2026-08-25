const fs = require('fs');
const path = require('path');

const galleryDir = path.join('public', 'assets', 'gallery');
const categories = fs.readdirSync(galleryDir).filter(d => fs.statSync(path.join(galleryDir, d)).isDirectory());

const categoryMeta = {
    campus: { label: 'Campus & Facilities', icon: '🏫' },
    farewell: { label: 'Farewell Ceremony', icon: '🎓' },
    diwali: { label: 'Diwali Celebrations', icon: '🪔' },
    halloween: { label: 'Halloween Day', icon: '🎃' },
    grandparents: { label: 'Grandparents Day', icon: '👵👴' },
    independence: { label: 'Independence Day', icon: '🇮🇳' },
    celebrations: { label: 'Samarpan & Janmashtami', icon: '✨' },
    results: { label: 'Annual Result Day', icon: '🏆' },
    council: { label: 'Student Council', icon: '🗳️' },
    cooking: { label: 'Cooking Activity', icon: '🍳' },
    orientation: { label: 'Parents Orientation', icon: '👨‍👩‍👧' },
    health: { label: 'Health & Wellness', icon: '🩺' },
    sports: { label: 'Sports & Athletics', icon: '⚽' }
};

let allImages = [];
let id = 1;

categories.forEach(cat => {
    const catPath = path.join(galleryDir, cat);
    const files = fs.readdirSync(catPath).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
    files.forEach(f => {
        const titleFormatted = f
            .replace(/\.(jpg|jpeg|png|webp)$/i, '')
            .replace(/_/g, ' ')
            .replace(/\b\w/g, c => c.toUpperCase());
        allImages.push({
            id: id++,
            category: cat === 'celebrations' ? 'samarpan' : cat,
            title: titleFormatted,
            src: `/assets/gallery/${cat}/${f}`
        });
    });
});

console.log('Total images found on disk:', allImages.length);
console.log(JSON.stringify(allImages, null, 2));
