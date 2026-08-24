/**
 * ==============================================================================
 * School Gallery Data Configuration
 * ==============================================================================
 * 
 * HOW TO ADD OR UPDATE PHOTOS:
 * ------------------------------------------------------------------------------
 * 1. OPTION A - LOCAL PHOTOS:
 *    - Save your image inside: `public/assets/gallery/<category>/your-photo.jpg`
 *    - Set `src: '/assets/gallery/<category>/your-photo.jpg'`
 * 
 * 2. OPTION B - ONLINE PHOTO URL:
 *    - Upload your image to Google Drive, Cloudinary, Imgur, or direct web link.
 *    - Set `src: 'https://example.com/your-photo.jpg'`
 * 
 * 3. Add or modify entries in the `galleryImages` array below.
 * ==============================================================================
 */

export const galleryCategories = [
    { id: 'all', label: 'All Photos', icon: '📸' },
    { id: 'campus', label: 'Campus & Facilities', icon: '🏫' },
    { id: 'sports', label: 'Sports & Athletics', icon: '⚽' },
    { id: 'events', label: 'Annual Day & Cultural', icon: '🎭' },
    { id: 'science', label: 'Science & Labs', icon: '🔬' },
    { id: 'celebrations', label: 'Celebrations & Festivals', icon: '🎉' },
    { id: 'academics', label: 'Academic Life', icon: '📚' }
];

