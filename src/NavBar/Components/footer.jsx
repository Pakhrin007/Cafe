const Footer = () => {
    return (
        <footer className="w-screen bg-gray-800 text-white py-8 sticky bottom-0">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">About Us</h3>
                        <p className="text-sm">
                            Welcome to our café! We offer the finest coffee and pastries in town. 
                            Come visit us for a cozy experience.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="text-sm">
                            <li className="mb-2"><a href="#" className="hover:text-gray-400">Home</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-gray-400">Menu</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-gray-400">About</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-gray-400">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <ul className="text-sm">
                            <li className="mb-2">123 Café Street, City</li>
                            <li className="mb-2">Phone: (123) 456-7890</li>
                            <li className="mb-2">Email: info@cafe.com</li>
                        </ul>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-8 border-t border-gray-700 pt-8">
                    <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-8 text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Café Name. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;