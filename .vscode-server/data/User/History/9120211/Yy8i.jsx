import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticleJS() {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);


    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "##6159B7",
                    },
                },
                fpsLimit: 120,


                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "shape": {
                        "type": "circle",

                        "polygon": {
                            "nb_sides": 5
                        },

                    },
                    "opacity": {
                        "value": 0.5,
                        "random": true,

                    },
                    "size": {
                        "value": 5,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 5,
                            "size_min": 0,
                            "sync": false
                        }
                    },

                    "move": {
                        "enable": true,
                        "speed": 1.0,
                        "direction": "top",
                        "out_mode": "out",
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {

                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            }}
        />
    );
}
export default ParticleJS;
