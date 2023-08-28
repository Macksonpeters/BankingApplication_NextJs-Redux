import HomePageBody from "@/components/Homepage/Homepage";
import AlertModal from "@/components/modals/AlertModal";
import Navbar from "@/components/navbar/Navbar";
import { useSelector } from "react-redux";

const HomePage = () => {
  return (
    <div className="bg-cover text-white">
      <div>
        <HomePageBody />
      </div>
    </div>
  );
};
export default HomePage;
