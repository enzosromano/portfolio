import { useState, useRef, useEffect} from "react"; 
import "./SkillsDesktop.css";

export default function SkillsDekstop() {

    //Create a state that holds the current intersecting value
    const [isIntersecting, setIsIntersecting] = useState(false);
    //Reference, will be attached to the element you want to reference
    //Similar to document.querySelector
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsIntersecting(entry.isIntersecting);
          },
          { rootMargin: "-300px" }
        );
        if (ref.current) observer.observe(ref?.current);
    
        return () => observer.disconnect();
      }, [isIntersecting]);
    
      useEffect(() => {
        if (isIntersecting) {
            if (ref.current) ref.current.querySelectorAll("div").forEach((el) => {
            el.classList.add("slide-in");
          });
        } else {
            if (ref.current) ref.current.querySelectorAll("div").forEach((el) => {
            el.classList.remove("slide-in");
          });
        }
      }, [isIntersecting]);

    return (
        <div>
            <main ref={ref} className="skillslist">

                <div className="lskills">
                    <div className="t1skills">
                        <img src="/skillicons/pythonicon.png" alt="linkedin"/>
                        <p>Python + Django to build the backend of full stack applications.</p>
                    </div>
                    <div className="t2skills">
                        <img src="/skillicons/javaicon.png" alt="linkedin"/>
                        <p>Java to develop applications that manage data and need to run on everything.</p>
                    </div>
                    <div className="t3skills">
                        <img src="/skillicons/jiraicon.png" alt="linkedin"/>
                        <p>Jira through 5+ Years of working in an Agile envrionment.</p>
                    </div>
                </div>
                <div className="mskills">
                    <div className="t1skills">
                        <img src="/skillicons/tsicon.png" alt="linkedin"/>
                        <p>TypeScript to automate api testing and build an interactive frontend.</p>
                    </div>
                    <div className="t2skills">
                        <img src="/skillicons/nodejsicon.png" alt="linkedin"/>
                        <p>NodeJS to develop a backend server for a full stack application.</p>
                    </div>
                    <div className="t3skills">
                        <img src="/contacticons/githubicon.png" alt="linkedin"/>
                        <p>Source Control experience through working within large existing codebases.</p>
                    </div>
                </div>
                <div className="rskills">
                    <div className="t1skills">
                        <img src="/skillicons/reacticon.png" alt="linkedin"/>
                        <p>React to build a complex component-based UI... And spend 2 hours making a cool button.</p>
                    </div>
                    <div className="t2skills">
                        <img src="/skillicons/angularicon.png" alt="linkedin"/>
                        <p>Angular + Storybook to build UI components.</p>
                    </div>
                    <div className="t3skills">
                        <img src="/skillicons/mysqlicon.png" alt="linkedin"/>
                        <p>Who doesn't love writing SQL queries... right?</p>
                    </div>
                </div>
                
            </main>
        </div>

    )
}

