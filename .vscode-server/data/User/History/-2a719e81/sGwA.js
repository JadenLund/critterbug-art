import Particles from "react-particles";
// import type { Engine } from "tsparticles-engine";
// import { loadFireflyPreset } from "tsparticles-preset-firefly";

class ParticleJS {
    // this customizes the component tsParticles installation

    render() {
        const options = {
            preset: "firefly",
        };

        return <Particles options={options} init={this.customInit} />;
    }
}
export default ParticleJS;
