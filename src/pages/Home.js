import DirectionalButton from "../components/DirectionalButtons/DirectionalButton.js";

export default function Home() {
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

            <div className="skills">
                
                <h2>Skills</h2>

                <div className="skillslist">
                    <div className="devskills">
                        <img src="pythonicon.png" alt="linkedin"/>
                        <p>Python both as a scripting language and a cooking the pizza blah blah</p>

                        <img src="pythonicon.png" alt="linkedin"/>
                        <p>Python both as a scripting language and a cooking the pizza blah blah</p>
                    </div>
                    <div className="miscskills">
                        <img src="pythonicon.png" alt="linkedin"/>
                        <p>Python both as a scripting language and a cooking the pizza blah blah</p>

                        <img src="pythonicon.png" alt="linkedin"/>
                        <p>Python both as a scripting language and a cooking the pizza blah blah</p>
                    </div>
                </div>

            </div>

        </div>
    )
}