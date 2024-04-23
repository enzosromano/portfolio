import "./ProjectDisplay.css";

export default function ProjectDisplay(props: any) {
    return(
        <div className="project">
            <div className="imageArea">
                <img src={props.image} alt={props.alt}></img>
            </div>
            <div className="textArea">
                <p>{props.text}</p>
            </div>
        </div>
    )
}