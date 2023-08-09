import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviesRow from "./MoviesRow";
import * as ACTIONS from "../store/actions";
import { FaArrowAltCircleUp } from "react-icons/fa";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import { useScrollY } from "../hooks";
function Contents() {
  const ScrollY = useScrollY();
  const ScrollToTop = () => {
    scroll.scrollToTop();
  };
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
        idSection="Netflix"
      />{" "}
      <MoviesRow
        movies={Trending_Movies}
        title="Trending Movies"
        idSection="Trending"
      />
      <MoviesRow
        movies={Top_Rated_Movies}
        title="Top Rated Movies"
        idSection="Top rated"
      />
      <MoviesRow
        movies={Action_Movies}
        title="Action Movies"
        idSection="Actions Movies"
      />
      <MoviesRow
        movies={Comedy_Movies}
        title="Comedy Movies"
        idSection="Comedy Movies"
      />
      <MoviesRow
        movies={Horror_Movies}
        title="Horror Movies"
        idSection="Horror Movies"
      />
      <MoviesRow
        movies={Romance_Movies}
        title="Romance Movies"
        idSection="Romance Movies"
      />
      <MoviesRow
        movies={Documentaries_Movies}
        title="Documentaries Movies"
        idSection="Documentaries"
      />
      <GoToTop
        style={{
          visibility: `${ScrollY > 600 ? "visible" : "hidden"}`,
        }}
        onClick={() => ScrollToTop()}
      >
        <FaArrowAltCircleUp />
      </GoToTop>
    </div>
  );
}

export default Contents;
const GoToTop = styled.div`
  position: fixed;
  z-index: 10;
  right: 70px;
  bottom: 50px;
  font-size: 50px;
  color: rgba(255, 255, 255, 0.4);
  transition: all 0.3s linear;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
  @media screen and (max-width: 600px) {
    right: 40px;
  }
`;
