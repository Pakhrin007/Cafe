import { Link } from 'react-router-dom' 
const NavBar = () => {
    return (
        <div className='flex justify-between items-center  '>
            <h1 className='text-[20px] font-bold '>
                <Link to="/">
                    <h1>Cafe</h1>
                </Link>
            </h1>
            <div className='flex gap-4'>
                <Link to="/">Home</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/classes">Classes</Link>
                <Link to="/menu">Menu</Link>
            </div>
        </div>
    )
}   

export default NavBar;
