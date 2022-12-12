import { IoLogoLinkedin } from "react-icons/io";
import { SiGooglescholar } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <footer
      id="footer"
      className="d-flex bottom flex-column flex-sm-row justify-content-between py-5 my border-top"
    >
      <div className="d-flex flex-column w-100">
        <div className="d-flex justify-content-between w-100">
          <div className="hover">
            <a
              href="https://www.linkedin.com/in/afshinaslani/"
              className="footerLink"
            >
              <IoLogoLinkedin /> Linkedin
            </a>
          </div>
          <div className="hover">
            <a href="https://github.com/johnaslani" className="footerLink">
              <AiFillGithub /> GitHub
            </a>
          </div>
          <div className="hover">
            <a
              href="https://scholar.google.com/citations?hl=en&user=wZqj-scAAAAJ"
              className="footerLink"
            >
              <SiGooglescholar /> Google Scholar
            </a>
          </div>
          <div className="hover">
            <a href="mailto:aslani.john@gmail.com" className="footerLink">
              <AiOutlineMail /> Email
            </a>
          </div>
        </div>
        {/* <br><p class="text-center card-text">Phone: 734-531-8171 Email: aslani.john@gmail.com</p>
            </br> */}
        <p>© 2022 by John Aslani</p>
      </div>
    </footer>
  );
}

export default Footer;
