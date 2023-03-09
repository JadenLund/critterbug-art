import Particles from "react-particles";

export default function Particle() {
    return (
        <Particles
            params={{
                "particles": {
                    "number": {
                        "value": 50
                    },
                    "size": {
                        "value": 3
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
            }} />
    )
}
