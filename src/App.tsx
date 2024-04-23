import Navbar from "./components/Navbar/Navbar";
import NavbarMobile from "./components/Navbar/NavbarMobile";
import Footer from "./components/Footer/Footer";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom"
import { useState, useEffect} from "react"; 

function App() {

  const {width} = useWindowDimensions()

  return (
    <>
      
      <div><b>{(width < 1101) ? <NavbarMobile /> : <Navbar />}</b></div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default App;
