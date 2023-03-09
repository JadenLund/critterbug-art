import './index.scss';
export default function ParticleEffect() {
    function* generateRange(end, start = 0, step = 1) {
        let x = start - step;
        while (x < end - step) yield x += step;
    }

    const genCircles = generateRange(100);

    console.log(genCircles)

    return (
        <div className='circle-container'>

            {[...genCircles()].map(x => { return <div className='circle'> </div> })}

        </div>
    )
}
