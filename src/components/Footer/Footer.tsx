import "./Footer.css";
import { useState, useEffect} from "react"; 

export default function Footer() {

    const {width} = useWindowDimensions()

    return (

        
        <footer className="footer">
            <b>{(width < 1101) ? 
            <p>@ 2024 RomanoEnterprises</p>
            : <p>@ 2024 RomanoEnterprises (not a real company)</p> }</b>
        </footer>
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