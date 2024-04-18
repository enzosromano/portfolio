import DirectionalButton from "../components/DirectionalButtons/DirectionalButton.js";

export default function Home() {
    return (
        <div className="about">

            <div className="aboutleft">
                <h1>Hi, i'm Enzo.</h1>
                <h2>I love to build things.</h2>

                <a href="EnzoRomanoResume.pdf" alt="resume download link" download>
                    <DirectionalButton role="button">Download Resume</DirectionalButton>
                </a>
            </div>

            <div className="aboutright">
                <h2>Test</h2>
            </div>
            

        </div>
    )
}