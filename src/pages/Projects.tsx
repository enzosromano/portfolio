import ProjectDisplay from "../components/ProjectDisplay/ProjectDisplay"

export default function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <br></br><br></br><br></br><br></br>

            <div className="projects">
                <ProjectDisplay 
                    image="images/hackucf.png" 
                    alt="hack ucf logo"
                    title="CyberSecurity Competition Scoreboard"
                    text={<p>
                    Tasked with creating the scoreboard that the <b>Collegiate Cyber Defense Club @ UCF </b> 
                    uses to practice for their competitions. The scoreboard was <b>dockerized</b> and built to run
                    on <b>linux</b>, so that it could be run locally or deployed to the teams Azure infrastructure.
                    The frontend was developed using <b>React/Typescript</b> while the backend was built 
                    with <b>Django/Python</b>.
                    <br></br><br></br>

                    The scoreboard was capable of executing checks utilizing a wide range of protocols 
                    (<b>HTTPS, ICMP, RDP, LDAP, etc.</b>) on services to determine their current status.
                    Checks were run on a scheduled basis (via&nbsp;
                        <a href="https://docs.celeryq.dev/en/stable/index.html" target="_blank" rel="noreferrer">Celery</a>
                    ), and their results determined team scores and kept track of any SLA Violations that occured.

                    <br></br><br></br>
                    <b>Why Python and Django?</b> The scoreboard needed a creative solution for an Admin panel that 
                    the team could easily add custom commands to, which we set up using the&nbsp;
                        <a href="https://docs.djangoproject.com/en/5.0/topics/forms/" target="_blank" rel="noreferrer">forms</a>
                    &nbsp;library.  
                    Beyond this, python allowed us access to a bunch of libraries that assisted in developing checks around 
                    difficult protocols.
                    </p>
                    }>
                </ProjectDisplay>

                <ProjectDisplay 
                    image="images/QATool.jpg" 
                    alt="image of QATool user interface"
                    title="QATool - WIP"
                    text={<p>
                        Currently developing a Python application that can be utilized by QA to automate repetitive daily tasks.
                        Scripts are being developed with Python+Selenium, and are predominantly functions or tasks to be executed, and less  
                        an "evaluation" of frontends (as Selenium is typically used for). I have added a simple GUI through&nbsp;
                            <a href="https://docs.python.org/3/library/tkinter.html" target="_blank" rel="noreferrer">tkinter</a>
                        &nbsp;to minimize the need of any other libraries such as flask to interact with Python code. My end goal is for this 
                        tool to be extremely functional and low maintenance, so setting up a non python based frontend would not acheive that goal.  
                        <br></br><br></br>
    
                        The project is currently in its very early stages but is already capable of automating some basic tasks within
                        the companies staging environment, reducing the time it takes to complete certain daily processes by 50% or more.
                        It currently excels in setting up "scenario based testing", where you have a handful of different account statuses or
                        other variables that you test the same singular action upon in order to validate edge cases.

                        <br></br><br></br>
                        I have plans to make a "public" version of this application with the GUI layout and in depth documentation to
                        allow others to develop a similar tool, but without all my actual tests.
    
                        <br></br><br></br>
                        <b>Why not some enterprise software instead?</b> It isnt always practical to have some enterprise level automation solution
                        within a smaller company due to time or cost dedications. On top of that, it may simply just be too much of a lift. With something
                        like this, members of QA can explore automation possibilities without worrying about "breaking" any company tools,
                        and it is about as customizable as an automation tool can be.
                        </p>
                        }>
                </ProjectDisplay>

                <ProjectDisplay 
                    image="images/construction.jpg"
                    alt="test"
                    title="Site Under Construction"
                    text="
                    Working on it!
                    ">
                </ProjectDisplay>
            </div>

        </div>   
)
}