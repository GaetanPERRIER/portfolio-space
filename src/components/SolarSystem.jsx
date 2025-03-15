import React from 'react';

const SolarSystem = () => {
    const planets = [
        { id: 1, size: '35px', color: '#3498db', orbitSize: '200px', orbitDuration: '20s' },
        { id: 2, size: '40px', color: '#e74c3c', orbitSize: '350px', orbitDuration: '25s' },
        { id: 3, size: '50px', color: '#2ecc71', orbitSize: '500px', orbitDuration: '30s' },
        { id: 4, size: '55px', color: '#f1c40f', orbitSize: '650px', orbitDuration: '35s' },
    ];

    // Pause planet orbit animation
    function PauseAnimation(e) {
        e.target.style.animationPlayState = "paused";
    }

    // Play planet orbit animation
    function PlayAnimation(e) {
        e.target.style.animationPlayState = "running";
    }

    // Add hover effect
    function addHoverEffect(e, planetColor) {
        e.target.style.boxShadow = `inset 0 -5px 6px ${planetColor}, 0 0 10px 2px rgba(255, 255, 255, 0.5)`;
    }

    // Remove hover effect
    function removeHoverEffect(e, planetColor) {
        e.target.style.boxShadow = `inset 0 -5px 6px ${planetColor}`;
    }

    return (
        <div className="solar-system">
            <div className='sun'></div>
            {planets.map((planet) => {
                const orbitRadius = parseInt(planet.orbitSize) / 2; // Rayon de l'orbite

                return (
                    <div
                        key={planet.id}
                        className='orbit-lines'
                        style={{ width: planet.orbitSize, height: planet.orbitSize }}
                    >
                        <div
                            className='planet'
                            style={{
                                width: planet.size,
                                height: planet.size,
                                animation: `orbit ${planet.orbitDuration} linear infinite`,
                                top: `calc(50% - ${parseInt(planet.size) / 2}px)`,
                                left: `calc(50% - ${parseInt(planet.size) / 2}px)`,
                                '--orbit-radius': `${orbitRadius}px`,
                                '--planet-size': planet.size, // Taille de la planète
                                boxShadow: `inset 0 -5px 6px ${planet.color}`,
                            }}
                            onMouseEnter={(e) => {
                                addHoverEffect(e, planet.color);
                                PauseAnimation(e);
                            }}
                            onMouseLeave={(e) => {
                                removeHoverEffect(e, planet.color);
                                PlayAnimation(e);
                            }}
                        ></div>
                    </div>
                );
            })}
        </div>
    );
};

export default SolarSystem;