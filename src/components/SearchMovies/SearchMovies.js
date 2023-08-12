import React from "react";
import styled from "styled-components";
import { useViewport } from "../hooks";
const moviesList = [
  "https://image.tmdb.org/t/p/original//lgyFuoXs7GvKJN0mNm7z7OMOFuZ.jpg",
  "https://image.tmdb.org/t/p/original//lgyFuoXs7GvKJN0mNm7z7OMOFuZ.jpg",
  "https://image.tmdb.org/t/p/original//lgyFuoXs7GvKJN0mNm7z7OMOFuZ.jpg",
  "https://image.tmdb.org/t/p/original//lgyFuoXs7GvKJN0mNm7z7OMOFuZ.jpg",
];
function SearchMovies(props) {
  const [windowWidth] = useViewport();
  return (
    <SearchPane>
      {moviesList && moviesList.length > 0 ? (
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
          {moviesList.map((movie, index) => (
            <div className="movieItem" key={index}>
              <img src={movie} alt="film" />
              <span className="name_film">Movie Name</span>
            </div>
          ))}
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
