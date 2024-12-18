import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Doctors() {
  const { spiciality } = useParams();
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const [filterDoctor, setFilterDoctor] = useState([]);

  const uniqueSpeciality = [
    ...new Set(doctors.map((doctor) => doctor.speciality)),
  ];

  const applyFilter = () => {
    if (spiciality) {
      setFilterDoctor(
        doctors.filter((doctor) => doctor.speciality === spiciality)
      );
    } else {
      setFilterDoctor(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, spiciality]);

  //console.log(spiciality);
  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-2 text-sm text-gray-600">
          {/* {doctors.map((doc, ind) => (
            <p key={ind}>{doc.speciality}</p>
          ))} */}

          {uniqueSpeciality.map((spicail, ind) => (
            <p
              onClick={() =>
                spiciality === spicail
                  ? navigate("/doctors")
                  : navigate(`/doctors/${spicail}`)
              }
              key={ind}
              className={`w-[94vw] sm:w-[230px] py-1.5 pl-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                spiciality === spicail ? "active bg-violet-100" : ""
              }`}
            >
              {spicail}
            </p>
          ))}
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoctor.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
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
      </div>
    </div>
  );
}

export default Doctors;
