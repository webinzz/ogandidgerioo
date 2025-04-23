import HeroSection from "./HeroSection";
import DescSection from "./DescSection";
import WeeknesSection from "./WeeknesSection";
import JoinUs from "../Home/JoinSection";
import Footer from "../../components/Layout/Footer";
import Location from "./Location";

const AboutUs = () => {
  return (
    <div className="bg-white text-black">
      <HeroSection/>
    <DescSection/>
      <WeeknesSection/>
      <Location/>
      <JoinUs/>
      <Footer/>
    </div>
  );
};


export default AboutUs;
