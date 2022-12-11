import { AiFillGithub } from "react-icons/ai";

function Project({project}) {
    return (
        <li className="project">
        <div>
          <a href={project.link} className="projectLink">
            {project.name}
          </a>
          <a href={project.repo} className="projectLink">
            <AiFillGithub />
          </a>
        </div>
        <a href={project.link} className="projectLink">
          <img src={project.img} alt={project.alt} />
        </a>
      </li>
    )
}

export default Project;