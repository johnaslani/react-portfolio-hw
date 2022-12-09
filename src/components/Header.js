function Header({ sections, setCurrentPage }) {
  return (
    <header className="App-header">
      <h1 className="jumbotron">John Aslani</h1>
      <nav>
        <ul className="navLinks">
          {sections.map((section) => (
            <li
              className="navLink"
              key={section}
              onClick={() => setCurrentPage(section)}
            >
              {section}
            </li>
          ))}
          {/* <li>
            <a href="#aboutMe">About me</a>
          </li>
          <li>
            <a href="#myWork">Portfolio</a>
          </li>
          <li>
            <a href="#contactMe">Contact</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
