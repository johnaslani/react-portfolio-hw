import pic1 from "../assets/images/Portfolio.PNG";
import pic2 from "../assets/images/DigitalMarketing.PNG";
import pic3 from "../assets/images/WorkDayScheduler.gif";
import pic4 from "../assets/images/Quiz.gif";
import pic5 from "../assets/images/Scheduler.PNG";
import pic6 from "../assets/images/Weather_Dashboard.PNG";
import { AiFillGithub } from "react-icons/ai";
import Project from "./Project";

const projects = [
  {
    link: "https://johnaslani.github.io/Portfolio/",
    name: "Portfolio",
    repo: "https://github.com/johnaslani/Portfolio/",
    img: pic1,
    alt: "Portflio project",
  },
  {
    link: "https://johnaslani.github.io/Code-Refactor/",
    name: "Code Refractor",
    repo: "https://github.com/johnaslani/Code-Refactor/",
    img: pic2,
    alt: "Code Refractor project",
  },
  {
    link: "https://github.com/johnaslani/Work-Day-Scheduler",
    name: "Work Day Scheduler",
    repo: "https://github.com/johnaslani/Work-Day-Scheduler",
    img: pic3,
    alt: "Work Day Scheduler project",
  },
  {
    link: "https://johnaslani.github.io/Quiz/",
    name: "Quiz",
    repo: "https://github.com/johnaslani/Quiz",
    img: pic4,
    alt: "Quiz project",
  },
  {
    link: "https://star-chart7.herokuapp.com/",
    name: "Scheduler",
    repo: "https://github.com/TottoMoe/star-chart",
    img: pic5,
    alt: "Scheduler project",
  },
  {
    link: "https://johnaslani.github.io/Weather-Dashboard/",
    name: "Weather Dashboard",
    repo: "https://github.com/johnaslani/Weather-Dashboard",
    img: pic6,
    alt: "Weather Dashboard project",
  },
];

function Portfolio() {
  return (
    <section id="myWork">
      <h2>My Portfolio</h2>
      <div>
        <ul className="projects">
          {projects.map((project) => (
            <Project project={project} />
          ))}
          {/* <li className="project">
            <div>
              <a
                href="https://johnaslani.github.io/Portfolio/"
                className="projectLink"
              >
                Portflio
              </a>
              <a
                href="https://github.com/johnaslani/Portfolio/"
                className="projectLink"
              >
                <AiFillGithub />
              </a>
            </div>
            <a
              href="https://johnaslani.github.io/Portfolio/"
              className="projectLink"
            >
              <img src={pic1} alt="Portflio project" />
            </a>
          </li>
          <li>
            <strong>Second project: </strong>
            <a href="https://johnaslani.github.io/Code-Refactor/">
              <strong>Code Refractor</strong>
            </a>
            <img src={pic2} alt="Second project" />
            <a href="https://github.com/johnaslani/Code-Refactor/"></a>
          </li>
          <li>
            <strong>Third project: </strong>
            <a href="https://johnaslani.github.io/Work-Day-Scheduler/">
              <strong>Work Day Scheduler</strong>
            </a>
            <img
              src={pic3}
              // alt="Third project picture"
            />
            <a href="https://github.com/johnaslani/Work-Day-Scheduler"></a>
          </li>
          <li>
            <strong>Fourth project: </strong>
            <a href="https://johnaslani.github.io/Quiz/">
              <strong>Quiz</strong>
            </a>
            <img
              src={pic4}
              // alt="Fourth project picture"
            />
            <a href="https://github.com/johnaslani/Quiz"></a>
          </li>
          <li>
            <strong>Fifth project: </strong>
            <a href="https://johnaslani.github.io/README-Generator/">
              <strong>Coming soon!</strong>
            </a>
            <img src={pic5} alt="Fifth project picture" />
            <a href="https://johnaslani.github.io/README-Generator/"></a>
          </li>
          <li>
            <strong>Six project: </strong>
            <a href="https://johnaslani.github.io/Weather-Dashboard/">
              <strong>Weather Dashboard</strong>
            </a>
            <img
              src={pic6}
              // alt="Sixth project picture"
            />
            <a href="https://github.com/johnaslani/Weather-Dashboard"></a>
          </li> */}
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
