import DirectionalButton from "../components/DirectionalButtons/DirectionalButton.js";

export default function Home() {
    return (
        <div className="about">

            <div className="aboutleft">
                <h1>Hi, i'm Enzo.</h1>
                <h2>I love to build things.</h2>

                <div className="buttonStack">
                    <a href="EnzoRomanoResume.pdf" alt="resume download link" download>
                        <DirectionalButton role="button">Download Resume</DirectionalButton>
                    </a>

                    <DirectionalButton role="button">Contact Me</DirectionalButton>
                </div>

                
            </div>

            <div className="aboutright">
                <img src="favicon.ico" alt="placeholder"/>
                <p>placeholder image</p>
            </div>
            

        </div>
    )
}