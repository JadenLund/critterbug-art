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

            {new Array(100).fill(4).map((x, index) => { return <div key={`circle-${index}`} className='circle'> </div> })}
        </div>
    )
}
