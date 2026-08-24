/**
 * School Gallery Data Configuration
 */

export const galleryCategories = [
    { id: 'all', label: 'All Photos', icon: '📸' },
    { id: 'campus', label: 'Campus & Facilities', icon: '🏫' },
    { id: 'diwali', label: 'Diwali Celebrations', icon: '🪔' },
    { id: 'halloween', label: 'Halloween Day', icon: '🎃' },
    { id: 'grandparents', label: 'Grandparents Day', icon: '👵👴' },
    { id: 'independence', label: 'Independence Day', icon: '🇮🇳' },
    { id: 'samarpan', label: 'Samarpan & Janmashtami', icon: '✨' },
    { id: 'results', label: 'Annual Result Day', icon: '🏆' },
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

    // --- SPORTS & ATHLETICS (INTER-HOUSE COMPETITION) ---
    {
        id: 18,
        category: 'sports',
        title: 'Inter-House Badminton Tournament in Courtyard',
        src: '/assets/gallery/sports/sports_interhouse_badminton.jpg'
    },
    {
        id: 19,
        category: 'sports',
        title: 'Carrom Championship - Boys Division',
        src: '/assets/gallery/sports/sports_carrom_boys.jpg'
    },
    {
        id: 20,
        category: 'sports',
        title: 'Carrom Championship - Girls Division',
        src: '/assets/gallery/sports/sports_carrom_girls.jpg'
    },
    {
        id: 21,
        category: 'sports',
        title: 'Inter-House Chess Strategic Championship',
        src: '/assets/gallery/sports/sports_chess_championship.jpg'
    },
    {
        id: 22,
        category: 'sports',
        title: 'Inter-House Sports & Quiz Delegation Gathering',
        src: '/assets/gallery/sports/sports_interhouse_team_assembly.jpg'
    },

    // --- EVENTS & CULTURAL ---
    {
        id: 23,
        category: 'events',
        title: 'Annual Cultural Fest - Dance',
        src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80'
    },
    {
        id: 24,
        category: 'events',
        title: 'Theatrical Stage Drama',
        src: 'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?w=1200&q=80'
    },
    {
        id: 25,
        category: 'events',
        title: 'Annual Prize Distribution',
        src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80'
    },

    // --- SCIENCE & LABS ---
    {
        id: 26,
        category: 'science',
        title: 'Senior Chemistry Lab Experiments',
        src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&q=80'
    },
    {
        id: 27,
        category: 'science',
        title: 'STEM & Robotics Exhibition',
        src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80'
    },
    {
        id: 28,
        category: 'science',
        title: 'Computer & IT Lab',
        src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80'
    },

    // --- CELEBRATIONS ---
    {
        id: 29,
        category: 'celebrations',
        title: 'Independence Day Flag Hoisting',
        src: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1200&q=80'
    },
    {
        id: 30,
        category: 'celebrations',
        title: 'Teachers\' Day Celebrations',
        src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80'
    },
    {
        id: 31,
        category: 'celebrations',
        title: 'Republic Day Parade & Drill',
        src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&q=80'
    },

    // --- ACADEMIC LIFE ---
    {
        id: 32,
        category: 'academics',
        title: 'Collaborative Group Study',
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80'
    },
    {
        id: 33,
        category: 'academics',
        title: 'Fine Arts & Painting Studio',
        src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&q=80'
    },
    {
        id: 34,
        category: 'academics',
        title: 'Maths & Puzzle Workshop',
        src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80'
    },

    // --- COOKING WITHOUT FIRE ACTIVITY ---
    {
        id: 35,
        category: 'cooking',
        title: 'Little Chefs - Cooking Without Fire Team',
        src: '/assets/gallery/cooking/cooking_without_fire_team.jpg'
    },
    {
        id: 36,
        category: 'cooking',
        title: 'Dahi Golgappe & Refreshing Drinks Platter',
        src: '/assets/gallery/cooking/cooking_golgappa_platter.jpg'
    },
    {
        id: 37,
        category: 'cooking',
        title: 'Club Sandwiches & Red Mocktails',
        src: '/assets/gallery/cooking/cooking_sandwiches_mocktails.jpg'
    },
    {
        id: 38,
        category: 'cooking',
        title: 'Culinary Platter with Special Chutneys',
        src: '/assets/gallery/cooking/cooking_delicious_platters.jpg'
    },
    {
        id: 39,
        category: 'cooking',
        title: 'Class Vth Activity Menu Blackboard',
        src: '/assets/gallery/cooking/cooking_activity_board.jpg'
    },

    // --- STUDENT COUNCIL ELECTIONS ---
    {
        id: 40,
        category: 'council',
        title: 'Elected Student Council & House Prefects',
        src: '/assets/gallery/council/student_council_assembly.jpg'
    },
    {
        id: 41,
        category: 'council',
        title: 'Blue House Prefects with Faculty Mentors',
        src: '/assets/gallery/council/council_blue_house.jpg'
    },
    {
        id: 42,
        category: 'council',
        title: 'Yellow House Prefects with Faculty Mentors',
        src: '/assets/gallery/council/council_yellow_house.jpg'
    },
    {
        id: 43,
        category: 'council',
        title: 'Green House Prefects with Faculty Mentors',
        src: '/assets/gallery/council/council_green_house.jpg'
    },
    {
        id: 44,
        category: 'council',
        title: 'White House Prefects with Faculty Mentors',
        src: '/assets/gallery/council/council_white_house.jpg'
    },

    // --- ANNUAL RESULT DAY ---
    {
        id: 45,
        category: 'results',
        title: 'Annual Result Day Merit Trophies Table',
        src: '/assets/gallery/results/annual_result_trophies.jpg'
    },
    {
        id: 46,
        category: 'results',
        title: '1st Rank Topper on Victory Podium',
        src: '/assets/gallery/results/annual_result_podium_topper.jpg'
    },
    {
        id: 47,
        category: 'results',
        title: 'Academic Distinction Group Felicitation',
        src: '/assets/gallery/results/annual_result_merit_group.jpg'
    },
    {
        id: 48,
        category: 'results',
        title: 'Top 3 Position Holders on Podium with Faculty',
        src: '/assets/gallery/results/annual_result_top_rankers.jpg'
    },
    {
        id: 49,
        category: 'results',
        title: 'Prize & Merit Certificate Distribution Ceremony',
        src: '/assets/gallery/results/annual_result_award_ceremony.jpg'
    },

    // --- SAMARPAN & JANMASHTAMI ---
    {
        id: 50,
        category: 'samarpan',
        title: 'Samarpan - Classroom Community Sharing Meal',
        src: '/assets/gallery/celebrations/samarpan_community_meal_1.jpg'
    },
    {
        id: 51,
        category: 'samarpan',
        title: 'Samarpan - Students Dining Together in Joy',
        src: '/assets/gallery/celebrations/samarpan_classroom_feast.jpg'
    },
    {
        id: 52,
        category: 'samarpan',
        title: 'Samarpan - Community Feast Along Corridors',
        src: '/assets/gallery/celebrations/samarpan_student_sharing.jpg'
    },
    {
        id: 53,
        category: 'samarpan',
        title: 'Janmashtami - Govardhan Leela Cave Diorama',
        src: '/assets/gallery/celebrations/janmashtami_govardhan_diorama.jpg'
    },
    {
        id: 54,
        category: 'samarpan',
        title: 'Janmashtami - Handcrafted Krishna Makhan Pots',
        src: '/assets/gallery/celebrations/janmashtami_krishna_matki_decor.jpg'
    },

    // --- INDEPENDENCE DAY CELEBRATIONS ---
    {
        id: 55,
        category: 'independence',
        title: 'Independence Day 15 August Art Display',
        src: '/assets/gallery/independence/independence_vayu_house_art.jpg'
    },
    {
        id: 56,
        category: 'independence',
        title: 'Faculty Keynote on Patriotic Values',
        src: '/assets/gallery/independence/independence_teacher_speech.jpg'
    },
    {
        id: 57,
        category: 'independence',
        title: 'Unity in Diversity Tricolour Rangoli Art',
        src: '/assets/gallery/independence/independence_unity_rangoli.jpg'
    },
    {
        id: 58,
        category: 'independence',
        title: 'Independence Day School Assembly Address',
        src: '/assets/gallery/independence/independence_assembly_address.jpg'
    },
    {
        id: 59,
        category: 'independence',
        title: 'Happy Independence Day Rangoli Creation',
        src: '/assets/gallery/independence/independence_tricolour_rangoli.jpg'
    },

    // --- GRANDPARENTS DAY CELEBRATIONS ---
    {
        id: 60,
        category: 'grandparents',
        title: 'Grandparents Day Celebrations - Twins Photo Frame',
        src: '/assets/gallery/grandparents/grandparents_day_twins.jpg'
    },
    {
        id: 61,
        category: 'grandparents',
        title: 'Grandparents Blessing - Photo Frame Memories',
        src: '/assets/gallery/grandparents/grandparents_day_girls.jpg'
    },
    {
        id: 62,
        category: 'grandparents',
        title: 'Handcrafted Greeting Card for Grandparents',
        src: '/assets/gallery/grandparents/grandparents_day_greeting_card.jpg'
    },
    {
        id: 63,
        category: 'grandparents',
        title: 'Grandparents Day - Heartfelt Family Moments',
        src: '/assets/gallery/grandparents/grandparents_day_family_frame.jpg'
    },
    {
        id: 64,
        category: 'grandparents',
        title: 'Students Presenting Love to Grandparents',
        src: '/assets/gallery/grandparents/grandparents_day_handmade_cards.jpg'
    },

    // --- HALLOWEEN DAY CELEBRATIONS ---
    {
        id: 65,
        category: 'halloween',
        title: 'Halloween Costume Troupe on Lawn',
        src: '/assets/gallery/halloween/halloween_garden_troupe.jpg'
    },
    {
        id: 66,
        category: 'halloween',
        title: 'Spooky Prank at Reception Desk',
        src: '/assets/gallery/halloween/halloween_reception_spook.jpg'
    },
    {
        id: 67,
        category: 'halloween',
        title: 'Eerie Mystery Peeking from Foliage',
        src: '/assets/gallery/halloween/halloween_foliage_peek.jpg'
    },
    {
        id: 68,
        category: 'halloween',
        title: 'Halloween Ghoul Squad Office Pose',
        src: '/assets/gallery/halloween/halloween_reception_squad.jpg'
    },
    {
        id: 69,
        category: 'halloween',
        title: 'Mystic Witch Costume & Dramatic Art',
        src: '/assets/gallery/halloween/halloween_witch_costume.jpg'
    },

    // --- DIWALI CELEBRATIONS ---
    {
        id: 70,
        category: 'diwali',
        title: 'Diwali Handcrafted Diya Painting Activity',
        src: '/assets/gallery/diwali/diwali_diya_painting_student.jpg'
    },
    {
        id: 71,
        category: 'diwali',
        title: 'Jal House Shubh Deepawali & Peacock Rangoli',
        src: '/assets/gallery/diwali/diwali_jal_house_rangoli.jpg'
    },
    {
        id: 72,
        category: 'diwali',
        title: 'Clay Diya Colouring & Craft Workshop',
        src: '/assets/gallery/diwali/diwali_classroom_diya_craft.jpg'
    },
    {
        id: 73,
        category: 'diwali',
        title: 'Goddess Lakshmi Rangoli by School Team',
        src: '/assets/gallery/diwali/diwali_lakshmi_rangoli_team.jpg'
    },
    {
        id: 74,
        category: 'diwali',
        title: 'Agni House Shubh Labh Floral Rangoli',
        src: '/assets/gallery/diwali/diwali_agni_house_rangoli.jpg'
    }
];
