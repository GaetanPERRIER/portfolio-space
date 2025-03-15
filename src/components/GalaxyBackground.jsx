import React, { useEffect } from 'react';
import Particles from 'particles.js';

const StarBackground = () => {
    useEffect(() => {
        window.particlesJS.load('particles-js', '/particles.json', () => {
            console.log('Particles loaded!');
        });
    }, []);

    return <div id="particles-js" style={{ position: 'fixed', width: '100%', height: '100%', zIndex: -1 }} />;
};

export default StarBackground;