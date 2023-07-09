import React, { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Loading from "./Components/Loading";
import Aos from "aos";
import 'aos/dist/aos.css'

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="min-h-screen w-full relative bg-lime-900 text-white">
      <Loading />
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
