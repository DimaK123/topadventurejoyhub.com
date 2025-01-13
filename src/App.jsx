import './App.scss';

import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // 

import { AboutUs } from './components/AboutUs/AboutUs';
import { Footer } from './components/Footer/Footer';
import { Gallery } from './components/Gallery';
import { Header } from "./components/Header";
import { Hero } from './components/Hero';
import { Price } from './components/Price';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials/Testimonials';

import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsAndConditions } from './pages/TermsAndConditions';
import { CookiePolicy } from './pages/CookiePolicy';
import { AcceptCookies } from './components/AcceptCookies';

export const App = () => {

  const [acceptCookies, setAcceptCookies] = useState(true);

  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <>
      <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <AboutUs />
                <Services />
                <Testimonials />
                <Gallery />
                <Price />
              </>
          } />

          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
      </main>
      <Footer />
      {acceptCookies && <AcceptCookies setAcceptCookies={setAcceptCookies} />}
    </>
  )
  
};

