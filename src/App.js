import { useSelector } from "react-redux";
import "./App.css";
import Contents from "./components/Contents/Contents";
import Intro from "./components/Intro/Intro";
import Menus from "./components/Menus/Menus";
import Navbar from "./components/Navbar/Navbar";
import MoviesDetail from "./components/MoviesDetail/MoviesDetail";

function App() {
  const { Movie_Detail } = useSelector((state) => state.infoMovies);
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Contents />
      <Menus />
      <MoviesDetail
        movies={Movie_Detail}
        showModal={Movie_Detail ? true : false}
      />
    </div>
  );
}

export default App;
