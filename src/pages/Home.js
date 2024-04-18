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
                <div className="headshot">
                    <img src="headshot.jpg" alt="headshot"/>
                </div>
                <div className="icons">
                    <a href="https://github.com/enzosromano" target="_blank" rel="noreferrer">
                        <img src="githubicon.png" alt="github"/>
                    </a>
                    <a href="https://www.linkedin.com/in/enzo-romano-878b051b3/" target="_blank" rel="noreferrer">
                        <img src="linkedinicon.png" alt="linkedin"/>
                    </a>
                    <a href="https://google.com" target="_blank" rel="noreferrer">
                        <img src="emailicon.png" alt="linkedin"/>
                    </a>
                </div>
                <p>Dont worry, they'll open in a new tab.</p>
            </div>
            

        </div>
    )
}