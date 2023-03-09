import Sidebar from '../Sidebar';
import './index.scss';
const Layout = () => {
    return (<div className='App'>
        <Sidebar />
        <div className='page'>
            <span className='tags top-tags'></span>
        </div>
    </div>)
}

export default Layout;
