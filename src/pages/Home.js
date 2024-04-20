import DirectionalButton from "../components/DirectionalButtons/DirectionalButton.js";
import { useState, useRef, useEffect} from "react"; 

export default function Home() {

    //Create a state that holds the current intersecting value
    const [isIntersecting, setIsIntersecting] = useState(false);
    //Reference, will be attached to the element you want to reference
    //Similar to document.querySelector
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsIntersecting(entry.isIntersecting);
          },
          { rootMargin: "-300px" }
        );
        console.log(isIntersecting);
        observer.observe(ref.current);
    
        return () => observer.disconnect();
      }, [isIntersecting]);
    
      useEffect(() => {
        if (isIntersecting) {
          ref.current.querySelectorAll("div").forEach((el) => {
            el.classList.add("slide-in");
          });
        } else {
          ref.current.querySelectorAll("div").forEach((el) => {
            el.classList.remove("slide-in");
          });
        }
      }, [isIntersecting]);

    return (
        <div>
            <div className="home">

                <div className="homeleft">
                    <h1>Hi, i'm Enzo.</h1>
                    <h2>I love to build things.</h2>

                    <div className="buttonStack">
                        <a href="EnzoRomanoResume.pdf" alt="resume download link" download>
                            <DirectionalButton role="button">Download Resume</DirectionalButton>
                        </a>

                        <DirectionalButton role="button">Contact Me</DirectionalButton>
                    </div>

                    
                </div>

                <div className="homeright">
                    <div className="headshot">
                        <img src="headshot.jpg" alt="headshot"/>
                    </div>
                    <div className="icons">
                        <a href="https://github.com/enzosromano" target="_blank" rel="noreferrer">
                            <img src="/contacticons/githubicon.png" alt="github"/>
                        </a>
                        <a href="https://www.linkedin.com/in/enzo-romano-878b051b3/" target="_blank" rel="noreferrer">
                            <img src="/contacticons/linkedinicon.png" alt="linkedin"/>
                        </a>
                        <a href="https://google.com" target="_blank" rel="noreferrer">
                            <img src="/contacticons/emailicon.png" alt="linkedin"/>
                        </a>
                    </div>
                    <p>Dont worry, they'll open in a new tab.</p>
                </div>
            </div>

            <div className="skills">
                
                <h2>Skills</h2>

                <main ref={ref} className="skillslist">

                    <div class="lskills">
                        <div class="t1skills">
                            <img src="/skillicons/pythonicon.png" alt="linkedin"/>
                            <p>Python + Django to build the backend of full stack applications.</p>
                        </div>
                        <div class="t2skills">
                            <img src="/skillicons/pythonicon.png" alt="linkedin"/>
                            <p>This is a description of my current skill.</p>
                        </div>
                    </div>
                    <div class="mskills">
                        <div class="t1skills">
                            <img src="/skillicons/pythonicon.png" alt="linkedin"/>
                            <p>This is a description of my current skill.</p>
                        </div>
                        <div class="t2skills">
                            <img src="/skillicons/pythonicon.png" alt="linkedin"/>
                            <p>This is a description of my current skill.</p>
                        </div>
                    </div>
                    <div class="rskills">
                        <div class="t1skills">
                            <img src="/skillicons/pythonicon.png" alt="linkedin"/>
                            <p>This is a description of my current skill.</p>
                        </div>
                        <div class="t2skills">
                            <img src="/skillicons/pythonicon.png" alt="linkedin"/>
                            <p>This is a description of my current skill.</p>
                        </div>
                    </div>

                    
                </main>
            </div>



        </div>
    )
}

