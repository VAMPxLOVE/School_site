import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { galleryCategories, galleryImages } from '../data/galleryData';
import { Link } from 'react-router-dom';

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

    // Keyboard navigation
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
        <div className="gallery-page-container">
            {/* --- GURUKUL STYLE GRAND HEADER BANNER --- */}
            <div className="gurukul-page-header">
                <div className="container">
                    <div className="gurukul-header-content">
                        <span className="gurukul-kicker">✦ LIFE AT D.R.P. CONVENT ✦</span>
                        <h1 className="gurukul-page-title">Visual Chronicles & Campus Gallery</h1>
                        <div className="gurukul-gold-divider">
                            <span className="divider-line"></span>
                            <span className="divider-icon">🏛️</span>
                            <span className="divider-line"></span>
                        </div>
                        <p className="gurukul-header-desc">
                            Explore our vibrant tapestry of academic distinction, cultural galas, sports tournaments, and joyful student milestones.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container" style={{ padding: '2.5rem 1rem 5rem' }}>
                {/* --- GURUKUL CATEGORY FILTER TABS --- */}
                <div className="gurukul-tabs-wrapper">
                    <div className="gurukul-tabs-scroll">
                        {galleryCategories.map((cat) => {
                            const count = categoryCounts[cat.id] || 0;
                            const isActive = activeFilter === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveFilter(cat.id)}
                                    className={`gurukul-tab-btn ${isActive ? 'active' : ''}`}
                                >
                                    <span className="tab-icon">{cat.icon}</span>
                                    <span className="tab-label">{cat.label}</span>
                                    <span className="tab-badge">{count}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* --- GALLERY STATS BAR --- */}
                <div className="gallery-meta-bar">
                    <div className="meta-left">
                        Showing <strong>{filteredImages.length}</strong> authentic photos
                        {activeFilter !== 'all' && (
                            <span> in <em>{galleryCategories.find(c => c.id === activeFilter)?.label}</em></span>
                        )}
                    </div>
                    {activeFilter !== 'all' && (
                        <button onClick={() => setActiveFilter('all')} className="meta-reset-btn">
                            View All ({galleryImages.length}) &times;
                        </button>
                    )}
                </div>

                {/* --- GURUKUL MASONRY / DYNAMIC GRID --- */}
                <div className="gurukul-gallery-grid">
                    {filteredImages.map((img, index) => {
                        const categoryObj = galleryCategories.find(c => c.id === img.category);
                        return (
                            <div
                                key={img.id || index}
                                className="gurukul-photo-card"
                                onClick={() => openLightbox(index)}
                            >
                                <div className="photo-card-inner">
                                    <img
                                        src={img.src}
                                        alt={img.title}
                                        loading="lazy"
                                        className="photo-card-img"
                                    />
                                    <div className="photo-card-overlay">
                                        <div className="photo-overlay-top">
                                            <span className="photo-category-chip">
                                                {categoryObj?.icon} {categoryObj?.label}
                                            </span>
                                            <span className="photo-zoom-btn">🔍</span>
                                        </div>
                                        <div className="photo-overlay-bottom">
                                            <h4 className="photo-title">{img.title}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {filteredImages.length === 0 && (
                    <div className="gallery-empty-state">
                        <span style={{ fontSize: '3rem' }}>📷</span>
                        <h3>No Photos Available</h3>
                        <p>Select another category above to view school memories.</p>
                    </div>
                )}
            </div>

            {/* --- GURUKUL FULLSCREEN LIGHTBOX MODAL --- */}
            {selectedImageIndex !== null && currentImage && (
                <div className="gurukul-lightbox" onClick={closeLightbox}>
                    <div className="lightbox-backdrop"></div>

                    {/* Top Control Bar */}
                    <div className="lightbox-top-bar" onClick={(e) => e.stopPropagation()}>
                        <div className="lightbox-info">
                            <span className="lightbox-counter">
                                {selectedImageIndex + 1} / {filteredImages.length}
                            </span>
                            <span className="lightbox-title-top">{currentImage.title}</span>
                        </div>
                        <button className="lightbox-close-btn" onClick={closeLightbox} aria-label="Close">
                            &times;
                        </button>
                    </div>

                    {/* Previous Button */}
                    <button
                        className="lightbox-nav-btn prev"
                        onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                        }}
                        aria-label="Previous"
                    >
                        &#10094;
                    </button>

                    {/* Main Image Container */}
                    <div className="lightbox-center-container" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={currentImage.src}
                            alt={currentImage.title}
                            className="lightbox-main-image"
                        />
                        <div className="lightbox-caption-card">
                            <h3 className="caption-title">{currentImage.title}</h3>
                            <span className="caption-tag">
                                {galleryCategories.find(c => c.id === currentImage.category)?.icon}{' '}
                                {galleryCategories.find(c => c.id === currentImage.category)?.label}
                            </span>
                        </div>
                    </div>

                    {/* Next Button */}
                    <button
                        className="lightbox-nav-btn next"
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                        }}
                        aria-label="Next"
                    >
                        &#10095;
                    </button>

                    {/* Bottom Filmstrip Thumbnails */}
                    <div className="lightbox-filmstrip" onClick={(e) => e.stopPropagation()}>
                        {filteredImages.map((thumb, tIdx) => (
                            <div
                                key={thumb.id || tIdx}
                                className={`filmstrip-item ${tIdx === selectedImageIndex ? 'active' : ''}`}
                                onClick={() => setSelectedImageIndex(tIdx)}
                            >
                                <img src={thumb.src} alt={thumb.title} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
