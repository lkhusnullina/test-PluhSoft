import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ApplicationForm from "./pages/ApplicationForm";
import About from "./pages/About";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
    
    <Router>
    <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/application-form" element={<ApplicationForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
