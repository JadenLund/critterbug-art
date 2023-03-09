import { Sidebar } from '../Sidebar'
import './index.scss'

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar />
            <span className='tags top-tags'>&lt;body&gt;</span>
        </div>
    )
}
export default Layout;
