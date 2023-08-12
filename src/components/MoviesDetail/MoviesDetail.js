import React from "react";
import styled, { keyframes } from "styled-components";
import { setMoviesDetail } from "../store/actions";
import { useDispatch } from "react-redux";
import moment from "moment";
function MoviesDetail(props) {
  const { showModal, movies } = props;
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(setMoviesDetail(null));
  };
  return (
    <MoviesDetailModal>
      <div
        onClick={handleCloseModal}
        className={`backdrop ${showModal ? "showBackdrop" : "hideBackdrop"}`}
      ></div>
      <div
        className={`modal ${showModal ? "showModal" : "hideModal"}`}
        style={
          movies
            ? {
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                  movies.backdrop_path || movies.poster_path
                })`,
                backgroundSize: "cover",
              }
            : {}
        }
      >
        <div className="container">
          <div className="movieInfo">
            <h1 className="movieTitle">
              {movies && (movies.title || movies.name)}
            </h1>
            <p className="statistical">
              <span className="rating">
                Rating: {movies && movies.vote_average * 10}%
              </span>
              <span className="popularity">
                Popularity: {movies && movies.popularity}
              </span>
            </p>
            <p className="releaseDate">
              Release Date:{" "}
              {movies &&
                (moment(movies.release_date).format("DD/MM/YYYY") ||
                  moment(movies.first_air_date).format("DD/MM/YYYY"))}
            </p>
            <p className="runtime">
              Runtime: {movies && (movies.runtime || movies.episode_run_time)}
            </p>
            <p className="overview">{movies && movies.overview}</p>
          </div>
        </div>
      </div>
    </MoviesDetailModal>
  );
}

export default MoviesDetail;

const fadeIn = keyframes`
0%:{background:rgba(0,0,0,0)};
100%:{background:rgba(0,0,0,0.6)}
`;
const MoviesDetailModal = styled.div`
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 200;
    background-color: rgba(0, 0, 0, 0.6);
    animation: ${fadeIn} 1s cubic-bezier(0.17, 0.85, 0.45, 1) forwards;
  }
  .showBackdrop {
    display: block;
  }
  .hideBackdrop {
    display: none;
  }

  .showModal {
    top: 25%;
    opacity: 1;
    left: 0;
    visibility: visible;
    transition: 0.3s ease-in-out;
  }
  .hideModal {
    top: 0;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s ease-in-out;
  }
  .modal {
    position: fixed;

    top: 25%;
    left: 0;
    height: 60%;
    z-index: 300;
    margin: 0 auto;
    color: var(--color-white);
    box-shadow: 0 15px 40px rgba(var(--color-dark), 0.2);
    transition: all 0.3s ease;
    width: 100%;

    @media screen and (max-width: 1184px) {
      height: 70%;
    }

    @media screen and (max-width: 600px) {
      height: 80%;
    }

    .container {
      position: relative;
      width: 70%;
      height: 100%;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.94) 60%, transparent);

      @media screen and (max-width: 1184px) {
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.94) 40%,
          rgba(0, 0, 0, 0.733),
          transparent
        );
        width: 88%;
      }

      @media screen and (max-width: 980px) {
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.95) 50%,
          transparent
        );
        width: 100%;
      }

      @media screen and (max-width: 600px) {
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.88) 60%,
          transparent
        );
      }
      .movieInfo {
        width: 65%;
        height: 100%;
        padding-top: 30px;

        @media screen and (max-width: 600px) {
          font-size: 16px;
          width: 80%;
        }

        .statistical {
          margin-top: 20px;
          display: flex;

          .rating {
            color: var(--color-green);
          }

          .popularity {
            color: yellow;
            margin-left: 12px;
          }
        }
        .releaseDate,
        .runtime {
          margin-top: 12px;
        }
        .overview {
          margin-top: 20px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.4;
          font-size: 18px;

          @media screen and (max-width: 600px) {
            font-size: 14px;
          }
        }
      }
    }
  }
`;
