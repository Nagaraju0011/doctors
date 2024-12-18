import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="mx-4">
      <div className="md:container">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/doctors" element={<Doctors />}></Route>
          <Route path="/doctors/:spiciality" element={<Doctors />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/my-profile" element={<MyProfile />}></Route>
          <Route path="/my-appointment" element={<MyAppointments />}></Route>
          <Route path="/appointment/:docId" element={<Appointment />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;