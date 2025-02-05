
import { useState, useEffect } from "react";
import Banner from "../Banner/Banner";
import LatestVisas from "../LatestVisas/LatestVisas";
import Testimonials from "../Testimonials/Testimonials";
import Workings from "../Workings/Workings";
import Footer from "../Footer/Footer";


const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Set initial dark mode state
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement.classList;

    if (html.contains("dark")) {
      html.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      html.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 min-h-screen">
      <header className="p-4 flex justify-end">
       
      </header>
      <Banner />
      <LatestVisas />
      <Workings />
      <Testimonials />
      <Footer/>
    </div>
  );
};

export default Home;
