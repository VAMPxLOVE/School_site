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
    { id: 'health', label: 'Health Awareness', icon: '🩺' },
    { id: 'orientation', label: 'Parents Orientation', icon: '👨‍👩‍👧' },
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
        title: 'Main School Campus & Courtyard',
        caption: 'Spacious school campus building and landscaped courtyard at D.R.P. Convent Public School.',
        src: '/assets/gallery/campus/school_campus_front.jpg',
        date: '2026',
        tags: ['campus', 'building', 'courtyard', 'cbse']
    },
    {
        id: 2,
        category: 'campus',
        title: 'Smart Interactive Digital Classroom',
        caption: 'Students engaged in interactive digital learning with modern audiovisual smart boards and dedicated educators.',
        src: '/assets/gallery/campus/smart_digital_classroom.jpg',
        date: '2026',
        tags: ['smart-class', 'digital', 'classroom', 'campus']
    },
    {
        id: 3,
        category: 'campus',
        title: 'Science & Chemistry Laboratory',
        caption: 'Hands-on practical experiments and science demonstrations under teacher mentorship in our well-equipped laboratory.',
        src: '/assets/gallery/campus/science_lab_practical.jpg',
        date: '2026',
        tags: ['science', 'lab', 'chemistry', 'experiments', 'campus']
    },
    {
        id: 4,
        category: 'campus',
        title: 'Music & Instrumental Studio Session',
        caption: 'Students learning synthesizer keyboard and acoustic guitar during co-curricular music training.',
        src: '/assets/gallery/campus/music_instrument_session.jpg',
        date: '2026',
        tags: ['music', 'guitar', 'keyboard', 'arts', 'campus']
    },
    {
        id: 5,
        category: 'campus',
        title: 'Keyboard & Melody Practice',
        caption: 'Guided electronic keyboard lessons fostering musical rhythm and talent.',
        src: '/assets/gallery/campus/music_keyboard_class.jpg',
        date: '2026',
        tags: ['music', 'keyboard', 'studio', 'campus']
    },
    {
        id: 6,
        category: 'campus',
        title: 'Acoustic Guitar Workshop',
        caption: 'Interactive guitar training and music appreciation with our dedicated faculty.',
        src: '/assets/gallery/campus/music_guitar_class.jpg',
        date: '2026',
        tags: ['music', 'guitar', 'campus', 'workshop']
    },
    {
        id: 7,
        category: 'campus',
        title: 'Main Entrance & School Facade',
        caption: 'Front facade of D.R.P. Convent Public School (Recognized & Affiliated to C.B.S.E.).',
        src: '/assets/gallery/campus/school_building.jpg',
        date: '2026',
        tags: ['campus', 'building', 'entrance', 'cbse']
    },

    // --- SPORTS & ATHLETICS ---
    {
        id: 8,
        category: 'sports',
        title: 'Annual Sports Meet - Sprint Finals',
        caption: 'Students competing in the 100m inter-house track sprint championship with spirited cheer.',
        src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80',
        date: '2026',
        tags: ['sports', 'athletics', 'race', 'sprint']
    },
    {
        id: 9,
        category: 'sports',
        title: 'Inter-School Football Championship',
        caption: 'Our senior football team in action during the regional championship tournament.',
        src: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1200&q=80',
        date: '2025',
        tags: ['football', 'sports', 'team', 'tournament']
    },
    {
        id: 10,
        category: 'sports',
        title: 'Basketball Court Training',
        caption: 'Dedicated coaching sessions on our synthetic outdoor basketball court.',
        src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&q=80',
        date: '2026',
        tags: ['basketball', 'sports', 'fitness']
    },
    {
        id: 11,
        category: 'sports',
        title: 'International Yoga Day Gathering',
        caption: 'Students and faculty practicing holistic wellness, pranayama, and yoga asanas.',
        src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80',
        date: '2025',
        tags: ['yoga', 'wellness', 'health']
    },

    // --- ANNUAL DAY & CULTURAL EVENTS ---
    {
        id: 12,
        category: 'events',
        title: 'Annual Cultural Fest - Classical Dance',
        caption: 'Enthralling classical Bharatanatyam and folk performances during the Annual Day gala.',
        src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80',
        date: '2025',
        tags: ['annual-day', 'dance', 'culture', 'celebration']
    },
    {
        id: 13,
        category: 'events',
        title: 'Theatrical Stage Play & Drama',
        caption: 'Students staging an adaptation of historic literature during the literary drama festival.',
        src: 'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?w=1200&q=80',
        date: '2025',
        tags: ['drama', 'theatre', 'stage', 'acting']
    },
    {
        id: 14,
        category: 'events',
        title: 'Annual Prize Distribution Ceremony',
        caption: 'Merit scholars and sports achievers receiving trophies and certificates from honored guests.',
        src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80',
        date: '2026',
        tags: ['awards', 'prizes', 'achievement', 'merit']
    },

    // --- SCIENCE & LABS ---
    {
        id: 15,
        category: 'science',
        title: 'Senior Chemistry Laboratory Experiments',
        caption: 'Hands-on titration and chemical analysis under guided supervision in modern wet labs.',
        src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&q=80',
        date: '2026',
        tags: ['chemistry', 'lab', 'science', 'experiment']
    },
    {
        id: 16,
        category: 'science',
        title: 'STEM & Robotics Exhibition',
        caption: 'Student-built autonomous rovers and IoT sensors displayed at the Annual Science Fair.',
        src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80',
        date: '2026',
        tags: ['robotics', 'stem', 'innovation', 'technology']
    },
    {
        id: 17,
        category: 'science',
        title: 'Advanced Computer & AI Lab',
        caption: 'High-performance workstations dedicated to coding, Python programming, and digital design.',
        src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80',
        date: '2026',
        tags: ['computer', 'coding', 'ai', 'lab']
    },

    // --- CELEBRATIONS & FESTIVALS ---
    {
        id: 18,
        category: 'celebrations',
        title: 'Independence Day Flag Hoisting',
        caption: 'Grand tricolor hoisting ceremony accompanied by national anthem and NCC cadet parade.',
        src: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1200&q=80',
        date: '2025',
        tags: ['independence-day', 'patriotic', 'flag', 'ncc']
    },
    {
        id: 19,
        category: 'celebrations',
        title: 'Teachers\' Day Tribute & Special Assembly',
        caption: 'Students presenting personalized mementos and cultural performances to honor our beloved teachers.',
        src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80',
        date: '2025',
        tags: ['teachers-day', 'celebration', 'gratitude']
    },
    {
        id: 20,
        category: 'celebrations',
        title: 'Republic Day Parade & Drill',
        caption: 'Disciplined march past and synchronized drills by the school student council and houses.',
        src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&q=80',
        date: '2026',
        tags: ['republic-day', 'parade', 'marchpast']
    },

    // --- ACADEMIC LIFE ---
    {
        id: 21,
        category: 'academics',
        title: 'Collaborative Group Study & Problem Solving',
        caption: 'Students engaging in active peer discussions and brainstorming for group projects.',
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80',
        date: '2026',
        tags: ['academics', 'study', 'collaboration', 'students']
    },
    {
        id: 22,
        category: 'academics',
        title: 'Fine Arts & Painting Studio',
        caption: 'Nurturing creativity and aesthetic expression through watercolors, sketchcraft, and sculpture.',
        src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&q=80',
        date: '2025',
        tags: ['art', 'painting', 'creativity', 'studio']
    },
    {
        id: 23,
        category: 'academics',
        title: 'Interactive Maths & Puzzle Workshop',
        caption: 'Practical conceptual learning using geometric models, abacus, and logic puzzles.',
        src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80',
        date: '2026',
        tags: ['workshop', 'maths', 'learning', 'academics']
    },

    // --- HEALTH AWARENESS & WELLNESS ---
    {
        id: 24,
        category: 'health',
        title: 'Hygiene & Health Awareness Drive',
        caption: 'Special health awareness drive promoting student hygiene and wellness with health kit distributions.',
        src: '/assets/gallery/health/hygiene_awareness_kits.jpg',
        date: '2026',
        tags: ['health', 'hygiene', 'wellness', 'awareness', 'campaign']
    },
    {
        id: 25,
        category: 'health',
        title: 'Student Wellness & Hygiene Workshop',
        caption: 'Interactive seminar in the school hall educating students on balanced health and daily personal hygiene.',
        src: '/assets/gallery/health/health_seminar_hall.jpg',
        date: '2026',
        tags: ['health', 'seminar', 'wellness', 'workshop']
    },
    {
        id: 26,
        category: 'health',
        title: 'Adolescent Health Guidance Session',
        caption: 'Educating young students on personal care, nutrition, and healthy daily habits.',
        src: '/assets/gallery/health/student_wellness_session.jpg',
        date: '2026',
        tags: ['health', 'guidance', 'nutrition', 'students']
    },
    {
        id: 27,
        category: 'health',
        title: 'Health Awareness Delegation & Assembly',
        caption: 'Students participating enthusiastically in the school-wide health and hygiene awareness initiative.',
        src: '/assets/gallery/health/health_awareness_group.jpg',
        date: '2026',
        tags: ['health', 'assembly', 'awareness', 'group']
    },
    {
        id: 28,
        category: 'health',
        title: 'POCSO Act & Child Safety Awareness Program',
        caption: 'Educational presentation on child rights, safety guidelines, and legal awareness conducted in the digital hall.',
        src: '/assets/gallery/health/pocso_safety_awareness.jpg',
        date: '2026',
        tags: ['pocso', 'child-safety', 'health', 'awareness', 'legal-rights']
    },

    // --- PARENTS ORIENTATION ---
    {
        id: 29,
        category: 'orientation',
        title: 'Parents Orientation 2026-27 Inaugural Session',
        caption: 'Welcoming parents and students to the annual orientation programme introducing school values, leadership, and policies.',
        src: '/assets/gallery/orientation/orientation_welcome_session.jpg',
        date: '2026',
        tags: ['orientation', 'parents', 'welcome', 'academic-session']
    },
    {
        id: 30,
        category: 'orientation',
        title: 'School Vision, Mission & Goals Presentation',
        caption: 'Detailed briefing on D.R.P. Convent Public School’s pedagogical vision and educational milestones.',
        src: '/assets/gallery/orientation/orientation_vision_mission.jpg',
        date: '2026',
        tags: ['orientation', 'vision', 'mission', 'pedagogy']
    },
    {
        id: 31,
        category: 'orientation',
        title: 'Academic Assessment Pattern & Grading Framework',
        caption: 'Guiding parents through term examinations, continuous evaluations, and holistic assessment criteria.',
        src: '/assets/gallery/orientation/orientation_assessment_pattern.jpg',
        date: '2026',
        tags: ['orientation', 'academics', 'assessment', 'exams']
    },
    {
        id: 32,
        category: 'orientation',
        title: 'Curriculum & Syllabus Booklet Overview',
        caption: 'Comprehensive walkthrough of class syllabus, learning outcomes, and subject guidelines for parents.',
        src: '/assets/gallery/orientation/orientation_syllabus_presentation.jpg',
        date: '2026',
        tags: ['orientation', 'syllabus', 'curriculum', 'academics']
    },
    {
        id: 33,
        category: 'orientation',
        title: 'Leadership Keynote Address to Parents',
        caption: 'Faculty leadership and coordinators addressing parent queries and sharing co-curricular roadmaps.',
        src: '/assets/gallery/orientation/orientation_keynote_address.jpg',
        date: '2026',
        tags: ['orientation', 'keynote', 'leadership', 'faculty']
    }
];
