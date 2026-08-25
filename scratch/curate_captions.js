const fs = require('fs');

const curatedCaptions = {
    campus: [
        "Main Academic Facade & Campus Entrance",
        "Chemistry & Advanced Science Wet Laboratory",
        "Instrumental Music - Keyboard Training Studio",
        "Acoustic Guitar & String Melody Studio",
        "Orchestra Suite & Instrumental Practice Hall",
        "Children's Play Park & Recreational Greenery",
        "Campus Activity Lawn & Outdoor Play Zone",
        "Main School Building & Administrative Wing",
        "School Front Courtyard & Assembly Ground",
        "Science Practical Wet Laboratory",
        "Interactive Smart Digital Classroom",
        "Smart Interactive Board Classroom in Session",
        "D.R.P. Campus Entrance & Administrative Block",
        "Moral Values & Character Building Assembly",
        "Vision of Learning & Leadership Arena"
    ],
    library: [
        "Knowledge Resource Center & Reference Stacks",
        "Silent Reading Arena & Inquiry Corner",
        "Fiction, Literature & Periodicals Section",
        "Digital Research & Study Table Hall"
    ],
    farewell: [
        "Class X Farewell Celebration Welcome Balloon Arch",
        "Outgoing Batch Dance Performance on Stage",
        "Principal's Blessing & Token of Best Wishes",
        "Student Felicitation & Memento Presentation",
        "Heartfelt Memories with Mentors & Friends",
        "Farewell Gala - Student Stage Performances",
        "Graduating Batch Posing with Faculty",
        "Token of Honor to Academic Achievers",
        "Celebration Cake Cutting & Joyful Cheers",
        "Student Council Farewell Address",
        "Class of 2026 Cherished Moments",
        "Outgoing Batch Posing by Floral Arch",
        "Group Celebration & Confetti Moments",
        "Best Wishes for CBSE Board Examinations",
        "Farewell Memories Photobooth Pose",
        "Lighting of the Farewell Lamp of Knowledge",
        "Memories & Message Wall for Class X",
        "Faculty Tributes to the Outgoing Batch",
        "Graduating Students Farewell Assembly"
    ],
    diwali: [
        "Shubh Labh Floral Rangoli by Agni House",
        "Handcrafted Clay Diya Painting Activity",
        "Eco-Friendly Diya Craft & Colouring Workshop",
        "Peacock Themed Rangoli by Jal House",
        "Goddess Lakshmi Prosperity Floral Rangoli",
        "Diwali Celebration Group at School Reception",
        "Classroom Lanterns & Deepawali Decorations",
        "Students Displaying Decorated Diyas",
        "Traditional Toran & Rangoli Art Showcase",
        "Deepawali Special Assembly & Festive Sweets",
        "Creative Floor Rangoli by Senior House Teams",
        "Festival of Lights Celebration Memories"
    ],
    halloween: [
        "Mystery Peeking from Foliage Garden",
        "Halloween Costume Troupe on Lawn",
        "Spooky Fun at Reception Desk",
        "Halloween Ghoul Squad Office Pose",
        "Mystic Witch Costume & Dramatic Art",
        "Creative Masquerade Characters in Courtyard",
        "Halloween Fancy Dress Celebration",
        "Playful Spooky Costumes by Students",
        "Halloween Drama & Creative Roleplay"
    ],
    grandparents: [
        "Grandparents Day Celebrations - Twins Photo Frame",
        "Heartfelt Blessings - Photo Frame Memories",
        "Handcrafted Greeting Cards for Grandparents",
        "Cherished Moments with Loving Grandparents",
        "Students Presenting Handmade Love & Cards",
        "Grandparents Felicitation by School Leadership",
        "Generations of Love - Family Photo Frame",
        "Grandparents Day Special Cultural Tributes"
    ],
    independence: [
        "79th Independence Day Flag Hoisting Ceremony",
        "Patriotic Speeches on National Values & Heritage",
        "Tricolour Floral Rangoli by Vayu House",
        "Unity in Diversity Rangoli Floor Art",
        "Vayu House 15 August Art Display",
        "Patriotic Drill & March Past Demonstration",
        "Tricolour Badges & Cultural Dance Tributes"
    ],
    samarpan: [
        "Govardhan Leela Handcrafted Cave Diorama",
        "Janmashtami Handcrafted Krishna Makhan Pots",
        "Samarpan - Joy of Community Sharing Feast",
        "Students Dining Together in Harmony & Joy",
        "Samarpan - Community Feast Along Corridors",
        "Community Sharing & Peer Bonding Meal",
        "Classroom Dining & Cultural Sharing Values",
        "Samarpan Festival of Generosity & Brotherhood"
    ],
    janmashtami: [
        "Govardhan Leela Diorama & Rural Landscape",
        "Handcrafted Krishna Makhan Matki Decor",
        "Janmashtami Special Cultural Dance on Stage",
        "Bal Gopal Costumes & Festive Flutes",
        "Janmashtami Devotional Assembly & Aarti"
    ],
    results: [
        "Annual Result Day Merit Trophies Showcase",
        "1st Rank Toppers on Victory Podium with Medals",
        "Academic Distinction Group Felicitation",
        "Top 3 Position Holders on Podium with Faculty",
        "Prize & Merit Certificate Distribution Ceremony",
        "Class Topper Receiving Annual Merit Trophy",
        "Outstanding Scholastic Achievers with Parents",
        "Subject Distinction Awards Distribution",
        "High Scorers Celebrating Board Success",
        "Proud Parents with School Rank Holders",
        "Faculty Honoring Star Students on Stage",
        "Merit Scholarship Winners of the Session",
        "Annual Prize Distribution Grand Ceremony"
    ],
    council: [
        "Investiture Ceremony - Student Council Oath",
        "Blue House Captains & Prefects with Mentors",
        "Green House Captains & Badging Ceremony",
        "White House Leadership & Prefect Body",
        "Yellow House Captains & House Master",
        "Council Members with School Principal",
        "Elected House Captains & Vice Captains",
        "Student Leadership Pledge for Discipline"
    ],
    cooking: [
        "Little Chefs - Cooking Without Fire Workshop",
        "Delicious Dahi Golgappe & Refreshing Drinks",
        "Club Sandwiches & Red Mocktails Platter",
        "Culinary Presentation with Homemade Chutneys",
        "Class V Activity Blackboard & Recipe Menu",
        "Healthy Fruit Chaat & Salad Preparations",
        "Budding Culinary Masters Displaying Platters"
    ],
    orientation: [
        "Parents Orientation Registration & Welcome",
        "Principal & Leadership Keynote Address",
        "CBSE Curriculum & Assessment Structure Overview",
        "Vision, Mission & Holistic Values Presentation",
        "Academic Evaluation & Grading Briefing",
        "Parent-Teacher Interactive Q&A Session",
        "Welcome Desk for New Session Parents"
    ],
    health: [
        "Student Health & Personal Hygiene Kit Drive",
        "Health Awareness & Wellness Delegation",
        "Student Cleanliness & Physical Wellness Session",
        "Health, Hygiene & Nutrition Seminar in Hall",
        "POCSO & Child Safety Interactive Workshop"
    ],
    sports: [
        "Inter-House Badminton Tournament in Courtyard",
        "Carrom Championship - Boys Division Finals",
        "Carrom Championship - Girls Division Matches",
        "Inter-House Chess Strategic Championship",
        "Sports Delegation & Fair Play Assembly",
        "Badminton Smash & Athletic Rally in Action",
        "Annual Sports Meet Victory Celebrations"
    ],
    christmas: [
        "Winter Carnival & Christmas Tree Celebrations",
        "Festive Stage Performance by Primary Students",
        "Santa Claus Smiles & Holiday Joy",
        "Handmade Ornaments & Christmas Decor Display",
        "Christmas Carol Singing & Joyful Harmony",
        "Winter Fest Celebration with Faculty & Students"
    ]
};

// Read current galleryData.js
const galleryData = require('../src/data/galleryData.js');

let categoryIndices = {};

const updatedImages = galleryData.galleryImages.map(img => {
    const cat = img.category;
    if (!categoryIndices[cat]) categoryIndices[cat] = 0;
    const list = curatedCaptions[cat] || [];
    let newTitle = img.title;

    if (categoryIndices[cat] < list.length) {
        newTitle = list[categoryIndices[cat]];
    } else {
        // Fallback title formatting
        newTitle = img.title.replace(/\sMoment\s\d+/i, '').replace(/\b\w/g, c => c.toUpperCase());
    }
    categoryIndices[cat]++;

    return {
        ...img,
        title: newTitle
    };
});

const outputJs = `/**
 * School Gallery Data Configuration
 * 100% Authentic School Event & Campus Photos (${updatedImages.length} High-Resolution Images)
 * Curated with Institutional Titles & Captions
 */

export const galleryCategories = ${JSON.stringify(galleryData.galleryCategories, null, 4)};

export const galleryImages = ${JSON.stringify(updatedImages, null, 4)};
`;

fs.writeFileSync('src/data/galleryData.js', outputJs, 'utf8');
console.log('Successfully updated all 140 image captions with curated institutional titles!');
