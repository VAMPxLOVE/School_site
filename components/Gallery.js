export function Gallery() {
    const images = [
        { src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80', caption: 'Graduation Day' },
        { src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80', caption: 'Science Lab' },
        { src: 'https://images.unsplash.com/photo-1577896334614-2019376d108d?w=800&q=80', caption: 'Art Exhibition' },
        { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80', caption: 'Classroom Learning' },
        { src: 'https://images.unsplash.com/photo-1571260899304-42d93b279a0e?w=800&q=80', caption: 'Swimming Competition' },
        { src: 'https://images.unsplash.com/photo-1427504743050-dad446326749?w=800&q=80', caption: 'Library' },
        { src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80', caption: 'Annual Day Performance' },
        { src: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&q=80', caption: 'Football Match' }
    ];

    return `
    <div class="container page-content">
      <h1>Campus Gallery</h1>
      <p style="margin-bottom: 2rem;">A glimpse into the vibrant life at Excellence Academy.</p>
      
      <div class="gallery-grid">
        ${images.map(img => `
          <div class="gallery-item">
            <img src="${img.src}" alt="${img.caption}" loading="lazy">
            <div class="gallery-caption">${img.caption}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
