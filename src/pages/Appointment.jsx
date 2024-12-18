import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

function Appointment() {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState({});
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FIR", "SAT"];

  const fetchInfo = async () => {
    const docInfo = await doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      //getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      //getting end time
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      //setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        timeSlots.push({
          dateTime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, [docInfo, doctors]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {}, [docSlots]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="max-w-[250px]">
          <img src={docInfo.image} className="bg-primary rounded-lg" />
        </div>
        <div className="flex-1 border border-gray-300 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 sm:mt-0">
          <p className="flex items-center text-2xl font-medium">
            {docInfo.name}
            <img src={assets.verified_icon} alt="" className="w-5 ml-1" />
          </p>
          <p className="flex gap-2 items-center text-sm mt-1 text-gray-500">
            {docInfo.degree} {docInfo.speciality}{" "}
            <span className="border rounded-full px-3 py-0.5 text-xs">
              {docInfo.experience}
            </span>
          </p>
          <div className="mt-5">
            <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
              About
            </p>
            <p className="text-sm text-gray-500">{docInfo.about}</p>
          </div>
          <p className="font-medium  mt-4">
            <span className="text-gray-500">Appointment Fee:</span> $
            {docInfo.fees}
          </p>
        </div>
      </div>

      {/* BOOKING SLOTS */}
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
        <p>Booking Slots</p>
        <div className="flex gap-3 items-center w-full overflow-x-auto mt-4">
          {docSlots.length &&
            docSlots.map((item, index) => {
              return (
                <div
                  onClick={() => setSlotIndex(index)}
                  key={index}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-primary text-white"
                      : "border border-gray-200"
                  }`}
                >
                  <p> {item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                  <p>{item[0] && item[0].dateTime.getDate()}</p>
                </div>
              );
            })}
        </div>
        <div className={`flex items-center gap-3 w-full overflow-x-auto mt-4`}>
          {docSlots.length &&
            docSlots[slotIndex].map((item, index) => (
              <p
                onClick={() => setSlotTime(item.time)}
                className={`text-sm font-light  flex-shrink-0 px-5 py-2  rounded-full cursor-pointer ${
                  item.time === slotTime
                    ? "bg-primary text-white"
                    : "border text-gray-400 border-gray-300"
                }`}
                key={index}
              >
                {item.time}
              </p>
            ))}
        </div>
        <button className="bg-primary text-white text-sm font-light px-10 py-3  rounded-full my-6">
          Book An Appointment
        </button>
      </div>

      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  );
}

export default Appointment;
