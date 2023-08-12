import React, { useEffect } from "react";
import styled from "styled-components";
import { useViewport } from "../hooks";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSearchMovies } from "../store/actions";

const useQuery = () => new URLSearchParams(useLocation().search);
function SearchMovies(props) {
  const [windowWidth] = useViewport();
  const dispatch = useDispatch();
  const { Search_Movie } = useSelector((state) => state.infoMovies);
  const keywords = useQuery().get("keywords");
  console.log(">> search vaolue", Search_Movie);
  useEffect(() => {
    if (keywords) dispatch(getSearchMovies(keywords));
  }, [keywords, dispatch]);
  return (
    <SearchPane>
      {Search_Movie && Search_Movie.length > 0 ? (
        <div
          className="searchContent"
          style={{
            gridTemplateColumns: `repeat(${
              windowWidth > 1200
                ? 5
                : windowWidth > 992
                ? 4
                : windowWidth > 768
                ? 3
                : windowWidth > 600
                ? 2
                : 1
            },auto)`,
          }}
        >
          {Search_Movie.map((movie, index) => {
            if (movie.backdrop_path !== null && movie.media_type !== "person") {
              const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
              return (
                <div className="movieItem" key={index}>
                  <img src={imageUrl} alt="film" />
                  <span className="name_film">
                    {" "}
                    {movie.title || movie.name}
                  </span>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <NotFound>
          <h1>You search not found</h1>
        </NotFound>
      )}
    </SearchPane>
  );
}

export default SearchMovies;
const SearchPane = styled.div`
  width: 100%;
  min-height: 92vh;
  padding-top: 80px;
  background: var(--color-background);
  transition: all 0.3s linear;

  .searchContent {
    padding: 40px 60px;
    display: grid;
    gap: 8px;

    &:hover movieItem {
      opacity: 0.7;
    }

    .movieItem {
      position: relative;
      max-width: 400px;
      max-height: 200px;
      width: 100%;
      height: 100%;
      border-radius: 12px;
      margin: 20px 0;
      overflow: hidden;
      transform: scale(1);
      transition: all 0.3s linear;

      &:hover {
        transform: scale(1.2);
        z-index: 10;
        opacity: 1;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .name_film {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 4px;
        text-align: center;
        font-size: 14px;
        background-color: rgba(0, 0, 0, 0.65);
        color: var(--color-white);
      }
    }
  }
`;
const NotFound = styled.div`
  padding: 5 rem 8rem;
  color: var(--color-white);
`;
