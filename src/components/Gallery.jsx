import React, { useState } from 'react';

const Gallery = () => {
    const [filter, setFilter] = useState('all');
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { id: 1, category: 'campus', src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80', caption: 'Main School Building' },
        { id: 2, category: 'campus', src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1200&q=80', caption: 'Modern Science Laboratory' },
        { id: 3, category: 'events', src: 'https://images.unsplash.com/photo-1577896334614-2019376d108d?w=1200&q=80', caption: 'Art & Craft Exhibition' },
        { id: 4, category: 'campus', src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80', caption: 'Digital Classroom' },
        { id: 5, category: 'sports', src: 'https://images.unsplash.com/photo-1571260899304-42d93b279a0e?w=1200&q=80', caption: 'In-house Swimming Facility' },
        { id: 6, category: 'campus', src: 'https://images.unsplash.com/photo-1427504743050-dad446326749?w=1200&q=80', caption: 'Central Library' },
        { id: 7, category: 'events', src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&q=80', caption: 'Annual Cultural Fest' },
        { id: 8, category: 'sports', src: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=1200&q=80', caption: 'Inter-School Football Championship' },
        { id: 9, category: 'events', src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80', caption: 'Graduation Ceremony' },
        { id: 10, category: 'campus', src: 'https://images.unsplash.com/photo-1523580494863-6f343a223efc?w=1200&q=80', caption: 'Innovation Lab' }
    ];

    const filteredImages = filter === 'all'
        ? images
        : images.filter(img => img.category === filter);

    return (
        <div className="container page-content">
            <h1 className="text-3d-shadow" style={{ textAlign: 'center', marginBottom: '1rem' }}>Campus Gallery</h1>
            <p style={{ textAlign: 'center', color: '#666', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                A visual journey through our campus, events, and the vibrant life at D.R.P. CONVENT PUBLIC SCHOOL.
            </p>

            {/* Filter Tabs */}
            <div className="gallery-filters" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                {['all', 'campus', 'events', 'sports'].map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`btn btn-3d ${filter === cat ? 'btn-primary' : 'btn-glass'}`}
                        style={{
                            textTransform: 'capitalize',
                            background: filter === cat ? '#003366' : 'rgba(0, 51, 102, 0.1)',
                            color: filter === cat ? 'white' : '#003366',
                            border: 'none',
                            borderRadius: '25px',
                            minWidth: '100px'
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Gallery Grid */}
            <div className="gallery-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem',
                perspective: '1000px'
            }}>
                {filteredImages.map((img) => (
                    <div
                        key={img.id}
                        className="gallery-item card-3d"
                        style={{ cursor: 'pointer', height: '250px' }}
                        onClick={() => setSelectedImage(img)}
                    >
                        <div className="card-inner-3d" style={{ height: '100%', overflow: 'hidden' }}>
                            <img
                                src={img.src}
                                alt={img.caption}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                loading="lazy"
                            />
                            <div className="gallery-overlay">
                                <span>{img.caption}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="lightbox-overlay"
                    onClick={() => setSelectedImage(null)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0,0,0,0.9)',
                        zIndex: 2000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem'
                    }}
                >
                    <div
                        className="lightbox-content"
                        style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            style={{
                                position: 'absolute',
                                top: '-40px',
                                right: '-40px',
                                background: 'none',
                                border: 'none',
                                color: 'white',
                                fontSize: '2.5rem',
                                cursor: 'pointer'
                            }}
                            onClick={() => setSelectedImage(null)}
                        >
                            &times;
                        </button>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.caption}
                            style={{ maxWidth: '100%', maxHeight: '80vh', borderRadius: '8px', boxShadow: '0 0 50px rgba(0,0,0,0.5)' }}
                        />
                        <div style={{ color: 'white', textAlign: 'center', marginTop: '1.5rem', fontSize: '1.25rem' }}>
                            {selectedImage.caption}
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Gallery;
