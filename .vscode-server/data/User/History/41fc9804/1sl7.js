import Particle from 'particle.js';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar'
import './index.scss'
import Particles from 'react-particles';

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar />
            <Particles
                options={{
                    background: {
                        color: 'white',
                    },
                    fpsLimit: 60,
                    interactivity: {
                        detect_on: 'canvas',
                        events: {
                            resize: true
                        },

                    },
                    particles: {
                        color: {
                            value: "9fafca"
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1080
                            },
                            limit: 0,
                            value: 400,
                        },
                        opacity: {
                            animation: {
                                enable: true,
                                minimumValue: 0.05,
                                speed: 1,
                                sync: false
                            },
                            random: {
                                enable: true,
                                minimumValue: 0.05,
                            },
                            value: 1
                        },
                        shape: {
                            type: 'circle',
                        },
                        size: {
                            random: {
                                enable: true,
                                minimumValue: 0.5
                            },
                            value: 1,
                        }
                    }
                }} />
            <div className='page'>
                <span className='tags top-tags'>&lt;body&gt;</span>

                <Outlet />

                <span className='tags bottom-tags'>
                    &lt;/body&gt;
                    <br />
                    <span className='bottom-tag-html'>&lt;/html&gt;</span>
                </span>
            </div>
        </div>
    )
}
export default Layout;
