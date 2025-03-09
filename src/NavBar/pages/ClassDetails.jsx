import { useParams } from "react-router-dom";
import classes from "./ClassData";

const ClassDetails = () => {
    const { id } = useParams();
    const classItem = classes.find((x) => x.id === Number(id));

   
    if (!classItem) {
        return <p className="text-center text-red-500">Class not found.</p>;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
            <div className="bg-white shadow-lg rounded-lg flex max-w-4xl w-full overflow-hidden">
                {/* Left Side - Image */}
                <div className="w-1/2">
                    <img
                        src={classItem.image}
                        alt={classItem.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Side - Details */}
                <div className="w-1/2 p-6 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4">{classItem.title}</h2>
                    <p className="text-gray-700 mb-3">{classItem.description}</p>
                    <p className="text-gray-600 mb-2"><strong>Teacher:</strong> {classItem.teacher}</p>
                    <p className="text-gray-600 mb-2"><strong>Time:</strong> {classItem.time}</p>
                    <p className="text-gray-600 mb-2"><strong>Price:</strong> {classItem.price}</p>
                    <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default ClassDetails;
