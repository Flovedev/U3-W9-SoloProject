import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainComponent from "./components/MainComponent";
import NavbarComponent from "./components/NavbarComponent";
import HeadComponent from "./components/HeadComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HeadComponent />
      <MainComponent />
    </div>
  );
}

export default App;
