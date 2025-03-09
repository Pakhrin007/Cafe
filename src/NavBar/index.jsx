import { Link } from 'react-router-dom' 
const NavBar = () => {
    return (
        <div className='flex justify-between items-center w-screen px-[50px] mt-[20px] py-[10px]'>
            <h1 className='text-[20px] font-bold '>
                <Link to="/">
                    <h1>LostSlip</h1>
                </Link>
            </h1>
            <div className='flex gap-[40px]'>
                <Link className='hover:underline underline-offset-4' to="/">Home</Link>
                <Link className='hover:underline underline-offset-4' to="/about-us">About Us</Link>
                <Link className='hover:underline underline-offset-4' to="/classes">Classes</Link>
                <Link className='hover:underline underline-offset-4' to="/menu">Menu</Link>
            </div>
        </div>
    )
}   

export default NavBar;
