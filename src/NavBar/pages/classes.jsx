import truncateText from "../../functions/word-limit";
import classes from "./ClassData";
import { Link } from "react-router-dom";

const Classes = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-center p-[30px] mb-[30px]">
        <div className="h-px bg-gray-300 w-52"></div>
        <h1 className="text-[20px] font-poppins text-gray-800 px-6 uppercase">Our Classes</h1>
        <div className="h-px bg-gray-300 w-52 "></div>
      </div>
      <div className="flex flex-wrap gap-x-[45px] px-[50px] gap-y-[40px]">
        {classes.map((classItem) => (
          <Link key={classItem.id} to={`/classDetails/${classItem.id}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg w-[290px] h-[390px] hover:scale-105 transition-all duration-300">
              <img
                src={classItem.image}
                alt={classItem.title}
                className="w-full h-48 object-contain"
              />
              <div className="p-6 rounded-[20px]">
                <h2 className="text-2xl font-bold mb-2">{classItem.title}</h2>
                <p className="text-gray-600 mb-2">{truncateText(classItem.description, 7)}</p>
                <h3 className="text-gray-800 mb-2">{classItem.teacher}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-gray-700 font-semibold">{classItem.time}</p>
                  <p className="text-gray-700 font-semibold">{classItem.price}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Classes;
