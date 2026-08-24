/**
 * School Gallery Data Configuration
 */

export const galleryCategories = [
    { id: 'all', label: 'All Photos', icon: '📸' },
    { id: 'campus', label: 'Campus & Facilities', icon: '🏫' },
    { id: 'council', label: 'Student Council', icon: '🗳️' },
    { id: 'cooking', label: 'Cooking Activity', icon: '🍳' },
    { id: 'orientation', label: 'Parents Orientation', icon: '👨‍👩‍👧' },
    { id: 'health', label: 'Health Awareness', icon: '🩺' },
    { id: 'sports', label: 'Sports & Athletics', icon: '⚽' },
    { id: 'events', label: 'Events & Cultural', icon: '🎭' },
    { id: 'science', label: 'Science & Labs', icon: '🔬' },
    { id: 'celebrations', label: 'Celebrations', icon: '🎉' },
    { id: 'academics', label: 'Academic Life', icon: '📚' }
];

export const galleryImages = [
    // --- CAMPUS & FACILITIES ---
    {
        id: 1,
        category: 'campus',
        title: 'School Campus & Courtyard',
        src: '/assets/gallery/campus/school_campus_front.jpg'
    },
    {
        id: 2,
        category: 'campus',
        title: 'Smart Digital Classroom',
        src: '/assets/gallery/campus/smart_digital_classroom.jpg'
    },
    {
        id: 3,
        category: 'campus',
        title: 'Science & Chemistry Lab',
        src: '/assets/gallery/campus/science_lab_practical.jpg'
    },
    {
        id: 4,
        category: 'campus',
        title: 'Music & Instrumental Studio',
        src: '/assets/gallery/campus/music_instrument_session.jpg'
    },
    {
        id: 5,
        category: 'campus',
        title: 'Electronic Keyboard Training',
        src: '/assets/gallery/campus/music_keyboard_class.jpg'
    },
    {
        id: 6,
        category: 'campus',
        title: 'Acoustic Guitar Lessons',
        src: '/assets/gallery/campus/music_guitar_class.jpg'
    },
    {
        id: 7,
        category: 'campus',
        title: 'Main School Entrance',
        src: '/assets/gallery/campus/school_building.jpg'
    },

    // --- PARENTS ORIENTATION ---
    {
        id: 8,
        category: 'orientation',
        title: 'Parents Orientation Session',
        src: '/assets/gallery/orientation/orientation_welcome_session.jpg'
    },
    {
        id: 9,
        category: 'orientation',
        title: 'Vision & Mission Presentation',
        src: '/assets/gallery/orientation/orientation_vision_mission.jpg'
    },
    {
        id: 10,
        category: 'orientation',
        title: 'Academic Assessment Briefing',
        src: '/assets/gallery/orientation/orientation_assessment_pattern.jpg'
    },
    {
        id: 11,
        category: 'orientation',
        title: 'Curriculum & Syllabus Overview',
        src: '/assets/gallery/orientation/orientation_syllabus_presentation.jpg'
    },
    {
        id: 12,
        category: 'orientation',
        title: 'Leadership Address to Parents',
        src: '/assets/gallery/orientation/orientation_keynote_address.jpg'
    },

    // --- HEALTH AWARENESS ---
    {
        id: 13,
        category: 'health',
        title: 'Health & Hygiene Campaign',
        src: '/assets/gallery/health/hygiene_awareness_kits.jpg'
    },
    {
        id: 14,
        category: 'health',
        title: 'Student Wellness Workshop',
        src: '/assets/gallery/health/health_seminar_hall.jpg'
    },
    {
        id: 15,
        category: 'health',
        title: 'Personal Care & Hygiene Session',
        src: '/assets/gallery/health/student_wellness_session.jpg'
    },
    {
        id: 16,
        category: 'health',
        title: 'Health Awareness Gathering',
        src: '/assets/gallery/health/health_awareness_group.jpg'
    },
    {
        id: 17,
        category: 'health',
        title: 'POCSO & Child Safety Program',
        src: '/assets/gallery/health/pocso_safety_awareness.jpg'
    },

    // --- SPORTS & ATHLETICS ---
    {
        id: 18,
        category: 'sports',
        title: 'Annual Sports Meet - Sprint Finals',
        src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80'
    },
    {
        id: 19,
        category: 'sports',
        title: 'Football Championship',
        src: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1200&q=80'
    },
    {
        id: 20,
        category: 'sports',
        title: 'Basketball Practice',
        src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&q=80'
    },
    {
        id: 21,
        category: 'sports',
        title: 'International Yoga Day',
        src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80'
    },

    // --- EVENTS & CULTURAL ---
    {
        id: 22,
        category: 'events',
        title: 'Annual Cultural Fest - Dance',
        src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80'
    },
    {
        id: 23,
        category: 'events',
        title: 'Theatrical Stage Drama',
        src: 'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?w=1200&q=80'
    },
    {
        id: 24,
        category: 'events',
        title: 'Annual Prize Distribution',
        src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80'
    },

    // --- SCIENCE & LABS ---
    {
        id: 25,
        category: 'science',
        title: 'Senior Chemistry Lab Experiments',
        src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&q=80'
    },
    {
        id: 26,
        category: 'science',
        title: 'STEM & Robotics Exhibition',
        src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80'
    },
    {
        id: 27,
        category: 'science',
        title: 'Computer & IT Lab',
        src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80'
    },

    // --- CELEBRATIONS ---
    {
        id: 28,
        category: 'celebrations',
        title: 'Independence Day Flag Hoisting',
        src: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1200&q=80'
    },
    {
        id: 29,
        category: 'celebrations',
        title: 'Teachers\' Day Celebrations',
        src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80'
    },
    {
        id: 30,
        category: 'celebrations',
        title: 'Republic Day Parade & Drill',
        src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&q=80'
    },

    // --- ACADEMIC LIFE ---
    {
        id: 31,
        category: 'academics',
        title: 'Collaborative Group Study',
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80'
    },
    {
        id: 32,
        category: 'academics',
        title: 'Fine Arts & Painting Studio',
        src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&q=80'
    },
    {
        id: 33,
        category: 'academics',
        title: 'Maths & Puzzle Workshop',
        src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80'
    },

    // --- COOKING WITHOUT FIRE ACTIVITY ---
    {
        id: 34,
        category: 'cooking',
        title: 'Little Chefs - Cooking Without Fire Team',
        src: '/assets/gallery/cooking/cooking_without_fire_team.jpg'
    },
    {
        id: 35,
        category: 'cooking',
        title: 'Dahi Golgappe & Refreshing Drinks Platter',
        src: '/assets/gallery/cooking/cooking_golgappa_platter.jpg'
    },
    {
        id: 36,
        category: 'cooking',
        title: 'Club Sandwiches & Red Mocktails',
        src: '/assets/gallery/cooking/cooking_sandwiches_mocktails.jpg'
    },
    {
        id: 37,
        category: 'cooking',
        title: 'Culinary Platter with Special Chutneys',
        src: '/assets/gallery/cooking/cooking_delicious_platters.jpg'
    },
    {
        id: 38,
        category: 'cooking',
        title: 'Class Vth Activity Menu Blackboard',
        src: '/assets/gallery/cooking/cooking_activity_board.jpg'
    },

    // --- STUDENT COUNCIL ELECTIONS ---
    {
        id: 39,
        category: 'council',
        title: 'Elected Student Council & House Prefects',
        src: '/assets/gallery/council/student_council_assembly.jpg'
    },
    {
        id: 40,
        category: 'council',
        title: 'Blue House Prefects with Faculty Mentors',
        src: '/assets/gallery/council/council_blue_house.jpg'
    },
    {
        id: 41,
        category: 'council',
        title: 'Yellow House Prefects with Faculty Mentors',
        src: '/assets/gallery/council/council_yellow_house.jpg'
    },
    {
        id: 42,
        category: 'council',
        title: 'Green House Prefects with Faculty Mentors',
        src: '/assets/gallery/council/council_green_house.jpg'
    },
    {
        id: 43,
        category: 'council',
        title: 'White House Prefects with Faculty Mentors',
        src: '/assets/gallery/council/council_white_house.jpg'
    }
];
