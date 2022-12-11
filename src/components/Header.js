function Header({ sections, currentPage, setCurrentPage }) {
  return (
    <header className="App-header">
      <h1 className="jumbotron">John Aslani</h1>
      <nav>
        <ul className="navLinks">
          {sections.map((section) => (
            <li
              className= {currentPage===section?"navLinkActive":"navLink"}
              key={section}
              onClick={() => setCurrentPage(section)}
            >
              {section}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
