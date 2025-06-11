import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Layout from "./pages/hotelOwner/Layout";
import Dashboard from "./pages/hotelOwner/Dashboard";
import AddRoom from "./pages/hotelOwner/AddRoom";
import ListRoom from "./pages/hotelOwner/ListRoom";
import HotelReg from "./components/HotelReg";
import { useAppContext } from "./context/AppContext";
import { Toaster } from "react-hot-toast";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";
import Footer from "./components/Footer";
import MyBookings from "./pages/MyBookings";
import Loader from "./components/Loader";
import About from "./pages/About";
import Experience from "./pages/Experience";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  // Check Is Route Starts With Owner
  const isOwnerPath = useLocation().pathname.includes("owner");

  const { showHotelReg } = useAppContext();

  return (
    <div className="font-inter">
      <Toaster />
      {!isOwnerPath && <Navbar />}
      {showHotelReg && <HotelReg />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="my-bookings" element={<MyBookings />} />
          <Route path="/loader/:nextUrl" element={<Loader />} />
          <Route path="/owner" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-room" element={<AddRoom />} />
            <Route path="list-room" element={<ListRoom />} />
          </Route>
        </Routes>
      </div>
      <Footer />
      <SpeedInsights />
      <Analytics />
    </div>
  );
};

export default App;
