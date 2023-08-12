import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Contents from "../components/Contents/Contents";
import MoviesDetail from "../components/MoviesDetail/MoviesDetail";
import Menus from "../components/Menus/Menus";
import Intro from "../components/Intro/Intro";
function Home() {
  const { Movie_Detail } = useSelector((state) => state.infoMovies);
  const [isShowMovieDetail, setIsShowMovieDetail] = useState(false);

  useEffect(() => {
    setIsShowMovieDetail(Movie_Detail ? true : false);
  }, [Movie_Detail]);
  return (
    <div>
      <Intro />
      <Contents />
      <Menus />
      <MoviesDetail movies={Movie_Detail} showModal={isShowMovieDetail} />
    </div>
  );
}

export default Home;
