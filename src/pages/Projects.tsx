import ProjectDisplay from "../components/ProjectDisplay/ProjectDisplay"

export default function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <br></br><br></br><br></br><br></br>

            <div className="projects">
                <ProjectDisplay 
                    image="../../images/hackucf.png" 
                    alt="test"
                    title="CyberSecurity Competition Scoreboard"
                    text={<p>
                    Tasked with creating the scoreboard that the <b>Collegiate Cyber Defense Club @ UCF </b> 
                    uses to practice for their competitions. The scoreboard was <b>dockerized</b> and built to run
                    on <b>linux</b>, so that it could be run locally or deployed to the teams Azure infrastructure.
                    The frontend was developed using <b>React/Typescript</b> while the backend was built 
                    with <b>Django/Python</b>.
                    <br></br><br></br>

                    The scoreboard was capable of executing checks utilizing a wide range of protocols 
                    (<b>HTTPS, ICMP, RDP, LDAP</b>) on services to determine their current status.
                    Checks were run on a scheduled basis (via&nbsp;
                        <a href="https://docs.celeryq.dev/en/stable/index.html">Celery</a>
                    ), and their results determined team scores and kept track of any SLA Violations that occured.

                    <br></br><br></br>
                    <b>Why Python and Django?</b> The scoreboard needed a creative solution for an Admin panel that 
                    the team could easily add custom commands to, which we set up using the&nbsp;
                        <a href="https://docs.djangoproject.com/en/5.0/topics/forms/">forms</a>
                    &nbsp;library.  
                    Beyond this, python allowed us access to a bunch of libraries that assisted in developing checks around 
                    difficult protocols (such as Remote Desktop Protocol).
                    </p>
                    }>
                </ProjectDisplay>

                <ProjectDisplay 
                    image="../../images/hackucf.png" 
                    alt="test"
                    title="CyberSecurity Competition Scoreboard"
                    text="
                    The Collegiate Cyber Defense Club @ UCF
                    Tasked with creating the scoreboard that the team uses to practice for their
                    blahblah
                    ">
                </ProjectDisplay>

                <ProjectDisplay 
                    image="../../images/hackucf.png" 
                    alt="test"
                    title="CyberSecurity Competition Scoreboard"
                    text="
                    The Collegiate Cyber Defense Club @ UCF
                    Tasked with creating the scoreboard that the team uses to practice for their
                    blahblah
                    ">
                </ProjectDisplay>
            </div>

        </div>   
)
}