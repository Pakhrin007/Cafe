import React from 'react';
import about from '../../assets/images/image.png'
import location from '../../assets/images/location.png'

const AboutUs = () => {
  return (
    <div className="h-full w-screen mt-[30px] overflow-x-hidden bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with divider lines */}
        <div className="flex items-center justify-center mt-[20px]">
          <div className="h-px bg-gray-300 w-20 md:w-52"></div>
          <h1 className="text-[18px] font-body text-gray-800 px-3 md:px-6 uppercase">About Us</h1>
          <div className="h-px bg-gray-300 w-20 md:w-52"></div>
        </div>
        
        {/* Content section - Responsive: column on small screens, row on medium+ */}
        <div className="flex flex-col md:flex-row md:gap-x-8 gap-y-6 md:gap-y-0 p-[30px]">
          {/* Image */}
          <div className="w-full flex justify-center md:justify-start">
            <div className="rounded-[20px] overflow-hidden">
              <img 
                src={about} 
                alt="Café interior"
                className="w-full max-w-[600px] h-auto md:h-[500px] object-contain" 
              />
            </div>
          </div>
          
          {/* Text content */}
          <div className="w-full md:mt-[50px]">
            {/* Description text */}
            <p className="text-justify text-[14px] md:text-[18px] text-black mb-[20px]">
              Hailing all the way from Mumbai, India, Coffee Covet first started out in June 2015 as a simple coffee stand where one can hear all about the milk produced in Mumbai and its relation to the coffee scene in India. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid neque voluptates minima alias? Ut sunt eum dicta voluptas minima, eligendi inventore neque nulla, ipsa, accusantium maiores. Nisi ex magnam doloremque!
              Similique dolorum quas odio in iste nihil inventore. Repudiandae est nostrum consequuntur? Repellendus, sit? A, ipsa dolorum eos quisquam nulla accusamus aliquam culpa qui amet maiores! Vitae at inventore deserunt?
            </p>
            <p className="text-justify text-[14px] md:text-[18px] text-black">
              Today, Coffee Covet has evolved into a lifestyle café serving up a full-range menu. From coffee to desserts and savouries, Coffee Covet prides itself on its use of pure uncompromising quality of Indian dairy that is both rich and creamy with a tinge of sweetness.
            </p>   
          </div>
        </div>

        {/* Our mission section */}
        <div className="flex items-center justify-center">
          <div className="h-px bg-gray-300 w-20 md:w-52"></div>
          <h1 className="text-[18px] font-body text-gray-800 px-3 md:px-6 uppercase font-title">Our Mission</h1>
          <div className="h-px bg-gray-300 w-20 md:w-52"></div>
        </div>

        {/* Mission content - Responsive: column on small screens, row-reverse on medium+ */}
        <div className="flex flex-col md:flex-row-reverse md:gap-x-10 gap-y-6 md:gap-y-0 p-[30px]">
          {/* Image */}
          <div className="w-full flex justify-center md:justify-start">
            <div className="rounded-[20px] overflow-hidden">
              <img 
                src={about} 
                alt="Café interior"
                className="w-full max-w-[600px] h-auto md:h-[500px] object-contain"  
              />
            </div>
          </div>
          
          {/* Text content */}
          <div className="w-full md:mt-[50px]"> 
            {/* Description text */}
            <p className="font-poppins text-justify text-[14px] md:text-[18px] text-black mb-[20px]">
              Hailing all the way from Mumbai, India, Coffee Covet first started out in June 2015 as a simple coffee stand where one can hear all about the milk produced in Mumbai and its relation to the coffee scene in India. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid neque voluptates minima alias? Ut sunt eum dicta voluptas minima, eligendi inventore neque nulla, ipsa, accusantium maiores. Nisi ex magnam doloremque!
              Similique dolorum quas odio in iste nihil inventore. Repudiandae est nostrum consequuntur? Repellendus, sit? A, ipsa dolorum eos quisquam nulla accusamus aliquam culpa qui amet maiores! Vitae at inventore deserunt?
            </p>
            <p className="text-justify text-[14px] md:text-[18px] text-black">
              Today, Coffee Covet has evolved into a lifestyle café serving up a full-range menu. From coffee to desserts and savouries, Coffee Covet prides itself on its use of pure uncompromising quality of Indian dairy that is both rich and creamy with a tinge of sweetness.
            </p>   
          </div>
        </div>

        {/* Locations section */}
        <div className="flex items-center justify-center mb-5">
          <div className="h-px bg-gray-300 w-20 md:w-52"></div>
          <h1 className="text-[18px] text-gray-800 px-3 md:px-6 uppercase ">Our Locations</h1>
          <div className="h-px bg-gray-300 w-20 md:w-52"></div>
        </div>
        
        <div className="flex justify-center mb-[30px] ">
          <a href="https://maps.app.goo.gl/kWaEPGNyD8onWf416">
            <img src={location} alt="location" className="w-full max-w-[1500px] h-auto object-contain" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;