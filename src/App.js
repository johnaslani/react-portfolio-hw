import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import { useState } from "react";
import Footer from "./components/Footer";

const sections = ["About Me", "Contact", "Portfolio", "Resume"];

function App() {
  const [currentPage, setCurrentPage] = useState("About Me");
  console.log(currentPage);
  return (
    <div className="App">
      <Header sections={sections} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === "About Me" ? <About /> : <></>}
        {currentPage === "Contact" ? <Contact /> : <></>}
        {currentPage === "Portfolio" ? <Portfolio /> : <></>}
        {currentPage === "Resume" ? <Resume /> : <></>}
        {/* <Resume /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
