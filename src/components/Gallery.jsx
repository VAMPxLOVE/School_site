import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { galleryCategories, galleryImages } from '../data/galleryData';

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    // Calculate count per category
    const categoryCounts = useMemo(() => {
        const counts = { all: galleryImages.length };
        galleryImages.forEach(img => {
            counts[img.category] = (counts[img.category] || 0) + 1;
        });
        return counts;
    }, []);

    // Filter and search images
    const filteredImages = useMemo(() => {
        return galleryImages.filter(img => {
            const matchesCategory = activeFilter === 'all' || img.category === activeFilter;
            const query = searchQuery.trim().toLowerCase();
            if (!query) return matchesCategory;

            const matchesSearch =
                img.title?.toLowerCase().includes(query) ||
                img.caption?.toLowerCase().includes(query) ||
                img.category?.toLowerCase().includes(query) ||
                (img.tags && img.tags.some(tag => tag.toLowerCase().includes(query)));

            return matchesCategory && matchesSearch;
        });
    }, [activeFilter, searchQuery]);

    // Handle Lightbox Navigation
    const openLightbox = (index) => {
        setSelectedImageIndex(index);
    };

    const closeLightbox = () => {
        setSelectedImageIndex(null);
    };

    const nextImage = useCallback(() => {
        if (selectedImageIndex === null || filteredImages.length === 0) return;
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
    }, [selectedImageIndex, filteredImages.length]);

    const prevImage = useCallback(() => {
        if (selectedImageIndex === null || filteredImages.length === 0) return;
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + filteredImages.length) % filteredImages.length);
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
        <div className="container page-content" style={{ paddingBottom: '5rem' }}>
            {/* Header */}
            <div className="gallery-header">
                <span className="gallery-kicker">Visual Showcase</span>
                <h1 className="text-3d-shadow">School Campus & Event Gallery</h1>
                <p className="gallery-intro">
                    Explore life at D.R.P. Convent Public School — from academic achievements and smart laboratories to vibrant cultural fests and sporting milestones.
                </p>
            </div>

            {/* Controls Bar: Search & Category Filters */}
            <div className="gallery-controls-bar">
                {/* Search Bar */}
                <div className="gallery-search-wrap">
                    <span className="gallery-search-icon" aria-hidden="true">🔍</span>
                    <input
                        type="text"
                        className="gallery-search-input"
                        placeholder="Search photos by title, activity, event..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        aria-label="Search gallery images"
                    />
                    {searchQuery && (
                        <button
                            type="button"
                            className="gallery-search-clear"
                            onClick={() => setSearchQuery('')}
                            title="Clear search"
                            aria-label="Clear search"
                        >
                            &times;
                        </button>
                    )}
                </div>

                {/* Category Filters */}
                <div className="gallery-filters" role="tablist" aria-label="Photo categories">
                    {galleryCategories.map((cat) => {
                        const count = categoryCounts[cat.id] || 0;
                        const isActive = activeFilter === cat.id;
                        return (
                            <button
                                key={cat.id}
                                role="tab"
                                aria-selected={isActive}
                                onClick={() => setActiveFilter(cat.id)}
                                className={`gallery-filter-btn ${isActive ? 'is-active' : ''}`}
                            >
                                <span aria-hidden="true">{cat.icon}</span>
                                <span>{cat.label}</span>
                                <span className="gallery-filter-count">{count}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Gallery Grid */}
            {filteredImages.length > 0 ? (
                <div className="gallery-grid">
                    {filteredImages.map((img, index) => (
                        <div
                            key={img.id || index}
                            className="gallery-card"
                            tabIndex="0"
                            role="button"
                            aria-label={`View ${img.title || 'photo'}`}
                            onClick={() => openLightbox(index)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    openLightbox(index);
                                }
                            }}
                        >
                            <div className="gallery-card-img-wrapper">
                                <span className="gallery-card-badge">
                                    {img.category}
                                </span>
                                <img
                                    src={img.src}
                                    alt={img.title || img.caption || 'School gallery photo'}
                                    loading="lazy"
                                    onError={(e) => {
                                        // Fallback if local file not found
                                        e.target.onerror = null;
                                        e.target.src = 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80';
                                    }}
                                />
                                <div className="gallery-card-overlay">
                                    <h3 className="gallery-card-title">{img.title}</h3>
                                    <p className="gallery-card-caption">{img.caption}</p>
                                    <div className="gallery-card-footer">
                                        <span>{img.date || 'Campus Life'}</span>
                                        <span>Click to view ↗</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                /* Empty state */
                <div className="gallery-empty">
                    <div className="gallery-empty-icon">🖼️</div>
                    <h3 className="gallery-empty-title">No photos found</h3>
                    <p className="gallery-empty-desc">
                        {searchQuery
                            ? `No gallery images matched "${searchQuery}". Try different keywords or reset your search.`
                            : 'No photos currently available in this category.'}
                    </p>
                    <button
                        className="btn btn-primary"
                        style={{ borderRadius: '999px', padding: '0.6rem 1.5rem' }}
                        onClick={() => {
                            setActiveFilter('all');
                            setSearchQuery('');
                        }}
                    >
                        View All Photos
                    </button>
                </div>
            )}

            {/* Lightbox Modal */}
            {selectedImageIndex !== null && currentImage && (
                <div
                    className="lightbox-overlay"
                    onClick={closeLightbox}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image preview"
                >
                    <div
                        className="lightbox-container"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            type="button"
                            className="lightbox-btn-close"
                            onClick={closeLightbox}
                            aria-label="Close modal"
                            title="Close (Esc)"
                        >
                            &times;
                        </button>

                        {/* Image Wrap & Prev/Next Arrows */}
                        <div className="lightbox-image-wrap">
                            {filteredImages.length > 1 && (
                                <button
                                    type="button"
                                    className="lightbox-arrow lightbox-prev"
                                    onClick={prevImage}
                                    aria-label="Previous photo"
                                    title="Previous photo (Left Arrow)"
                                >
                                    &#8249;
                                </button>
                            )}

                            <img
                                src={currentImage.src}
                                alt={currentImage.title || currentImage.caption}
                            />

                            {filteredImages.length > 1 && (
                                <button
                                    type="button"
                                    className="lightbox-arrow lightbox-next"
                                    onClick={nextImage}
                                    aria-label="Next photo"
                                    title="Next photo (Right Arrow)"
                                >
                                    &#8250;
                                </button>
                            )}
                        </div>

                        {/* Lightbox Details Meta */}
                        <div className="lightbox-details">
                            <span className="lightbox-tag">
                                {currentImage.category} • {currentImage.date || 'D.R.P. Convent'}
                            </span>
                            <h2 className="lightbox-title">{currentImage.title}</h2>
                            <p className="lightbox-caption">{currentImage.caption}</p>

                            <div className="lightbox-counter-bar">
                                <span>
                                    Photo {selectedImageIndex + 1} of {filteredImages.length}
                                </span>
                                <span className="lightbox-kbd-hint">
                                    Use ← → arrow keys or Esc to close
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
