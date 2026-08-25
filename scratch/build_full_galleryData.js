const fs = require('fs');
const path = require('path');

const galleryDir = path.join('public', 'assets', 'gallery');
const folders = fs.readdirSync(galleryDir).filter(d => fs.statSync(path.join(galleryDir, d)).isDirectory());

const categoryMeta = {
    campus: { label: 'Campus & Facilities', icon: '🏫' },
    library: { label: 'Library & Reading Center', icon: '📚' },
    farewell: { label: 'Farewell Ceremony', icon: '🎓' },
    diwali: { label: 'Diwali Celebrations', icon: '🪔' },
    christmas: { label: 'Christmas & Winter Fest', icon: '🎄' },
    halloween: { label: 'Halloween Day', icon: '🎃' },
    grandparents: { label: 'Grandparents Day', icon: '👵👴' },
    independence: { label: 'Independence Day', icon: '🇮🇳' },
    samarpan: { label: 'Samarpan Community Meal', icon: '🍲' },
    janmashtami: { label: 'Janmashtami Celebrations', icon: '🪈' },
    results: { label: 'Annual Result Day', icon: '🏆' },
    council: { label: 'Student Council', icon: '🗳️' },
    cooking: { label: 'Cooking Activity', icon: '🍳' },
    orientation: { label: 'Parents Orientation', icon: '👨‍👩‍👧' },
    health: { label: 'Health & Wellness', icon: '🩺' },
    sports: { label: 'Sports & Athletics', icon: '⚽' },
    academics: { label: 'Academic Workshops', icon: '📖' },
    science: { label: 'Science & Innovation', icon: '🔬' },
    events: { label: 'Special School Events', icon: '✨' }
};

let allImages = [];
let id = 1;

folders.forEach(folder => {
    const folderPath = path.join(galleryDir, folder);
    const files = fs.readdirSync(folderPath).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
    
    let catId = folder.toLowerCase();
    if (catId === 'celebrations' || catId === 'samarpan') catId = 'samarpan';
    else if (catId === 'janmasthmi' || catId === 'janmashtami') catId = 'janmashtami';
    else if (catId === 'library') catId = 'library';

    files.forEach((f, idx) => {
        let title = '';
        const catInfo = categoryMeta[catId] || { label: folder };
        
        if (f.startsWith('WhatsApp Image')) {
            title = `${catInfo.label} Moment ${idx + 1}`;
        } else if (f.startsWith('Lib_')) {
            title = `Library Reading & Resource Arena ${idx + 1}`;
        } else {
            title = f
                .replace(/\.(jpg|jpeg|png|webp)$/i, '')
                .replace(/_/g, ' ')
                .replace(/\b\w/g, c => c.toUpperCase());
        }

        allImages.push({
            id: id++,
            category: catId,
            title: title,
            src: `/assets/gallery/${folder}/${f}`
        });
    });
});

// Add main building assets
if (fs.existsSync('public/assets/school_building.jpg')) {
    allImages.push({
        id: id++,
        category: 'campus',
        title: 'D.R.P. Main Academic Building Entrance',
        src: '/assets/school_building.jpg'
    });
}
if (fs.existsSync('public/assets/values.jpg')) {
    allImages.push({
        id: id++,
        category: 'campus',
        title: 'Moral Values & Cultural Assembly',
        src: '/assets/values.jpg'
    });
}
if (fs.existsSync('public/assets/vision.jpg')) {
    allImages.push({
        id: id++,
        category: 'campus',
        title: 'Vision of Learning & Leadership Arena',
        src: '/assets/vision.jpg'
    });
}

// Generate active categories list (only categories that have at least 1 image)
const usedCatIds = [...new Set(allImages.map(img => img.category))];
const categoriesExport = [
    { id: 'all', label: 'All Photos', icon: '📸' }
];

usedCatIds.forEach(cid => {
    const meta = categoryMeta[cid] || { label: cid, icon: '🖼️' };
    categoriesExport.push({
        id: cid,
        label: meta.label,
        icon: meta.icon
    });
});

const outputJs = `/**
 * School Gallery Data Configuration
 * 100% Authentic School Event & Campus Photos (${allImages.length} High-Resolution Images)
 */

export const galleryCategories = ${JSON.stringify(categoriesExport, null, 4)};

export const galleryImages = ${JSON.stringify(allImages, null, 4)};
`;

fs.writeFileSync('src/data/galleryData.js', outputJs, 'utf8');
console.log('Successfully wrote src/data/galleryData.js with', allImages.length, 'images across', categoriesExport.length, 'categories!');
