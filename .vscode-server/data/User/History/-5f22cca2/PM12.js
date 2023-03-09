import './index.scss';
export default function ParticleEffect() {
    function* generateRange(end, start = 0, step = 1) {
        let x = start - step;
        while (x < end - step) yield x += step;
    }

    const genCircles = generateRange(100);
    let x = genCircles.next()

    while (!x.done) {
        console.log(x.value)
        x = genCircles.next();
    }
    console.log(genCircles)
    return (
        <div className='circle-container'>
            <div className='circle'>
                { }
            </div>
        </div>
    )
}
