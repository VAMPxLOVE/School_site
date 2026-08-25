import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { galleryCategories, galleryImages } from '../data/galleryData';
import { Link } from 'react-router-dom';

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [viewMode, setViewMode] = useState('albums'); // 'albums' | 'masonry' | 'grid'
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [isSlideshowPlaying, setIsSlideshowPlaying] = useState(false);

    // Calculate count per category
    const categoryCounts = useMemo(() => {
        const counts = { all: galleryImages.length };
        galleryImages.forEach(img => {
            counts[img.category] = (counts[img.category] || 0) + 1;
        });
        return counts;
    }, []);

    // Filter images by active category AND search query
    const filteredImages = useMemo(() => {
        return galleryImages.filter(img => {
            const matchesCategory = activeFilter === 'all' || img.category === activeFilter;
            const matchesQuery = searchQuery.trim() === '' ||
                img.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                img.category.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesQuery;
        });
    }, [activeFilter, searchQuery]);

    // Group images into Album Collections
    const albumCollections = useMemo(() => {
        const albums = [];
        galleryCategories.filter(c => c.id !== 'all').forEach(cat => {
            const catImages = galleryImages.filter(img => img.category === cat.id);
            if (catImages.length > 0) {
                albums.push({
                    id: cat.id,
                    title: cat.label,
                    icon: cat.icon,
                    coverImage: catImages[0].src,
                    count: catImages.length,
                    images: catImages,
                    sampleTitle: catImages[0].title
                });
            }
        });
        return albums;
    }, []);

    // Handle Lightbox
    const openLightbox = (index) => {
        setSelectedImageIndex(index);
        setIsSlideshowPlaying(false);
    };

    const closeLightbox = () => {
        setSelectedImageIndex(null);
        setIsSlideshowPlaying(false);
    };

    const nextImage = useCallback(() => {
        if (selectedImageIndex === null || filteredImages.length === 0) return;
        setSelectedImageIndex((prev) => (prev + 1) % filteredImages.length);
    }, [selectedImageIndex, filteredImages.length]);

    const prevImage = useCallback(() => {
        if (selectedImageIndex === null || filteredImages.length === 0) return;
        setSelectedImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
    }, [selectedImageIndex, filteredImages.length]);

    // Automatic Slideshow timer
    useEffect(() => {
        let timer;
        if (isSlideshowPlaying && selectedImageIndex !== null) {
            timer = setInterval(() => {
                nextImage();
            }, 3500);
        }
        return () => clearInterval(timer);
    }, [isSlideshowPlaying, selectedImageIndex, nextImage]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedImageIndex === null) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === ' ') {
                e.preventDefault();
                setIsSlideshowPlaying(prev => !prev);
            }
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

    const handleOpenAlbum = (albumId) => {
        setActiveFilter(albumId);
        setViewMode('grid');
        window.scrollTo({ top: 400, behavior: 'smooth' });
    };

    return (
        <div className="gallery-page-container">
            {/* --- GURUKUL GRAND HEADER BANNER --- */}
            <div className="gurukul-page-header">
                <div className="container">
                    <div className="gurukul-header-content">
                        <span className="gurukul-kicker">✦ LIFE & HAPPENINGS AT D.R.P. CONVENT ✦</span>
                        <h1 className="gurukul-page-title">Visual Chronicles & Campus Gallery</h1>
                        <div className="gurukul-gold-divider">
                            <span className="divider-line"></span>
                            <span className="divider-icon">🏛️</span>
                            <span className="divider-line"></span>
                        </div>
                        <p className="gurukul-header-desc">
                            An authentic visual tapestry of our academic distinction, cultural galas, science practicals, sports championships, and joyful student milestones.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container" style={{ padding: '2.5rem 1rem 5rem' }}>
                {/* --- CONTROLS & FILTER TOOLBAR --- */}
                <div className="gallery-toolbar-card">
                    {/* View Mode Switcher + Search Bar Row */}
                    <div className="gallery-toolbar-top">
                        {/* View Mode Tabs */}
                        <div className="view-mode-group">
                            <span className="view-mode-label">View Layout:</span>
                            <button
                                className={`view-mode-btn ${viewMode === 'albums' ? 'active' : ''}`}
                                onClick={() => setViewMode('albums')}
                                title="Event Albums View"
                            >
                                <i className="fa-solid fa-folder-open"></i> Event Albums
                            </button>
                            <button
                                className={`view-mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
                                onClick={() => setViewMode('grid')}
                                title="Uniform Grid View"
                            >
                                <i className="fa-solid fa-table-cells"></i> Photo Grid
                            </button>
                            <button
                                className={`view-mode-btn ${viewMode === 'masonry' ? 'active' : ''}`}
                                onClick={() => setViewMode('masonry')}
                                title="Dynamic Masonry Wall"
                            >
                                <i className="fa-solid fa-border-all"></i> Masonry Wall
                            </button>
                        </div>

                        {/* Search Input Box */}
                        <div className="gallery-search-box">
                            <i className="fa-solid fa-magnifying-glass search-icon"></i>
                            <input
                                type="text"
                                placeholder="Search by event, sport, lab, or celebration..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="gallery-search-input"
                            />
                            {searchQuery && (
                                <button className="search-clear-btn" onClick={() => setSearchQuery('')}>
                                    &times;
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Category Filter Scrollable Tabs */}
                    <div className="gurukul-tabs-wrapper">
                        <div className="gurukul-tabs-scroll">
                            {galleryCategories.map((cat) => {
                                const count = categoryCounts[cat.id] || 0;
                                const isActive = activeFilter === cat.id;
                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => {
                                            setActiveFilter(cat.id);
                                            if (cat.id !== 'all' && viewMode === 'albums') {
                                                setViewMode('grid');
                                            }
                                        }}
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
                </div>

                {/* --- GALLERY STATS BAR --- */}
                <div className="gallery-meta-bar">
                    <div className="meta-left">
                        Showing <strong>{filteredImages.length}</strong> photos
                        {activeFilter !== 'all' && (
                            <span> in <em>{galleryCategories.find(c => c.id === activeFilter)?.label}</em></span>
                        )}
                        {searchQuery && (
                            <span> matching <strong>"{searchQuery}"</strong></span>
                        )}
                    </div>
                    <div className="meta-right">
                        {activeFilter !== 'all' && (
                            <button onClick={() => setActiveFilter('all')} className="meta-reset-btn">
                                Show All Categories ({galleryImages.length})
                            </button>
                        )}
                    </div>
                </div>

                {/* ==================================================== */}
                {/* 1. ALBUMS / STORYBOOK VIEW (Grouped by Occasion)     */}
                {/* ==================================================== */}
                {viewMode === 'albums' && activeFilter === 'all' && searchQuery.trim() === '' && (
                    <div className="gurukul-albums-grid">
                        {albumCollections.map((album) => (
                            <div
                                key={album.id}
                                className="album-collection-card"
                                onClick={() => handleOpenAlbum(album.id)}
                            >
                                <div className="album-cover-frame">
                                    <img
                                        src={album.coverImage}
                                        alt={album.title}
                                        loading="lazy"
                                        className="album-cover-img"
                                    />
                                    <div className="album-badge-stack">
                                        <span className="album-count-badge">
                                            <i className="fa-solid fa-camera"></i> {album.count} Photos
                                        </span>
                                    </div>
                                    <div className="album-overlay-gradient"></div>
                                </div>
                                <div className="album-info-body">
                                    <div className="album-icon-badge">{album.icon}</div>
                                    <div className="album-text">
                                        <h3 className="album-title">{album.title}</h3>
                                        <p className="album-subtitle">{album.sampleTitle}</p>
                                    </div>
                                    <button className="album-open-btn">
                                        <span>View Album</span>
                                        <i className="fa-solid fa-arrow-right-long link-arrow"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* ==================================================== */}
                {/* 2. UNIFORM GRID / MASONRY PHOTO WALL VIEW            */}
                {/* ==================================================== */}
                {(viewMode !== 'albums' || activeFilter !== 'all' || searchQuery.trim() !== '') && (
                    <div className={`gurukul-gallery-grid ${viewMode === 'masonry' ? 'masonry-mode' : ''}`}>
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
                                                <span className="photo-zoom-btn">
                                                    <i className="fa-solid fa-magnifying-glass-plus"></i>
                                                </span>
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
                )}

                {/* Empty State */}
                {filteredImages.length === 0 && (
                    <div className="gallery-empty-state">
                        <span style={{ fontSize: '3.5rem' }}>📷</span>
                        <h3>No Photos Found</h3>
                        <p>No images match your search query "{searchQuery}". Try selecting another category or clear the search.</p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setActiveFilter('all');
                            }}
                            className="btn btn-primary"
                            style={{ marginTop: '1rem' }}
                        >
                            Reset Filter
                        </button>
                    </div>
                )}
            </div>

            {/* --- FULLSCREEN CINEMA LIGHTBOX --- */}
            {selectedImageIndex !== null && currentImage && (
                <div className="gurukul-lightbox" onClick={closeLightbox}>
                    <div className="lightbox-backdrop"></div>

                    {/* Top Control Bar */}
                    <div className="lightbox-top-bar" onClick={(e) => e.stopPropagation()}>
                        <div className="lightbox-info">
                            <span className="lightbox-counter">
                                {selectedImageIndex + 1} of {filteredImages.length}
                            </span>
                            <span className="lightbox-title-top">{currentImage.title}</span>
                        </div>
                        <div className="lightbox-controls-right">
                            {/* Play / Pause Slideshow Button */}
                            <button
                                className={`lightbox-action-btn ${isSlideshowPlaying ? 'active' : ''}`}
                                onClick={() => setIsSlideshowPlaying(prev => !prev)}
                                title={isSlideshowPlaying ? 'Pause Slideshow (Space)' : 'Play Slideshow (Space)'}
                            >
                                <i className={`fa-solid ${isSlideshowPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                                <span>{isSlideshowPlaying ? 'Pause' : 'Slideshow'}</span>
                            </button>
                            <button
                                className="lightbox-close-btn"
                                onClick={closeLightbox}
                                aria-label="Close"
                                title="Close (Esc)"
                            >
                                &times;
                            </button>
                        </div>
                    </div>

                    {/* Previous Button */}
                    <button
                        className="lightbox-nav-btn prev"
                        onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                        }}
                        aria-label="Previous Photo"
                    >
                        &#10094;
                    </button>

                    {/* Center Image Container */}
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
                        aria-label="Next Photo"
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
