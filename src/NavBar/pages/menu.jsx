import { useState } from "react";
import { motion } from "framer-motion";

// Menu items data
const menuItems = [
    { 
        name: "Cappuccino", 
        cardImage: "https://source.unsplash.com/300x200/?cappuccino", 
        modalImage: "https://source.unsplash.com/500x400/?cappuccino" 
    },
    { 
        name: "Espresso", 
        cardImage: "https://source.unsplash.com/300x200/?espresso", 
        modalImage: "https://source.unsplash.com/500x400/?espresso" 
    },
    { 
        name: "Latte", 
        cardImage: "https://source.unsplash.com/300x200/?latte", 
        modalImage: "https://source.unsplash.com/500x400/?latte" 
    }
];


const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className='flex flex-col items-center h-screen'>
            <div className="flex flex-col items-center justify-center gap-4">
                {/* Header with divider lines */}
                <div className="flex items-center justify-center p-[30px] mb-10">
                    <div className="h-px bg-gray-300 w-52"></div>
                    <h1 className="text-4xl font-poppins text-gray-800 px-6 uppercase">Menu</h1>
                    <div className="h-px bg-gray-300 w-52 "></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[80%]">
                    {menuItems.map((item, index) => (
                        <div 
                            key={index} 
                            className="bg-white shadow-md rounded-lg p-4 cursor-pointer flex flex-col items-center"
                            onClick={() => {
                                setIsOpen(true);
                                setSelectedIndex(index);
                            }}
                        > 
                            <img src={item.cardImage} alt={item.name} className="w-full h-40 object-cover rounded-md" />
                            <div className="mt-2 font-poppins text-lg font-semibold">{item.name}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {isOpen && (
                <div 
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                    onClick={closeModal} // Close modal when clicking background
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="bg-white p-6 rounded-2xl shadow-xl w-96 relative"
                        onClick={(e) => e.stopPropagation()} // Prevent the modal from closing when clicking inside the modal
                    >
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        {selectedIndex !== null && (
                            <>
                                <h2 className="text-lg font-bold">{menuItems[selectedIndex].name}</h2>
                                <img 
                                    src={menuItems[selectedIndex].modalImage} 
                                    alt={menuItems[selectedIndex].name} 
                                    className="mt-2 rounded-lg"
                                />
                            </>
                        )}
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Menu;