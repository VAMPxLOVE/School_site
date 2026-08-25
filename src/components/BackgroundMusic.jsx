import React, { useState, useEffect, useRef } from 'react';

const BackgroundMusic = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const playerRef = useRef(null);
    const timerRef = useRef(null);

    const START_TIME = 4; // 0:04 sec
    const END_TIME = 19;  // 0:19 sec
    const VIDEO_ID = 'xVcoYF--0mM';

    useEffect(() => {
        // Load YouTube IFrame API script dynamically if not already loaded
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }

        const initPlayer = () => {
            if (window.YT && window.YT.Player) {
                playerRef.current = new window.YT.Player('bg-music-yt-iframe', {
                    height: '1',
                    width: '1',
                    videoId: VIDEO_ID,
                    playerVars: {
                        autoplay: 1,
                        controls: 0,
                        disablekb: 1,
                        fs: 0,
                        rel: 0,
                        modestbranding: 1,
                        playsinline: 1,
                        start: START_TIME,
                        end: END_TIME,
                        loop: 1,
                        playlist: VIDEO_ID
                    },
                    events: {
                        onReady: (event) => {
                            event.target.seekTo(START_TIME);
                            event.target.setVolume(75);
                            // Try autoplay
                            const playPromise = event.target.playVideo();
                            setIsPlaying(true);
                            setIsMuted(event.target.isMuted());
                        },
                        onStateChange: (event) => {
                            // YT.PlayerState.ENDED = 0, PLAYING = 1, PAUSED = 2
                            if (event.data === 0) {
                                event.target.seekTo(START_TIME);
                                event.target.playVideo();
                            } else if (event.data === 1) {
                                setIsPlaying(true);
                            } else if (event.data === 2) {
                                setIsPlaying(false);
                            }
                        }
                    }
                });
            }
        };

        if (window.YT && window.YT.Player) {
            initPlayer();
        } else {
            window.onYouTubeIframeAPIReady = initPlayer;
        }

        // Loop check timer to strictly loop between START_TIME (3s) and END_TIME (19s)
        timerRef.current = setInterval(() => {
            if (playerRef.current && typeof playerRef.current.getCurrentTime === 'function') {
                const currentTime = playerRef.current.getCurrentTime();
                if (currentTime >= END_TIME || currentTime < START_TIME - 0.5) {
                    playerRef.current.seekTo(START_TIME);
                    playerRef.current.playVideo();
                }
            }
        }, 400);

        // First user interaction unlock handler for browser autoplay policies
        const handleFirstInteraction = () => {
            if (!hasInteracted) {
                setHasInteracted(true);
                if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
                    playerRef.current.unMute();
                    playerRef.current.seekTo(START_TIME);
                    playerRef.current.playVideo();
                    setIsPlaying(true);
                    setIsMuted(false);
                }
            }
        };

        window.addEventListener('click', handleFirstInteraction, { once: true });
        window.addEventListener('touchstart', handleFirstInteraction, { once: true });

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
            window.removeEventListener('click', handleFirstInteraction);
            window.removeEventListener('touchstart', handleFirstInteraction);
            if (playerRef.current && typeof playerRef.current.destroy === 'function') {
                playerRef.current.destroy();
            }
        };
    }, [hasInteracted]);

    const toggleMute = () => {
        if (!playerRef.current || typeof playerRef.current.isMuted !== 'function') return;

        if (isMuted) {
            playerRef.current.unMute();
            playerRef.current.playVideo();
            setIsMuted(false);
            setIsPlaying(true);
        } else {
            playerRef.current.mute();
            setIsMuted(true);
        }
    };

    const togglePlay = () => {
        if (!playerRef.current || typeof playerRef.current.getPlayerState !== 'function') return;

        const state = playerRef.current.getPlayerState();
        if (state === 1) { // playing -> pause
            playerRef.current.pauseVideo();
            setIsPlaying(false);
        } else { // paused/stopped -> play
            playerRef.current.seekTo(START_TIME);
            playerRef.current.playVideo();
            setIsPlaying(true);
            setIsMuted(playerRef.current.isMuted());
        }
    };

    return (
        <>
            {/* Hidden YouTube Iframe Player Container */}
            <div
                style={{
                    position: 'fixed',
                    top: '-9999px',
                    left: '-9999px',
                    width: '1px',
                    height: '1px',
                    opacity: 0,
                    pointerEvents: 'none',
                    zIndex: -1
                }}
            >
                <div id="bg-music-yt-iframe"></div>
            </div>

            {/* Floating Ambient Music Controller Pill */}
            <div className="bg-music-floating-widget" title={isMuted ? "Unmute Background Music" : "Mute Background Music"}>
                <div className="bg-music-inner">
                    {/* Animated Equalizer Sound Waves */}
                    <div className={`music-equalizer ${isPlaying && !isMuted ? 'active' : 'paused'}`}>
                        <span className="eq-bar eq-1"></span>
                        <span className="eq-bar eq-2"></span>
                        <span className="eq-bar eq-3"></span>
                        <span className="eq-bar eq-4"></span>
                    </div>

                    <div className="music-label-wrap" onClick={togglePlay} role="button" tabIndex={0} title="Toggle Play/Pause">
                        <span className="music-tag-kicker">CAMPUS ANTHEM</span>
                        <span className="music-title-text">{isPlaying && !isMuted ? 'Background Music' : (isMuted ? 'Muted' : 'Paused')}</span>
                    </div>

                    {/* Mute / Unmute Button */}
                    <button
                        onClick={toggleMute}
                        className={`music-mute-btn ${isMuted ? 'muted' : 'unmuted'}`}
                        aria-label={isMuted ? "Unmute Ambient Music" : "Mute Ambient Music"}
                    >
                        {isMuted ? (
                            <i className="fa-solid fa-volume-xmark"></i>
                        ) : (
                            <i className="fa-solid fa-volume-high"></i>
                        )}
                        <span className="mute-btn-text">{isMuted ? 'Unmute' : 'Mute'}</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default BackgroundMusic;
