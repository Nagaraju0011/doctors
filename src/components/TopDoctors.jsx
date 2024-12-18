import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function TopDoctors() {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  return (
    <div className="flex flex-col justify-center items-center text-gray-900 md:mx-auto">
      <h3 className="text-3xl font-medium">Top Doctors to Book</h3>
      <p className="text-sm text-center">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-auto gap-5 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${item._id}`), scrollTo(0, 0);
            }}
            key={index}
            className="border border-blue-200 rounded-md overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
          >
            <img
              className="bg-blue-50"
              src={item.image}
              alt={item.speciality}
            />
            <div className="p-4">
              <div className="flex items-center text-[13px] text-green-500 gap-2">
                <p className="w-[6px] h-[6px] rounded-full bg-green-500"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-500 text-[13px]">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10"
        onClick={() => navigate("/doctors")}
      >
        More
      </button>
    </div>
  );
}

export default TopDoctors;
