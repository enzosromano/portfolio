import "./ProjectDisplay.css";
import { useState, useRef, useEffect} from "react"; 

export default function ProjectDisplay(props: any) {

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

    return(
        <main ref={ref} className="project">
            <div className="imageArea">
                <img src={props.image} alt={props.alt}></img>
            </div>
            <div className="textArea">
                <h1>{props.title}</h1>
                {props.text}
            </div>
        </main>
    )
}