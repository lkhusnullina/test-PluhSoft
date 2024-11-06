import "./App.css";
import ButtonSwitch from "./components/ButtonSwicth";
import NavBar from "./components/NavBar";
import { AppRoutes } from "./routes";

function App() {
  return (
    <div className="container">
        <header className="header">
          <NavBar/>
          <ButtonSwitch></ButtonSwitch>
        </header>
        <AppRoutes/>
    </div>
  );
}

export default App;
