import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFireflyPreset } from "tsparticles-preset-firefly";

export class ParticlesContainer extends React.PureComponent<IProps> {
    // this customizes the component tsParticles installation
    async customInit(engine: Engine): Promise<void> {
        // this adds the preset to tsParticles, you can safely use the
        await loadFireflyPreset(engine);
    }

    render() {
        const options = {
            preset: "firefly",
        };

        return <Particles options={options} init={this.customInit} />;
    }
}
