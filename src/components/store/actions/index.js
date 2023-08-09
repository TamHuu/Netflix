import axios from "axios";
import * as Types from "../types";

const API_KEY = "aaf9e3b32eeb836b77364f617a5a3f67";
const BASE_URL = "https://api.themoviedb.org/3";

// get api Netflix_Originals
export const getNetflixOriginals = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/tv?api_key=${API_KEY}&width_networks=213`
    );
    dispatch({
      type: Types.GET_NETFLIX_ORIGINALS,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Netflix Api error:", error);
  }
};
// get api  Trending_Movies
export const getTrendingMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-us`
    );
    dispatch({
      type: Types.GET_Trending_Movies,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Trending Movies Api error:", error);
  }
};
// get api  Top_Rated_Movies
export const getTopRatedMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-us`
    );
    dispatch({
      type: Types.GET_Top_Rated_Movies,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Top_Rated_Movies Api error:", error);
  }
};
// get api Action_Movies
export const getActionMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&width_genres=28`
    );
    dispatch({
      type: Types.GET_Action_Movies,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get ActionMovies Api error:", error);
  }
};

// get api  Comedy_Movies
export const getComedyMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&width_genres=35`
    );
    dispatch({
      type: Types.GET_Comedy_Movies,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Comedy movies Api error:", error);
  }
};

// get api Horror_Movies
export const getHorrorMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&width_genres=27`
    );
    dispatch({
      type: Types.GET_Horror_Movies,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Horror Movies Api error:", error);
  }
};

// get api Romance_Movies
export const getRomanceMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&width_genres=213`
    );
    dispatch({
      type: Types.GET_Romance_Movies,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Romance Movies Api error:", error);
  }
};

// get api Documentaries_Movies
export const getDocumentariesMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&width_genres=99`
    );
    dispatch({
      type: Types.GET_Documentaries_Movies,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Documentaries Movies Api error:", error);
  }
};
