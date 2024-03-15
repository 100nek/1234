import Header from "./components/header/Header";
import HomeBlock from "./components/home-block/HomeBlock";
import Tokenomics from './components/tokenomics/Tokenomics';
import HowToBuy from './components/how-to-buy/HowToBuy';
import Footer from "./components/footer/Footer";
import ComingSoon from "./components/coming-soon/ComingSoon";
import MellstroyLinks from "./components/mellstroy-links/MellstroyLinks";

function App() {

  return (
    <>
      <Header />
      <HomeBlock />
      <MellstroyLinks />
      <Tokenomics />
      <HowToBuy />
      <Footer />
    </>
  )
}

export default App
