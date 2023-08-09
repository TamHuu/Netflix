import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviesRow from "./MoviesRow";
import { getNetflixOriginals } from "../store/actions";

function Contents() {
  const dispatch = useDispatch();
  const { NetflixOriginals } = useSelector((state) => state.infoMovies);

  useEffect(() => {
    dispatch(getNetflixOriginals());
  }, [dispatch]);
  console.log("value nextflix", NetflixOriginals);
  return (
    <div>
      <MoviesRow
        movies={NetflixOriginals}
        title="NetFlix Originals"
        isNetFlix={true}
      />{" "}
      <MoviesRow movies={NetflixOriginals} title="Trending Movies" />
      <MoviesRow movies={NetflixOriginals} title="Top Rated Movies" />
      <MoviesRow movies={NetflixOriginals} title="Action Movies" />
      <MoviesRow movies={NetflixOriginals} title="Comedy Movies" />
      <MoviesRow movies={NetflixOriginals} title="Horror Movies" />
      <MoviesRow movies={NetflixOriginals} title="Romance Movies" />
      <MoviesRow movies={NetflixOriginals} title="Documentaries Movies" />
    </div>
  );
}

export default Contents;