export const galleryImages = [
    // --- CAMPUS & FACILITIES ---
    {
        id: 1,
        category: 'campus',
        title: 'Main Administrative & Academic Block',
        caption: 'Front facade of D.R.P. Convent Public School with landscaped entrance and green lawns.',
        src: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80',
        date: '2026',
        tags: ['campus', 'building', 'infrastructure']
    },
    {
        id: 2,
        category: 'campus',
        title: 'Central Resource Library',
        caption: 'A serene reading environment housing over 15,000 reference volumes, journals, and digital periodicals.',
        src: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=80',
        date: '2026',
        tags: ['library', 'reading', 'books', 'campus']
    },
    {
        id: 3,
        category: 'campus',
        title: 'Smart Interactive Classroom',
        caption: 'Equipped with digital touchscreens, audiovisual aids, and high-speed e-learning resources.',
        src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80',
        date: '2026',
        tags: ['smart-class', 'digital', 'technology']
    },
    {
        id: 4,
        category: 'campus',
        title: 'Auditorium & Multipurpose Hall',
        caption: 'State-of-the-art acoustic auditorium accommodating 800+ attendees for seminars, assemblies, and conferences.',
        src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&q=80',
        date: '2025',
        tags: ['auditorium', 'hall', 'campus']
    },

    // --- SPORTS & ATHLETICS ---
    {
        id: 5,
        category: 'sports',
        title: 'Annual Sports Meet - Sprint Finals',
        caption: 'Students competing in the 100m inter-house track sprint championship with spirited cheer.',
        src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80',
        date: '2026',
        tags: ['sports', 'athletics', 'race', 'sprint']
    },
    {
        id: 6,
        category: 'sports',
        title: 'Inter-School Football Championship',
        caption: 'Our senior football team in action during the regional championship tournament.',
        src: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1200&q=80',
        date: '2025',
        tags: ['football', 'sports', 'team', 'tournament']
    },
    {
        id: 7,
        category: 'sports',
        title: 'Basketball Court Training',
        caption: 'Dedicated coaching sessions on our synthetic outdoor basketball court.',
        src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&q=80',
        date: '2026',
        tags: ['basketball', 'sports', 'fitness']
    },
    {
        id: 8,
        category: 'sports',
        title: 'International Yoga Day Gathering',
        caption: 'Students and faculty practicing holistic wellness, pranayama, and yoga asanas.',
        src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80',
        date: '2025',
        tags: ['yoga', 'wellness', 'health']
    },

    // --- ANNUAL DAY & CULTURAL EVENTS ---
    {
        id: 9,
        category: 'events',
        title: 'Annual Cultural Fest - Classical Dance',
        caption: 'Enthralling classical Bharatanatyam and folk performances during the Annual Day gala.',
        src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80',
        date: '2025',
        tags: ['annual-day', 'dance', 'culture', 'celebration']
    },
    {
        id: 10,
        category: 'events',
        title: 'Theatrical Stage Play & Drama',
        caption: 'Students staging an adaptation of historic literature during the literary drama festival.',
        src: 'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?w=1200&q=80',
        date: '2025',
        tags: ['drama', 'theatre', 'stage', 'acting']
    },
    {
        id: 11,
        category: 'events',
        title: 'Annual Prize Distribution Ceremony',
        caption: 'Merit scholars and sports achievers receiving trophies and certificates from honored guests.',
        src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80',
        date: '2026',
        tags: ['awards', 'prizes', 'achievement', 'merit']
    },

    // --- SCIENCE & LABS ---
    {
        id: 12,
        category: 'science',
        title: 'Senior Chemistry Laboratory Experiments',
        caption: 'Hands-on titration and chemical analysis under guided supervision in modern wet labs.',
        src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&q=80',
        date: '2026',
        tags: ['chemistry', 'lab', 'science', 'experiment']
    },
    {
        id: 13,
        category: 'science',
        title: 'STEM & Robotics Exhibition',
        caption: 'Student-built autonomous rovers and IoT sensors displayed at the Annual Science Fair.',
        src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80',
        date: '2026',
        tags: ['robotics', 'stem', 'innovation', 'technology']
    },
    {
        id: 14,
        category: 'science',
        title: 'Advanced Computer & AI Lab',
        caption: 'High-performance workstations dedicated to coding, Python programming, and digital design.',
        src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80',
        date: '2026',
        tags: ['computer', 'coding', 'ai', 'lab']
    },

    // --- CELEBRATIONS & FESTIVALS ---
    {
        id: 15,
        category: 'celebrations',
        title: 'Independence Day Flag Hoisting',
        caption: 'Grand tricolor hoisting ceremony accompanied by national anthem and NCC cadet parade.',
        src: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1200&q=80',
        date: '2025',
        tags: ['independence-day', 'patriotic', 'flag', 'ncc']
    },
    {
        id: 16,
        category: 'celebrations',
        title: 'Teachers\' Day Tribute & Special Assembly',
        caption: 'Students presenting personalized mementos and cultural performances to honor our beloved teachers.',
        src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80',
        date: '2025',
        tags: ['teachers-day', 'celebration', 'gratitude']
    },
    {
        id: 17,
        category: 'celebrations',
        title: 'Republic Day Parade & Drill',
        caption: 'Disciplined march past and synchronized drills by the school student council and houses.',
        src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&q=80',
        date: '2026',
        tags: ['republic-day', 'parade', 'marchpast']
    },

    // --- ACADEMIC LIFE ---
    {
        id: 18,
        category: 'academics',
        title: 'Collaborative Group Study & Problem Solving',
        caption: 'Students engaging in active peer discussions and brainstorming for group projects.',
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80',
        date: '2026',
        tags: ['academics', 'study', 'collaboration', 'students']
    },
    {
        id: 19,
        category: 'academics',
        title: 'Fine Arts & Painting Studio',
        caption: 'Nurturing creativity and aesthetic expression through watercolors, sketchcraft, and sculpture.',
        src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&q=80',
        date: '2025',
        tags: ['art', 'painting', 'creativity', 'studio']
    },
    {
        id: 20,
        category: 'academics',
        title: 'Interactive Maths & Puzzle Workshop',
        caption: 'Practical conceptual learning using geometric models, abacus, and logic puzzles.',
        src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80',
        date: '2026',
        tags: ['workshop', 'maths', 'learning', 'academics']
    }
];
