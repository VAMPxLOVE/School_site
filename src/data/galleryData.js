/**
 * School Gallery Data Configuration
 * 100% Authentic School Event & Campus Photos
 */

export const galleryCategories = [
    { id: 'all', label: 'All Photos', icon: '📸' },
    { id: 'campus', label: 'Campus & Facilities', icon: '🏫' },
    { id: 'farewell', label: 'Farewell Ceremony', icon: '🎓' },
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
    { id: 'sports', label: 'Sports & Athletics', icon: '⚽' }
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


    // --- FAREWELL CEREMONY ---
    {
        id: 8,
        category: 'farewell',
        title: 'Happy Farewell Celebration Welcome Arch',
        src: '/assets/gallery/farewell/farewell_balloon_arch.jpg'
    },
    {
        id: 9,
        category: 'farewell',
        title: 'Class X Outgoing Batch Farewell Dance & Memories',
        src: '/assets/gallery/farewell/farewell_celebration_dance.jpg'
    },
    {
        id: 10,
        category: 'farewell',
        title: 'Farewell Memento Presentation to Student',
        src: '/assets/gallery/farewell/farewell_memento_presentation_1.jpg'
    },
    {
        id: 11,
        category: 'farewell',
        title: 'Token of Blessing & Best Wishes to Outgoing Student',
        src: '/assets/gallery/farewell/farewell_memento_presentation_2.jpg'
    },
    {
        id: 12,
        category: 'farewell',
        title: 'Graduating Student Felicitation by Faculty',
        src: '/assets/gallery/farewell/farewell_memento_presentation_3.jpg'
    },

    // --- DIWALI CELEBRATIONS ---
    {
        id: 13,
        category: 'diwali',
        title: 'Diwali Handcrafted Diya Painting Activity',
        src: '/assets/gallery/diwali/diwali_diya_painting_student.jpg'
    },
    {
        id: 14,
        category: 'diwali',
        title: 'Jal House Shubh Deepawali & Peacock Rangoli',
        src: '/assets/gallery/diwali/diwali_jal_house_rangoli.jpg'
    },
    {
        id: 15,
        category: 'diwali',
        title: 'Clay Diya Colouring & Craft Workshop',
        src: '/assets/gallery/diwali/diwali_classroom_diya_craft.jpg'
    },
    {
        id: 16,
        category: 'diwali',
        title: 'Goddess Lakshmi Rangoli by School Team',
        src: '/assets/gallery/diwali/diwali_lakshmi_rangoli_team.jpg'
    },
    {
        id: 17,
        category: 'diwali',
        title: 'Agni House Shubh Labh Floral Rangoli',
        src: '/assets/gallery/diwali/diwali_agni_house_rangoli.jpg'
    },

    // --- HALLOWEEN DAY CELEBRATIONS ---
    {
        id: 18,
        category: 'halloween',
        title: 'Halloween Costume Troupe on Lawn',
        src: '/assets/gallery/halloween/halloween_garden_troupe.jpg'
    },
    {
        id: 19,
        category: 'halloween',
        title: 'Spooky Prank at Reception Desk',
        src: '/assets/gallery/halloween/halloween_reception_spook.jpg'
    },
    {
        id: 20,
        category: 'halloween',
        title: 'Eerie Mystery Peeking from Foliage',
        src: '/assets/gallery/halloween/halloween_foliage_peek.jpg'
    },
    {
        id: 21,
        category: 'halloween',
        title: 'Halloween Ghoul Squad Office Pose',
        src: '/assets/gallery/halloween/halloween_reception_squad.jpg'
    },
    {
        id: 22,
        category: 'halloween',
        title: 'Mystic Witch Costume & Dramatic Art',
        src: '/assets/gallery/halloween/halloween_witch_costume.jpg'
    },

    // --- GRANDPARENTS DAY CELEBRATIONS ---
    {
        id: 23,
        category: 'grandparents',
        title: 'Grandparents Day Celebrations - Twins Photo Frame',
        src: '/assets/gallery/grandparents/grandparents_day_twins.jpg'
    },
    {
        id: 24,
        category: 'grandparents',
        title: 'Grandparents Blessing - Photo Frame Memories',
        src: '/assets/gallery/grandparents/grandparents_day_girls.jpg'
    },
    {
        id: 25,
        category: 'grandparents',
        title: 'Handcrafted Greeting Card for Grandparents',
        src: '/assets/gallery/grandparents/grandparents_day_greeting_card.jpg'
    },
    {
        id: 26,
        category: 'grandparents',
        title: 'Grandparents Day - Heartfelt Family Moments',
        src: '/assets/gallery/grandparents/grandparents_day_family_frame.jpg'
    },
    {
        id: 27,
        category: 'grandparents',
        title: 'Students Presenting Love to Grandparents',
        src: '/assets/gallery/grandparents/grandparents_day_handmade_cards.jpg'
    },

    // --- INDEPENDENCE DAY CELEBRATIONS ---
    {
        id: 28,
        category: 'independence',
        title: 'Independence Day 15 August Art Display',
        src: '/assets/gallery/independence/independence_vayu_house_art.jpg'
    },
    {
        id: 29,
        category: 'independence',
        title: 'Faculty Keynote on Patriotic Values',
        src: '/assets/gallery/independence/independence_teacher_speech.jpg'
    },
    {
        id: 30,
        category: 'independence',
        title: 'Unity in Diversity Tricolour Rangoli Art',
        src: '/assets/gallery/independence/independence_unity_rangoli.jpg'
    },
    {
        id: 31,
        category: 'independence',
        title: 'Independence Day School Assembly Address',
        src: '/assets/gallery/independence/independence_assembly_address.jpg'
    },
    {
        id: 32,
        category: 'independence',
        title: 'Happy Independence Day Rangoli Creation',
        src: '/assets/gallery/independence/independence_tricolour_rangoli.jpg'
    },

    // --- SAMARPAN & JANMASHTAMI ---
    {
        id: 33,
        category: 'samarpan',
        title: 'Samarpan - Classroom Community Sharing Meal',
        src: '/assets/gallery/celebrations/samarpan_community_meal_1.jpg'
    },
    {
        id: 34,
        category: 'samarpan',
        title: 'Samarpan - Students Dining Together in Joy',
        src: '/assets/gallery/celebrations/samarpan_classroom_feast.jpg'
    },
    {
        id: 35,
        category: 'samarpan',
        title: 'Samarpan - Community Feast Along Corridors',
        src: '/assets/gallery/celebrations/samarpan_student_sharing.jpg'
    },
    {
        id: 36,
        category: 'samarpan',
        title: 'Janmashtami - Govardhan Leela Cave Diorama',
        src: '/assets/gallery/celebrations/janmashtami_govardhan_diorama.jpg'
    },
    {
        id: 37,
        category: 'samarpan',
        title: 'Janmashtami - Handcrafted Krishna Makhan Pots',
        src: '/assets/gallery/celebrations/janmashtami_krishna_matki_decor.jpg'
    },

    // --- ANNUAL RESULT DAY ---
    {
        id: 38,
        category: 'results',
        title: 'Annual Result Day Merit Trophies Table',
        src: '/assets/gallery/results/annual_result_trophies.jpg'
    },
    {
        id: 39,
        category: 'results',
        title: '1st Rank Topper on Victory Podium',
        src: '/assets/gallery/results/annual_result_podium_topper.jpg'
    },
    {
        id: 40,
        category: 'results',
        title: 'Academic Distinction Group Felicitation',
        src: '/assets/gallery/results/annual_result_merit_group.jpg'
    },
    {
        id: 41,
        category: 'results',
        title: 'Top 3 Position Holders on Podium with Faculty',
        src: '/assets/gallery/results/annual_result_top_rankers.jpg'
    },
    {
        id: 42,
        category: 'results',
        title: 'Prize & Merit Certificate Distribution Ceremony',
        src: '/assets/gallery/results/annual_result_award_ceremony.jpg'
    },

    // --- STUDENT COUNCIL ELECTIONS ---
    {
        id: 43,
        category: 'council',
        title: 'Elected Student Council & House Prefects',
        src: '/assets/gallery/council/student_council_assembly.jpg'
    },
    {
        id: 44,
        category: 'council',
        title: 'Blue House Prefects with Faculty Mentors',
        src: '/assets/gallery/council/council_blue_house.jpg'
    },
    {
        id: 45,
        category: 'council',
        title: 'Yellow House Prefects with Faculty Mentors',
        src: '/assets/gallery/council/council_yellow_house.jpg'
    },
    {
        id: 46,
        category: 'council',
        title: 'Green House Prefects with Faculty Mentors',
        src: '/assets/gallery/council/council_green_house.jpg'
    },
    {
        id: 47,
        category: 'council',
        title: 'White House Prefects with Faculty Mentors',
        src: '/assets/gallery/council/council_white_house.jpg'
    },

    // --- COOKING WITHOUT FIRE ACTIVITY ---
    {
        id: 48,
        category: 'cooking',
        title: 'Little Chefs - Cooking Without Fire Team',
        src: '/assets/gallery/cooking/cooking_without_fire_team.jpg'
    },
    {
        id: 49,
        category: 'cooking',
        title: 'Dahi Golgappe & Refreshing Drinks Platter',
        src: '/assets/gallery/cooking/cooking_golgappa_platter.jpg'
    },
    {
        id: 50,
        category: 'cooking',
        title: 'Club Sandwiches & Red Mocktails',
        src: '/assets/gallery/cooking/cooking_sandwiches_mocktails.jpg'
    },
    {
        id: 51,
        category: 'cooking',
        title: 'Culinary Platter with Special Chutneys',
        src: '/assets/gallery/cooking/cooking_delicious_platters.jpg'
    },
    {
        id: 52,
        category: 'cooking',
        title: 'Class Vth Activity Menu Blackboard',
        src: '/assets/gallery/cooking/cooking_activity_board.jpg'
    },

    // --- PARENTS ORIENTATION ---
    {
        id: 53,
        category: 'orientation',
        title: 'Parents Orientation Session in Hall',
        src: '/assets/gallery/orientation/orientation_hall_session.jpg'
    },
    {
        id: 54,
        category: 'orientation',
        title: 'Principal & Faculty Welcome Presentation',
        src: '/assets/gallery/orientation/orientation_faculty_desk.jpg'
    },
    {
        id: 55,
        category: 'orientation',
        title: 'Parents & Educators Interaction',
        src: '/assets/gallery/orientation/orientation_parent_gathering.jpg'
    },
    {
        id: 56,
        category: 'orientation',
        title: 'Orientation Registration & Welcome Desk',
        src: '/assets/gallery/orientation/orientation_welcome_session.jpg'
    },
    {
        id: 57,
        category: 'orientation',
        title: 'Interactive Academic Orientation Q&A',
        src: '/assets/gallery/orientation/orientation_presentation_screen.jpg'
    },

    // --- HEALTH AWARENESS ---
    {
        id: 58,
        category: 'health',
        title: 'Student Health & Hygiene Kit Drive',
        src: '/assets/gallery/health/hygiene_awareness_kits.jpg'
    },
    {
        id: 59,
        category: 'health',
        title: 'Junior Hygiene Education Workshop',
        src: '/assets/gallery/health/junior_hygiene_session.jpg'
    },
    {
        id: 60,
        category: 'health',
        title: 'Student Wellness & Cleanliness Pledge',
        src: '/assets/gallery/health/wellness_pledge_activity.jpg'
    },
    {
        id: 61,
        category: 'health',
        title: 'Health Awareness Gathering',
        src: '/assets/gallery/health/health_awareness_group.jpg'
    },
    {
        id: 62,
        category: 'health',
        title: 'POCSO & Child Safety Program',
        src: '/assets/gallery/health/pocso_safety_awareness.jpg'
    },

    // --- SPORTS & ATHLETICS (INTER-HOUSE COMPETITION) ---
    {
        id: 63,
        category: 'sports',
        title: 'Inter-House Badminton Tournament in Courtyard',
        src: '/assets/gallery/sports/sports_interhouse_badminton.jpg'
    },
    {
        id: 64,
        category: 'sports',
        title: 'Carrom Championship - Boys Division',
        src: '/assets/gallery/sports/sports_carrom_boys.jpg'
    },
    {
        id: 65,
        category: 'sports',
        title: 'Carrom Championship - Girls Division',
        src: '/assets/gallery/sports/sports_carrom_girls.jpg'
    },
    {
        id: 66,
        category: 'sports',
        title: 'Inter-House Chess Strategic Championship',
        src: '/assets/gallery/sports/sports_chess_championship.jpg'
    },
    {
        id: 67,
        category: 'sports',
        title: 'Inter-House Sports & Quiz Delegation Gathering',
        src: '/assets/gallery/sports/sports_interhouse_team_assembly.jpg'
    }
];
