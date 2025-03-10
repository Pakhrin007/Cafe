import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import classes from "./ClassData";

const ClassDetails = () => {
    const { id } = useParams();
    const classItem = classes.find((x) => x.id === Number(id));

    if (!classItem) {
        return <p className="text-center text-lg ">Class not found.</p>;
    }

    return (
        <div className="min-h-screen  p-6 flex flex-col items-center">
            {/* Back Button */}
            <Link to="/classes" className="w-full max-w-4xl mb-6">
                <button className="flex items-center text-gray-700 hover:text-gray-900 transition duration-300  p-3 rounded-lg shadow-md hover:bg-gray-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    Back to Classes
                </button>
            </Link>

            {/* Class Details Card */}
            <div className="bg-white shadow-2xl rounded-lg flex flex-col md:flex-row overflow-hidden w-full max-w-4xl p-4 space-y-6 md:space-y-0 md:space-x-6">
                {/* Left Side - Image */}
                <div className="md:w-1/2 w-full overflow-hidden rounded-lg">
                    <img
                        src={classItem.image}
                        alt={classItem.title}
                        className="w-full h-64 md:h-full object-cover transform hover:scale-105 transition duration-300 ease-in-out"
                    />
                </div>

                {/* Right Side - Details */}
                <div className="md:w-1/2 w-full p-6 flex flex-col justify-center space-y-6">
                    <h2 className="text-4xl font-semibold text-gray-800 mb-3">{classItem.title}</h2>
                    <p className="text-gray-600 mb-4 text-lg leading-relaxed">{classItem.description}</p>

                    <div className="space-y-3">
                        <p className="text-gray-700">
                            <strong className="text-gray-800">Teacher:</strong> {classItem.teacher}
                        </p>
                        <p className="text-gray-700">
                            <strong className="text-gray-800">Time:</strong> {classItem.time}
                        </p>
                        <p className="text-gray-700">
                            <strong className="text-gray-800">Price:</strong> {classItem.price}
                        </p>
                    </div>

                  
                </div>
            </div>
        </div>
    );
};

export default ClassDetails;
