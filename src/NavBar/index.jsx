import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close menu when clicking outside
  const closeMenu = (e) => {
    if (e.target.id === "menu-overlay") {
      setIsOpen(false);
    }
  };

  return (
    <nav className="flex justify-between items-center w-full px-6 md:px-12 py-4 bg-white shadow-md relative">
      {/* Logo */}
      <h1 className="text-2xl font-bold">
        <Link to="/" className="font-[Poppins]">LostSlip</Link>
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 font-[Poppins]">
        <Link className="hover:underline underline-offset-4" to="/">Home</Link>
        <Link className="hover:underline underline-offset-4" to="/about-us">About Us</Link>
        <Link className="hover:underline underline-offset-4" to="/classes">Classes</Link>
        <Link className="hover:underline underline-offset-4" to="/menu">Menu</Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden z-50">
        {isOpen ? (
          <FiX className="text-3xl cursor-pointer" onClick={() => setIsOpen(false)} />
        ) : (
          <FiMenu className="text-3xl cursor-pointer" onClick={() => setIsOpen(true)} />
        )}
      </div>

      {/* Mobile Menu (Dropdown on Top-Right with Blurred Background) */}
      {isOpen && (
        <div
          id="menu-overlay"
          className="fixed inset-0 bg-opacity-40 backdrop-blur-md flex justify-end items-start pt-16 z-40"
          onClick={closeMenu} // Detect click outside
        >
          <div 
            className="bg-white w-60 p-6 rounded-lg shadow-lg absolute top-16 right-6"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside menu
          >
            {/* Close Icon */}
            <button
              className="absolute top-3 right-3 text-2xl"
              onClick={() => setIsOpen(false)}
            >
              <FiX />
            </button>

            {/* Menu Items */}
            <ul className="flex flex-col items-start gap-4 text-lg font-[Poppins]">
              <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link to="/about-us" onClick={() => setIsOpen(false)}>About Us</Link></li>
              <li><Link to="/classes" onClick={() => setIsOpen(false)}>Classes</Link></li>
              <li><Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link></li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
