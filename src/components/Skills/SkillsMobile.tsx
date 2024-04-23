import { Splide, SplideSlide } from '@splidejs/react-splide';
import "./SkillsMobile.css";

export default function SkillsMobile() {
    return (
        <div>

            <Splide className="skillsplide">
                <SplideSlide>
                    <img src="/skillicons/pythonicon.png" alt="linkedin"/>
                    <p>Python + Django to build the backend of full stack applications.</p>
                </SplideSlide>
                <SplideSlide>
                    <img src="/skillicons/tsicon.png" alt="linkedin"/>
                    <p>TypeScript to automate api testing and build an interactive frontend.</p>
                </SplideSlide>
                <SplideSlide>
                    <img src="/skillicons/reacticon.png" alt="linkedin"/>
                    <p>React to build a complex component-based UI... </p>
                    <p>And spend 2 hours making a cool button.</p>
                </SplideSlide>
                <SplideSlide>
                    <img src="/skillicons/javaicon.png" alt="linkedin"/>
                    <p>Java to develop applications that manage data and need to run on everything.</p>
                </SplideSlide>
                <SplideSlide>
                    <img src="/skillicons/jiraicon.png" alt="linkedin"/>
                    <p>Jira through 5+ Years of working in an Agile envrionment.</p>
                </SplideSlide>
                <SplideSlide>
                    <img src="/skillicons/nodejsicon.png" alt="linkedin"/>
                    <p>NodeJS to develop a backend server for a full stack application.</p>
                </SplideSlide>
                <SplideSlide>
                    <img src="/skillicons/angularicon.png" alt="linkedin"/>
                    <p>Angular + Storybook to build UI components.</p>
                </SplideSlide>
                <SplideSlide>
                    <img src="/contacticons/githubicon.png" alt="linkedin"/>
                    <p>Source Control experience through working within large existing codebases.</p>
                </SplideSlide>
                <SplideSlide>
                    <img src="/skillicons/mysqlicon.png" alt="linkedin"/>
                    <p>Who doesn't love writing SQL queries... right?</p>
                </SplideSlide>
            </Splide>
        </div>
    )
}