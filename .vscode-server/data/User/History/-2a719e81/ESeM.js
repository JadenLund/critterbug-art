import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticleJS() {

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);


    return (
        <Particles id="tsparticles" url="http://foo.bar/particles.json" init={particlesInit} loaded={particlesLoaded} />
    );
}
export default ParticleJS;
