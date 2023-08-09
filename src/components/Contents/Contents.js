import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviesRow from "./MoviesRow";
import * as ACTIONS from "../store/actions";

function Contents() {
  const dispatch = useDispatch();
  const {
    NetflixOriginals,
    Trending_Movies,
    Top_Rated_Movies,
    Action_Movies,
    Comedy_Movies,
    Horror_Movies,
    Romance_Movies,
    Documentaries_Movies,
  } = useSelector((state) => state.infoMovies);

  useEffect(() => {
    dispatch(ACTIONS.getNetflixOriginals());
    dispatch(ACTIONS.getTrendingMovies());
    dispatch(ACTIONS.getTopRatedMovies());
    dispatch(ACTIONS.getActionMovies());
    dispatch(ACTIONS.getComedyMovies());
    dispatch(ACTIONS.getHorrorMovies());
    dispatch(ACTIONS.getRomanceMovies());
    dispatch(ACTIONS.getDocumentariesMovies());
  }, [dispatch]);

  return (
    <div>
      <MoviesRow
        movies={NetflixOriginals}
        title="NetFlix Originals"
        isNetFlix={true}
      />{" "}
      <MoviesRow movies={Trending_Movies} title="Trending Movies" />
      <MoviesRow movies={Top_Rated_Movies} title="Top Rated Movies" />
      <MoviesRow movies={Action_Movies} title="Action Movies" />
      <MoviesRow movies={Comedy_Movies} title="Comedy Movies" />
      <MoviesRow movies={Horror_Movies} title="Horror Movies" />
      <MoviesRow movies={Romance_Movies} title="Romance Movies" />
      <MoviesRow movies={Documentaries_Movies} title="Documentaries Movies" />
    </div>
  );
}

export default Contents;
