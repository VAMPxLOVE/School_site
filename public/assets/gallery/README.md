# School Gallery Asset Folder

You can drop your custom school photos directly into this folder or its subcategories:

## Recommended Folder Structure:
- `campus/` — Main school building, smart classrooms, library, playground, green campus.
- `sports/` — Sports day, football, cricket, basketball, yoga, athletics, medals.
- `events/` — Annual function, cultural festivals, prize distribution, talent show.
- `science/` — Science exhibition, computer lab, physics/chemistry/biology labs, robotics.
- `celebrations/` — Independence Day, Republic Day, Teachers' Day, Children's Day, festival celebrations.
- `academics/` — Daily classroom activities, interactive workshops, library reading, group studies.

---

## How to use an image in the gallery:
1. Copy your image into this folder (for example: `public/assets/gallery/sports/sports_day_2026.jpg`).
2. Open `src/data/galleryData.js`.
3. Add or update an entry:
   ```javascript
   {
       id: 101,
       category: 'sports',
       title: 'Annual Sports Day 2026',
       caption: 'Students competing in the 100m sprint finals.',
       src: '/assets/gallery/sports/sports_day_2026.jpg',
       date: '2026',
       tags: ['sports', 'athletics', 'race']
   }
   ```
4. Or you can also paste direct online image URLs (e.g. from Google Drive, Cloudinary, Imgur, or Unsplash) directly into `src`.
