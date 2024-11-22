import {Link} from 'react-router-dom';
const Navbar = () => {
    return ( 
        <div className='navbar'>
            <Link to = "/" className="font">HOME</Link>
            <Link to = "/about" className="font">ABOUT</Link>
        </div>
     );
}
 
export default Navbar;