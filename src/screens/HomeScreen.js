import Aboutus from '../components/Aboutus';
import Attribute from '../components/Attribute';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Joinus from '../components/Joinus';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';

const HomeScreen = () => {
  return (
    <>
      <Header />
      <Hero />
      <Aboutus />
      <Attribute />
      <Roadmap />
      <Joinus />
      <Team />
      <Faq />
      <Footer />
    </>
  );
};

export default HomeScreen;
