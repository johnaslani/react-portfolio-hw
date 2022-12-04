function Header({ sections, setCurrentPage }) {
  return (
    <header className="App-header">
      <h1 className="jumbotron">John Aslani</h1>
      <h2 className="myname heading name" id="title"></h2>
      <figure>
        <img src="./assets/images/image-1.jpg" alt="John's picture" />
        <img src="./assets/afshin.jpg" id="picture" alt="John's picture" />
        <figcaption>John Aslani</figcaption>
      </figure>
      <nav>
        <ul>
          {sections.map((section) => (
            <li key={section} onClick={() => setCurrentPage(section)}>
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
