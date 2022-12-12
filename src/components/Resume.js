import resume from "../assets/docs/Resume.pdf";
import AgileMBA from "../assets/docs/Agile_MBA.pdf";

function Resume() {
  return (
    <section id="resume">
      <h2 className="resume">Full Stack Development Proficiencies</h2>
      <br></br>
      <h3>Front-End</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
        <li>Bulma</li>
      </ul>
      <h3>Back-End</h3>
      <ul>
        <li>API</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>NoSQL, MOnGoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
        <li>OOP</li>
        <li>MVC</li>
        <li>ODM</li>
      </ul>
      <h2 className="resume">Resume and Certifications</h2>
      <ul>
        <li>
          <a href={resume} download="Resume.pdf">
            <strong>Resume</strong>
          </a>
        </li>
        <li>
          <a href="https://bcert.me/bc/html/show-badge.html?b=cqejyyfd">
            <strong>Certified Scrum Master</strong>
          </a>
        </li>
        <li>
          <a href={AgileMBA}>
            <strong>Agile MBA</strong>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Resume;
