import { assets } from "../assets/assets";

function Header() {
  return (
    <div className=" bg-primary rounded-lg flex flex-col md:flex-row flex-wrap px-6 md:px-9 lg:px-20 items-center">
      <div className="headerLeft md:w-1/2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white my-5 font-bold lg:leading-[54px]">
          Book Appointment <br />
          With Trusted Doctors
        </h1>
        <div className="flex flex-row text-white font-light gap-4 my-5">
          <img src={assets.group_profiles} alt="group profile" />
          <p>
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
        </div>
        <div className="mt-5">
          <a
            href="#spiciality"
            className="rounded-full bg-white hover:bg-yellow-300 px-6 py-3 inline-flex items-center w-auto gap-4 hover:scale-105 transition-all duration-300"
          >
            Book Appointment <img src={assets.arrow_icon} />
          </a>
        </div>
      </div>
      <div className="headerRight md:w-1/2">
        <img src={assets.header_img} alt="" />
      </div>
    </div>
  );
}

export default Header;
