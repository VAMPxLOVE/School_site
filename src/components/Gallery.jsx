import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { galleryCategories, galleryImages } from '../data/galleryData';

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    // Calculate count per category
    const categoryCounts = useMemo(() => {
        const counts = { all: galleryImages.length };
        galleryImages.forEach(img => {
            counts[img.category] = (counts[img.category] || 0) + 1;
        });
        return counts;
    }, []);

    // Filter images
    const filteredImages = useMemo(() => {
        if (activeFilter === 'all') return galleryImages;
        return galleryImages.filter(img => img.category === activeFilter);
    }, [activeFilter]);

    // Handle Lightbox
    const openLightbox = (index) => {
        setSelectedImageIndex(index);
    };

    const closeLightbox = () => {
        setSelectedImageIndex(null);
    };

    const nextImage = useCallback(() => {
        if (selectedImageIndex === null || filteredImages.length === 0) return;
        setSelectedImageIndex((prev) => (prev + 1) % filteredImages.length);
    }, [selectedImageIndex, filteredImages.length]);

    const prevImage = useCallback(() => {
        if (selectedImageIndex === null || filteredImages.length === 0) return;
        setSelectedImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
    }, [selectedImageIndex, filteredImages.length]);

    // Keyboard navigation (Esc, ArrowLeft, ArrowRight)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedImageIndex === null) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImageIndex, nextImage, prevImage]);

    // Disable background scrolling when lightbox is open
    useEffect(() => {
        if (selectedImageIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImageIndex]);

    const currentImage = selectedImageIndex !== null ? filteredImages[selectedImageIndex] : null;

    return (
        <div className="container page-content" style={{ paddingBottom: '4rem' }}>
            {/* Minimal Header */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h1 className="text-3d-shadow" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>School Gallery</h1>
                <p style={{ color: '#667085', fontSize: '1rem' }}>
                    Moments and memories at D.R.P. Convent Public School
                </p>
            </div>

            {/* Clean Category Filter Pills */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    flexWrap: 'wrap',
                    marginBottom: '2.5rem'
                }}
            >
                {galleryCategories.map((cat) => {
                    const count = categoryCounts[cat.id] || 0;
                    const isActive = activeFilter === cat.id;
                    return (
                        <button
                            key={cat.id}
                            onClick={() => setActiveFilter(cat.id)}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.45rem',
                                padding: '0.5rem 1.1rem',
                                borderRadius: '999px',
                                border: isActive ? '1px solid #003366' : '1px solid rgba(0, 51, 102, 0.12)',
                                background: isActive ? '#003366' : '#ffffff',
                                color: isActive ? '#ffffff' : '#003366',
                                fontWeight: '600',
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                boxShadow: isActive ? '0 4px 12px rgba(0, 51, 102, 0.2)' : '0 2px 5px rgba(0, 0, 0, 0.04)'
                            }}
                        >
                            <span>{cat.icon}</span>
                            <span>{cat.label}</span>
                            <span
                                style={{
                                    fontSize: '0.75rem',
                                    padding: '0.1rem 0.45rem',
                                    borderRadius: '999px',
                                    background: isActive ? 'rgba(255,255,255,0.2)' : 'rgba(0, 51, 102, 0.08)',
                                    color: isActive ? '#ffffff' : '#003366'
                                }}
                            >
                                {count}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Clean Image Grid */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '1.25rem'
                }}
            >
                {filteredImages.map((img, index) => (
                    <div
                        key={img.id || index}
                        onClick={() => openLightbox(index)}
                        style={{
                            position: 'relative',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            aspectRatio: '4 / 3',
                            background: '#e9ecef',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.06)',
                            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 51, 102, 0.15)';
                            const overlay = e.currentTarget.querySelector('.photo-title-overlay');
                            if (overlay) overlay.style.opacity = '1';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.06)';
                            const overlay = e.currentTarget.querySelector('.photo-title-overlay');
                            if (overlay) overlay.style.opacity = '0';
                        }}
                    >
                        <img
                            src={img.src}
                            alt={img.title || 'School Photo'}
                            loading="lazy"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                                transition: 'transform 0.5s ease'
                            }}
                        />
                        {/* Minimalist Hover Overlay - Shows only clean title */}
                        <div
                            className="photo-title-overlay"
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(0, 24, 48, 0.85) 0%, transparent 60%)',
                                opacity: 0,
                                transition: 'opacity 0.25s ease',
                                display: 'flex',
                                alignItems: 'flex-end',
                                padding: '1rem 1.2rem',
                                color: '#ffffff'
                            }}
                        >
                            <span style={{ fontSize: '0.95rem', fontWeight: '600', letterSpacing: '0.02em' }}>
                                {img.title}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Clean Lightbox Modal */}
            {selectedImageIndex !== null && currentImage && (
                <div
                    className="lightbox-overlay"
                    onClick={closeLightbox}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0, 0, 0, 0.92)',
                        backdropFilter: 'blur(8px)',
                        zIndex: 3000,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1.5rem'
                    }}
                >
                    <div
                        style={{
                            position: 'relative',
                            maxWidth: '92vw',
                            maxHeight: '92vh',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            type="button"
                            onClick={closeLightbox}
                            style={{
                                position: 'absolute',
                                top: '-3rem',
                                right: '0',
                                background: 'none',
                                border: 'none',
                                color: '#ffffff',
                                fontSize: '2rem',
                                cursor: 'pointer',
                                opacity: 0.85,
                                padding: '0.2rem 0.5rem'
                            }}
                            title="Close (Esc)"
                        >
                            &times;
                        </button>

                        {/* Image with Prev/Next buttons */}
                        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {filteredImages.length > 1 && (
                                <button
                                    type="button"
                                    onClick={prevImage}
                                    style={{
                                        position: 'absolute',
                                        left: '-3.5rem',
                                        background: 'rgba(255, 255, 255, 0.15)',
                                        border: '1px solid rgba(255, 255, 255, 0.25)',
                                        color: '#ffffff',
                                        width: '2.8rem',
                                        height: '2.8rem',
                                        borderRadius: '50%',
                                        fontSize: '1.4rem',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backdropFilter: 'blur(6px)'
                                    }}
                                    title="Previous (←)"
                                >
                                    &#8249;
                                </button>
                            )}

                            <img
                                src={currentImage.src}
                                alt={currentImage.title}
                                style={{
                                    maxWidth: '88vw',
                                    maxHeight: '78vh',
                                    borderRadius: '8px',
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                                    objectFit: 'contain'
                                }}
                            />

                            {filteredImages.length > 1 && (
                                <button
                                    type="button"
                                    onClick={nextImage}
                                    style={{
                                        position: 'absolute',
                                        right: '-3.5rem',
                                        background: 'rgba(255, 255, 255, 0.15)',
                                        border: '1px solid rgba(255, 255, 255, 0.25)',
                                        color: '#ffffff',
                                        width: '2.8rem',
                                        height: '2.8rem',
                                        borderRadius: '50%',
                                        fontSize: '1.4rem',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backdropFilter: 'blur(6px)'
                                    }}
                                    title="Next (→)"
                                >
                                    &#8250;
                                </button>
                            )}
                        </div>

                        {/* Minimal Title & Counter - No paragraphs */}
                        <div style={{ textAlign: 'center', marginTop: '1rem', color: '#ffffff' }}>
                            <div style={{ fontSize: '1.15rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                                {currentImage.title}
                            </div>
                            <div style={{ fontSize: '0.85rem', opacity: 0.6 }}>
                                {selectedImageIndex + 1} / {filteredImages.length}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
