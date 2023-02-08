import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import NavbarComponent from "./components/NavbarComponent";
import TvShow from "./components/TvShows";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent />
        <Routes>
          <Route element={<TvShow />} path="/tvshows" />
          <Route element={<MainComponent />} path="/movies" />
          <Route element={<MovieDetails />} path="/details/:movie/:movieId" />
          <Route element={<MovieDetails />} path="/details" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
