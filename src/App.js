import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainComponent from "./components/MainComponent";
import NavbarComponent from "./components/NavbarComponent";
import JumbotronComponent from "./components/JumbotronComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <JumbotronComponent />
      <MainComponent />
    </div>
  );
}

export default App;
