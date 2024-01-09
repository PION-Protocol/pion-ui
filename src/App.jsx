import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./frontend/pages/home/Home";
import { useEffect } from "react";
import Ecosystem from "./frontend/pages/ecosystem/Ecosystem";
import Footer from "./frontend/components/footer/Footer";
import StakePION from "./frontend/pages/pionApp/stakePION/StakePION";
import AppLayout from "./frontend/components/appLayout/AppLayout";
import WebLayout from "./frontend/components/webLayout/WebLayout";

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
      {/* <Header/> */}
        <Routes>
          <Route path='/' element={<WebLayout Component={Home}/>} />
          <Route path='/ecosystem' element={<WebLayout Component={Ecosystem}/>} />
          <Route path='/launch' element={<AppLayout Component={StakePION}/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
