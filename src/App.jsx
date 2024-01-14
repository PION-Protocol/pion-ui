import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./frontend/pages/home/Home";

import {
  RainbowKitProvider,
  darkTheme,
  getDefaultWallets,
} from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import {
  polygon,
  polygonMumbai
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import AppLayout from "./frontend/components/appLayout/AppLayout";
import Footer from "./frontend/components/footer/Footer";
import WebLayout from "./frontend/components/webLayout/WebLayout";
import Ecosystem from "./frontend/pages/ecosystem/Ecosystem";
import WithdrawPION from "./frontend/pages/pionApp/WithdrawPION";
import StakePION from "./frontend/pages/pionApp/stakePION/StakePION";
import YourAccount from "./frontend/pages/yourAccount/YourAccount";

function App() {
  const { chains, publicClient } = configureChains(
    [polygonMumbai, polygon],
    [
      alchemyProvider({ apiKey: process.env.REACT_APP_ALCHEMY_ID || '' }),
      publicProvider()
    ]
  );
  const { connectors } = getDefaultWallets({
    appName: 'Pion',
    projectId: process.env.REACT_APP_PROJECT_ID || '',
    chains
  });
  
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
  });
  
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
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} initialChain={polygonMumbai}
        theme={darkTheme({
          accentColor: '#4b5563',
          accentColorForeground: 'white',
          borderRadius: 'small',
          fontStack: 'system',
          overlayBlur: 'small',
      })}>
        <BrowserRouter>
          {/* <Header/> */}
            <Routes>
              <Route path='/' element={<WebLayout Component={Home}/>} />
              <Route path='/ecosystem' element={<WebLayout Component={Ecosystem}/>} />
              <Route path='/launch' element={<AppLayout Component={StakePION}/>} />
              <Route path='/account' element={<AppLayout Component={YourAccount}/>} />
              <Route path='/withdraw' element={<AppLayout Component={WithdrawPION}/>} />
            </Routes>
          <Footer/>
        </BrowserRouter>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
