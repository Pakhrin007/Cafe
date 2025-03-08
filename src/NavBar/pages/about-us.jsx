import React from 'react';
import about from '../../assets/images/image.png'
const AboutUs = () => {
  return (
    <div className="h-screen bg-gray-50 mt-[65px]">
      <div className="max-w-7xl mx-auto">
        {/* Header with divider lines */}
        <div className="flex items-center justify-center p-[30px]">
          <div className="h-px bg-gray-300 w-52"></div>
          <h1 className="text-4xl font-poppins text-gray-800 px-6 uppercase">About</h1>
          <div className="h-px bg-gray-300 w-52 "></div>
        </div>
        
        {/* Content section */}
        <div className="flex gap-x-8 ">
          {/* Image */}
          <div className="w-full">
            <div className="rounded-md overflow-hidden rounded-[20px]">
              <img 
                src={about} 
                alt="Café interior"
                className="w-[600px] h-[500px] object-contain" 
              />
            </div>
          </div>
          
          {/* Text content */}
          <div className="w-full mt-[50px]">
          
            
            {/* Description text */}
              <p className=" text-justify text-[18px] text-black mb-[20px]">
                Hailing all the way from Mumbai, India, Coffee Covet first started out in June 2015 as a simple coffee stand where one can hear all about the milk produced in Mumbai and its relation to the coffee scene in India. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid neque voluptates minima alias? Ut sunt eum dicta voluptas minima, eligendi inventore neque nulla, ipsa, accusantium maiores. Nisi ex magnam doloremque!
                Similique dolorum quas odio in iste nihil inventore. Repudiandae est nostrum consequuntur? Repellendus, sit? A, ipsa dolorum eos quisquam nulla accusamus aliquam culpa qui amet maiores! Vitae at inventore deserunt?
  
              </p>
              <p className=" text-justify text-[18px] text-black">
                Today, Coffee Covet has evolved into a lifestyle café serving up a full-range menu. From coffee to desserts and savouries, Coffee Covet prides itself on its use of pure uncompromising quality of Indian dairy that is both rich and creamy with a tinge of sweetness.
              </p>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;