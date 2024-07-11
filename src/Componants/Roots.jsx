
import { Outlet } from 'react-router-dom';
import Navber from './Navber';
import Footer from './Footer';


const Roots = () => {
    return (
        <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500'>
            <div className='h-[65px]'>
            <Navber ></Navber>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;