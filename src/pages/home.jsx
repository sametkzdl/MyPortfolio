import Banner from "../components/banner";
import Contact from "../components/contact";
import Education from "../components/education";
import References from "../components/references";
import Services from "../components/services";
import Work from "../components/work";

const Home = () => {
  return (
    <div>
      <Banner />
      <References />
      <Services />
      <Education />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;
