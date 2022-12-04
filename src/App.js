import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { useState } from "react";

const sections = ["About", "Work", "Contact", "Resume"];

function App() {
  const [currentPage, setCurrentPage] = useState("About");
  console.log(currentPage);
  return (
    <div className="App">
      <Header sections={sections} setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === 'About'? <About /> : <></>} 
        { currentPage === 'Work'? <Work /> : <></>} 
        { currentPage === 'Contact'? <Contact /> : <></>}
        {/* <Resume /> */}
      </main>
      <footer>
        <p>© 2022 by John Aslani</p>
      </footer>
    </div>
  );
}

export default App;

{
  /* Bio: I am Sr. Medical Data Scientists at Lab 126, Amazon. I love to expand debth of my technical skills. This is why I joined coding bootcamp. */
}
