import * as Types from "../types";
const reducerMoviesinitialState = {
  NetflixOriginals: null,
  Trending_Movies: null,
  Top_Rated_Movies: null,
  Action_Movies: null,
  Comedy_Movies: null,
  Horror_Movies: null,
  Romance_Movies: null,
  Documentaries_Movies: null,
};

const reducerMovies = (state = reducerMoviesinitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.GET_NETFLIX_ORIGINALS:
      console.log("payload Netflix original", payload);
      return { ...state, NetflixOriginals: payload };
    case Types.GET_Trending_Movies:
      console.log("payload GET_Trending_Movies", payload);
      return { ...state, Trending_Movies: payload };
    case Types.GET_Top_Rated_Movies:
      console.log("payload Top_Rated_Movies", payload);
      return { ...state, Top_Rated_Movies: payload };
    case Types.GET_Action_Movies:
      console.log("payload Action_Movies", payload);
      return { ...state, Action_Movies: payload };
    case Types.GET_Comedy_Movies:
      console.log("payload omedy_Movies", payload);
      return { ...state, Comedy_Movies: payload };
    case Types.GET_Horror_Movies:
      console.log("payload Horror_Movies", payload);
      return { ...state, Horror_Movies: payload };
    case Types.GET_Romance_Movies:
      console.log("payload Romance_MoviesMovies", payload);
      return { ...state, Romance_Movies: payload };
    case Types.GET_Documentaries_Movies:
      console.log("payload GET_Documentaries_Movies", payload);
      return { ...state, Documentaries_Movies: payload };

    default:
      return state;
  }
};
export default reducerMovies;
