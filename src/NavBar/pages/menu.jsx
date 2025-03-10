import { useState } from "react";
import { motion } from "framer-motion";
import cafeMocha from "../../assets/images/cafeMocha.jpg";
import hookah from "../../assets/images/hookah.jpg";
import nonEspresso from "../../assets/images/nonEspresso.jpg";
import ramen from "../../assets/images/ramen.jpg";
import titBits from "../../assets/images/titBits.jpg";

const menuItems = [
    { 
        name: "Cafe Mocha", 
        cardImage: "https://media.istockphoto.com/id/157675911/photo/cappuccino-topped-with-swirls-of-chocolate-sauce.jpg?s=612x612&w=0&k=20&c=606NMYMjVnTmpSnJI537_IjW3lqfNJaH7Lc9Qg0BXPU=", 
        modalImage: cafeMocha
    },
    { 
        name: "Hookah", 
        cardImage: "https://media.istockphoto.com/id/157675911/photo/cappuccino-topped-with-swirls-of-chocolate-sauce.jpg?s=612x612&w=0&k=20&c=606NMYMjVnTmpSnJI537_IjW3lqfNJaH7Lc9Qg0BXPU=", 
        modalImage: hookah
    },
    { 
        name: "nonEspresso", 
        cardImage: "https://media.istockphoto.com/id/157675911/photo/cappuccino-topped-with-swirls-of-chocolate-sauce.jpg?s=612x612&w=0&k=20&c=606NMYMjVnTmpSnJI537_IjW3lqfNJaH7Lc9Qg0BXPU=", 
        modalImage: nonEspresso 
    },
    { 
        name: "Ramen", 
        cardImage: "https://media.istockphoto.com/id/157675911/photo/cappuccino-topped-with-swirls-of-chocolate-sauce.jpg?s=612x612&w=0&k=20&c=606NMYMjVnTmpSnJI537_IjW3lqfNJaH7Lc9Qg0BXPU=", 
        modalImage: ramen
    },
    { 
        name: "Tit Bits", 
        cardImage: "https://media.istockphoto.com/id/157675911/photo/cappuccino-topped-with-swirls-of-chocolate-sauce.jpg?s=612x612&w=0&k=20&c=606NMYMjVnTmpSnJI537_IjW3lqfNJaH7Lc9Qg0BXPU=", 
        modalImage: titBits
    }
];

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className='flex flex-col h-full bg-gray-50 mb-[50px] md:mb-[100px]'>
            <div className="flex flex-col items-center justify-center">
                {/* Header with divider lines */}
                <div className="flex items-center justify-center p-4 md:p-[30px] mb-6 md:mb-10">
                    <div className="h-px bg-gray-300 w-20 md:w-52"></div>
                    <h1 className="text-[18px] md:text-[20px] font-poppins text-gray-800 px-3 md:px-6 uppercase">Our Menu</h1>
                    <div className="h-px bg-gray-300 w-20 md:w-52"></div>
                </div>
            </div>
            
            <div>
                {/* Flexbox layout for menu items with responsive adjustments */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-6 md:gap-x-[45px] md:gap-y-[40px] px-4 sm:px-8 md:px-[85px]">
                    {menuItems.map((item, index) => (
                        <div 
                            key={index} 
                            className="bg-white shadow-md rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col items-center w-[290px] h-[210px]"
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
                    className="fixed inset-0 flex w-full items-center justify-center bg-black/70 opacity-100 z-50 p-4"
                    onClick={closeModal} // Close modal when clicking background
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="bg-white p-4 md:p-6 rounded-2xl shadow-xl w-full max-w-[500px] relative"
                        onClick={(e) => e.stopPropagation()} // Prevent the modal from closing when clicking inside the modal
                    >
                        <button
                            className="absolute top-2 right-4 text-gray-500 hover:text-black text-[2rem] hover:rotate-90 transition-all duration-300"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        {selectedIndex !== null && (
                            <div>
                                <h2 className="text-lg font-bold text-center text-brown-500 underline underline-offset-4">{menuItems[selectedIndex].name}</h2>
                                <img 
                                    src={menuItems[selectedIndex].modalImage} 
                                    alt={menuItems[selectedIndex].name} 
                                    className="mt-2 rounded-lg w-full"
                                />
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Menu;