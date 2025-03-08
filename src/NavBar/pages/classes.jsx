import truncateText from "../../functions/word-limit";

const Classes = () => {
    const classes = [
        {
            title: "Coffee Fundamentals",
            time: "10:00 AM - 12:00 PM",
            price: "$50",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb1yUsSsdbkr6nywooqxHqI9LoBlQiK768aQ&s",
            description: "Introduction to coffee beans, brewing methods, and coffee history.",
        },
        {
            title: "Espresso Techniques",
            time: "1:00 PM - 3:00 PM",
            price: "$60",
            image: "https://www.istockphoto.com/photo/cup-of-coffee-with-smoke-and-coffee-beans-on-old-wooden-background-gm1467739359-499450699?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fespresso&utm_medium=affiliate&utm_source=unsplash&utm_term=espresso%3A%3Avideo-affiliates%3Acontrol", // Replace with your image URL
            description: "Machine operation, espresso extraction, and milk texturing.",
        },
        {
            title: "Latte Art",
            time: "4:00 PM - 6:00 PM",
            price: "$70",
            image: "https://www.istockphoto.com/photo/cup-of-coffee-with-smoke-and-coffee-beans-on-old-wooden-background-gm1467199060-499020662?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fespresso&utm_medium=affiliate&utm_source=unsplash&utm_term=espresso%3A%3Avideo-affiliates%3Acontrol", // Replace with your image URL
            description: "Techniques for creating patterns in coffee drinks.",
        },
        {
            title: "Manual Brewing",
            time: "10:00 AM - 12:00 PM",
            price: "$55",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb1yUsSsdbkr6nywooqxHqI9LoBlQiK768aQ&s", // Replace with your image URL
            description: "Techniques for brewing coffee using methods like French press and pour-over.",
        },

        {
            title: "Manual Brewing",
            time: "10:00 AM - 12:00 PM",
            price: "$55",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb1yUsSsdbkr6nywooqxHqI9LoBlQiK768aQ&s", // Replace with your image URL
            description: "Techniques for brewing coffee using methods like French press and pour-over.",
        },
    ];

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-center p-[30px] mb-[30px]">
          <div className="h-px bg-gray-300 w-52"></div>
          <h1 className="text-[20px] font-poppins text-gray-800 px-6 uppercase">Our Classes</h1>
          <div className="h-px bg-gray-300 w-52 "></div>
        </div>
            <div className="flex flex-wrap gap-4">
                {classes.map((classItem, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow w-[330px] h-[370px]"
                    >
                        {/* Image Section */}
                        <img
                            src={classItem.image}
                            alt={classItem.title}
                            className="w-full h-48 object-contain"
                        />

                        {/* Class Details Section */}
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-2">{classItem.title}</h2>
                            <p className="text-gray-600 mb-4">{truncateText(classItem.description, 10)}</p>

                            {/* Time and Price Section */}
                            <div className="flex justify-between items-center">
                                <p className="text-gray-700 font-semibold">{classItem.time}</p>
                                <p className="text-gray-700 font-semibold">{classItem.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Classes;