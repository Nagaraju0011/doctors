import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="md:mx-auto">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* footer left */}
        <div>
          <img src={assets.logo} alt="" className="mb-5 w-40" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* footer center */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="">About us</Link>
            </li>
            <li>
              <Link to="">Contact us</Link>
            </li>
            <li>
              <Link to="">Privacy policy</Link>
            </li>
          </ul>
        </div>
        {/* footer right */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <p className="text-gray-600 leading-6">+1-212-456-7890</p>
          <p className="text-gray-600 leading-6">greatstackdev@gmail.com</p>
        </div>
      </div>
      <div className="">
        <hr />
        <p className="py-5 text-sm text-center text-gray-600">
          Copyright © 2024 GreatStack - All Right Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
