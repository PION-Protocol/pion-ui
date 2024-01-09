import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./frontend/pages/home/Home";
import { useEffect } from "react";
import Ecosystem from "./frontend/pages/ecosystem/Ecosystem";
import Header from "./frontend/components/header/Header";
import Footer from "./frontend/components/footer/Footer";
import StakePION from "./frontend/pages/stakePION/StakePION";

function App() {
  
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY || document.documentElement.scrollTop;
      const mainBody = document.querySelector('body');

      if (scroll <= 80) {
        mainBody.classList.remove('group/ns');
      } else {
        mainBody.classList.add('group/ns');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/ecosystem' element={<Ecosystem/>} />
          <Route path='/launch' element={<StakePION/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
