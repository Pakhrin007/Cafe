import React from 'react';
import video2 from "../../assets/videos/video2.mp4"
import image from "../../assets/images/coffee.jpeg"
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Hero Section with Video Background */}
      <div className="relative h-[90vh] w-[95vw] mx-auto">
        {/* Video background */}
        <div className="absolute mt-[30px] h-[100vh] font-[Poppins]">
          <video 
            autoPlay 
            muted 
            loop 
            className="w-screen h-full object-cover"
          >
            <source src={video2} type="video/mp4" />
          </video>
          
          {/* Shadow overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-[1]"></div>
        </div>
        
        {/* Overlay Text */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif text-white ">Coffee Covet</h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl">
            Discover the art of authentic Indian coffee, crafted with passion since 2015
          </p>
        </div>
      </div>

      {/* History Section */}
      <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto mt-[130px]">
        <div className="flex flex-col items-center ">
          <h2 className="text-4xl font-serif text-gray-800 mb-6">Our Coffee Journey</h2>
          <div className="h-1 w-24 bg-brown-600 mb-8"></div>
          <p className="text-center text-gray-700 max-w-3xl">
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img 
              src={image} 
              alt="Coffee history" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-2xl font-serif text-brown-800">The Mumbai Origins</h3>
            <p className="text-gray-700">
              Hailing from Mumbai, India, Coffee Covet started as a simple coffee stand in 2015, 
              sharing the story of Mumbai's dairy production and its unique relationship with Indian coffee culture.
            </p>
            <p className="text-gray-700">
              Today, we've grown into a lifestyle café offering a full menu while maintaining our commitment 
              to using pure, uncompromising quality Indian dairy that gives our coffee its signature rich, 
              creamy texture with a subtle hint of sweetness. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est accusantium dolor dignissimos, commodi architecto minima tempora voluptatum consequuntur quasi! Necessitatibus nulla omnis repellendus ducimus! Nam eligendi suscipit et obcaecati ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ducimus cupiditate corporis, incidunt pariatur maiores eum dolores unde nam. Harum consequatur molestiae dolores corporis necessitatibus accusantium eius amet enim labore.
            </p>
          </div>
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="  px-[8px] md:px-8 bg-gray-100 mb-[10px]   ">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center ">
          <div className="flex items-center justify-center p-[30px]">
          <div className="h-px bg-gray-300 md:w-52 w-[60px] "></div>
          <h1 className="text-[16px] font-poppins text-gray-800 px-6 uppercase md:text-[20px]">New Arrivals</h1>
          <div className="h-px bg-gray-300 md:w-52 w-[60px] "></div>
        </div>
        
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 relative">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative">
              <img 
                src={image} 
                alt="Whipped Coffee Ice Cream Sundae" 
                className="rounded-lg shadow-md w-64 h-64 object-cover"
              />
              <div className="flex flex-col ">          
                <h3 className="text-2xl font-serif text-brown-800 mt-4 md:mt-0">Whipped Coffee Ice Cream Sundae</h3>
                <p className="text-xl text-brown-600 mt-1">10$</p>
                <p className="text-gray-700 mt-2">
                  Layers of coffee-infused ice cream, chocolate sauce, and whipped cream topped with chocolate shavings. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cupiditate maiores libero tempora consequuntur, obcaecati quidem eius atque. Eveniet, aut omnis adipisci eius animi illo accusamus ipsa fuga aliquam corrupti.
                </p>
              </div>
              {/* Arrow */}
             
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-6 relative items-end mt-[30px]">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative">
              <img 
                src={image} 
                alt="Whipped Coffee Ice Cream Sundae" 
                className="rounded-lg shadow-md w-64 h-64 object-cover"
              />
              <div className="flex flex-col ">
            
                <h3 className="text-2xl font-serif text-brown-800 mt-4 md:mt-0">Whipped Coffee Ice Cream Sundae</h3>
                <p className="text-xl text-brown-600 mt-1">10$</p>
                <p className="text-gray-700 mt-2">
                  Layers of coffee-infused ice cream, chocolate sauce, and whipped cream topped with chocolate shavings. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cupiditate maiores libero tempora consequuntur, obcaecati quidem eius atque. Eveniet, aut omnis adipisci eius animi illo accusamus ipsa fuga aliquam corrupti.
                </p>
                
              </div>
              </div>
          </div>

        </div>
      </div>

      {/* Decorative coffee circles */}
    
    </div>
  );
};

export default Home;