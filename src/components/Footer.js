import { IoLogoLinkedin } from "react-icons/io";

function Footer() {
  return (
    <footer
      id="footer"
      className="d-flex bottom flex-column flex-sm-row justify-content-between py-5 my border-top bg-secondary"
    >
      <div className="d-flex flex-column w-100">
        <div className="d-flex justify-content-between w-100">
          <div className="hover">
            <a href="https://www.linkedin.com/in/afshinaslani/">
              <IoLogoLinkedin />
            </a>
          </div>
          <div class="hover">
            <a href="mailto:aslani.john@gmail.com"> Mail Icon</a>
          </div>
          <div class="hover">
            <a href="https://github.com/johnaslani">GitHub Icon</a>
          </div>
          <div className="hover">
            <a href="mailto:aslani.john@gmail.com">Google Scholar</a>
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
