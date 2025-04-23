import Product from "./ProductSection"
import AboutSection from "./AboutSection"
import FeaturesSection from "./Featured"
import HeroSection from "./HeroSection"
import JoinSection from "./JoinSection"
import Footer from "../../components/Layout/Footer"

function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection/>
      <AboutSection/>
      <Product/>
      <JoinSection/>
      <Footer/>
    </div>
  )
}

export default Home
