const fs = require('fs');
const path = require('path');

const galleryDir = path.join('public', 'assets', 'gallery');

function getCategories(dir) {
    return fs.readdirSync(dir).filter(d => {
        const full = path.join(dir, d);
        return fs.statSync(full).isDirectory();
    });
}

const folderCategories = getCategories(galleryDir);
console.log('Detected folders:', folderCategories);

// Category mapping metadata
const categoryMeta = {
    all: { label: 'All Photos', icon: '📸' },
    campus: { label: 'Campus & Facilities', icon: '🏫' },
    Library: { id: 'library', label: 'Library & Reading Center', icon: '📚' },
    library: { id: 'library', label: 'Library & Reading Center', icon: '📚' },
    farewell: { label: 'Farewell Ceremony', icon: '🎓' },
    diwali: { label: 'Diwali Celebrations', icon: '🪔' },
    halloween: { label: 'Halloween Day', icon: '🎃' },
    grandparents: { label: 'Grandparents Day', icon: '👵👴' },
    independence: { label: 'Independence Day', icon: '🇮🇳' },
    celebrations: { id: 'samarpan', label: 'Samarpan & Janmashtami', icon: '✨' },
    Samarpan: { id: 'samarpan', label: 'Samarpan Celebrations', icon: '🍲' },
    samarpan: { id: 'samarpan', label: 'Samarpan Celebrations', icon: '🍲' },
    Janmasthmi: { id: 'janmashtami', label: 'Janmashtami Celebrations', icon: '🪈' },
    janmashtami: { id: 'janmashtami', label: 'Janmashtami Celebrations', icon: '🪈' },
    results: { label: 'Annual Result Day', icon: '🏆' },
    council: { label: 'Student Council', icon: '🗳️' },
    cooking: { label: 'Cooking Activity', icon: '🍳' },
    orientation: { label: 'Parents Orientation', icon: '👨‍👩‍👧' },
    health: { label: 'Health & Wellness', icon: '🩺' },
    sports: { label: 'Sports & Athletics', icon: '⚽' }
};

let allFound = [];
let id = 1;

folderCategories.forEach(folder => {
    const folderPath = path.join(galleryDir, folder);
    const files = fs.readdirSync(folderPath).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
    
    // Normalized category id
    let catId = folder.toLowerCase();
    if (categoryMeta[folder] && categoryMeta[folder].id) {
        catId = categoryMeta[folder].id;
    } else if (catId === 'celebrations') {
        catId = 'samarpan';
    } else if (catId === 'janmasthmi') {
        catId = 'janmashtami';
    }

    files.forEach((f, idx) => {
        let title = '';
        if (f.startsWith('WhatsApp Image')) {
            const meta = categoryMeta[folder] || { label: folder };
            title = `${meta.label || folder} Highlight ${idx + 1}`;
        } else if (f.startsWith('Lib_')) {
            title = `Library Reading & Resource Arena ${idx + 1}`;
        } else {
            title = f
                .replace(/\.(jpg|jpeg|png|webp)$/i, '')
                .replace(/_/g, ' ')
                .replace(/\b\w/g, c => c.toUpperCase());
        }

        allFound.push({
            id: id++,
            category: catId,
            title: title,
            src: `/assets/gallery/${folder}/${f}`
        });
    });
});

// Also include root assets
if (fs.existsSync('public/assets/school_building.jpg')) {
    allFound.push({
        id: id++,
        category: 'campus',
        title: 'D.R.P. Main Academic Building Entrance',
        src: '/assets/school_building.jpg'
    });
}
if (fs.existsSync('public/assets/values.jpg')) {
    allFound.push({
        id: id++,
        category: 'campus',
        title: 'Moral Values & Cultural Assembly',
        src: '/assets/values.jpg'
    });
}
if (fs.existsSync('public/assets/vision.jpg')) {
    allFound.push({
        id: id++,
        category: 'campus',
        title: 'Vision of Learning & Leadership Arena',
        src: '/assets/vision.jpg'
    });
}

console.log('TOTAL IMAGES DETECTED ACROSS ALL FOLDERS:', allFound.length);

// Group counts by category
const counts = {};
allFound.forEach(img => {
    counts[img.category] = (counts[img.category] || 0) + 1;
});
console.log('COUNTS PER CATEGORY:', counts);
