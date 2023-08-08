import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { SmoothHorizontalScrolling } from "../../utils";
const posterFilm = [
  "https://pic9.iqiyipic.com/image/20230724/9d/2c/a_100517780_m_601_en_m3_260_360.webp",
  "https://pic5.iqiyipic.com/image/20230727/61/74/a_100537757_m_601_en_260_360.webp",
  "https://pic3.iqiyipic.com/image/20201022/51/af/a_100426783_m_601_en_260_360.webp",
  "https://pic3.iqiyipic.com/image/20201022/51/af/a_100426783_m_601_en_260_360.webp",
  "https://pic3.iqiyipic.com/image/20201022/51/af/a_100426783_m_601_en_260_360.webp",
  "https://pic3.iqiyipic.com/image/20201022/51/af/a_100426783_m_601_en_260_360.webp",
  "https://pic9.iqiyipic.com/image/20230724/9d/2c/a_100517780_m_601_en_m3_260_360.webp",
  "https://pic9.iqiyipic.com/image/20230724/9d/2c/a_100517780_m_601_en_m3_260_360.webp",
  "https://pic9.iqiyipic.com/image/20230724/9d/2c/a_100517780_m_601_en_m3_260_360.webp",
];
function Contents(props) {
  const sliderRef = useRef();
  const movieRef = useRef();
  const [dragMove, setdragMove] = useState(0);
  const [dragDown, setdragDown] = useState(0);
  const [isDrag, setisDrag] = useState(false);

  useEffect(() => {
    if (isDrag) {
      if (dragMove < dragDown) handleScrollRight();
      if (dragMove > dragDown) handleScrollLeft();
    }
  }, [dragDown, dragMove, isDrag]);
  const onDragStart = (e) => {
    setisDrag(true);
    setdragDown(e.screenX);
  };
  const onDragEnd = () => {
    setisDrag(false);
  };
  const onDragEnter = (e) => {
    setdragMove(e.screenX);
  };
  const handleScrollRight = () => {
    const maxScrollLeft =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if (sliderRef.current.scrollLeft < maxScrollLeft) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };

  const handleScrollLeft = () => {
    if (sliderRef.current.scrollLeft > 0) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        -movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };
  return (
    <MoviesRowContainer>
      <h1 className="heading">NetFlix Originals</h1>
      <MoviesSlider
        ref={sliderRef}
        draggable={true}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
      >
        {" "}
        {posterFilm.map((poster, index) => (
          <div
            key={index}
            className="movieItem"
            ref={movieRef}
            draggable={false}
          >
            <img src={poster} alt="" draggable={false} />
            <div className="movieName">Movie Name</div>
          </div>
        ))}
      </MoviesSlider>
      <div className="btnLeft" onClick={handleScrollLeft}>
        <FiChevronLeft />
      </div>
      <div className="btnRight" onClick={handleScrollRight}>
        <FiChevronRight />
      </div>
    </MoviesRowContainer>
  );
}

export default Contents;
const MoviesRowContainer = styled.div`
  background-color: var(--color-background);
  color: var(--color-white);
  padding: 20px 20px 0;
  position: relative;
  width: 100%;
  height: 100%;

  .heading {
    font-size: 18px;
    user-select: none;
  }
  .btnLeft {
    position: absolute;
    top: 50%;
    left: 30px;
    z-index: 20;
    transfor-origin: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100px;
    width: 50px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    transform: translateY(-20%);
    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
    &:hover svg {
      opacity: 1;
      transform: scale(1.2);
    }
    svg {
      opacity: 0.7;
      font-size: 50px;
      transition: all 0.3s linear;
    }
  }
  .btnRight {
    position: absolute;
    top: 50%;
    right: 30px;
    z-index: 20;
    transfor-origin: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100px;
    width: 50px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    transform: translateY(-20%);
    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
    &:hover svg {
      opacity: 1;
      transform: scale(1.2);
    }
    svg {
      opacity: 0.7;
      font-size: 50px;
      transition: all 0.3s linear;
    }
  }
`;

const MoviesSlider = styled.div`
  display: grid;
  gap: 6px;
  grid-template-columns: repeat(${posterFilm.length}, 300px);
  transition: all 0.3s linear;
  user-select: none;
  overflow-y: hidden;
  overflow-x: auto;
  overflow: hidden;
  padding-top: 28px;
  padding-bottom: 28px;
  scroll-behavior: smooth;

  &:hover .movieItem {
    opacity: 0.5;
  }

  .movieItem {
    transform: scale(1);
    max-width: 400px;
    max-height: 500px;
    width: 100%;
    height: 100%;
    transition: all 0.3s linear;
    user-select: none;
    overflow: hidden;
    border-radius: 6px;
    transform:center left
    position: relative;

    &:hover {
      transform: scale(1.1);
      z-index: 10;
      opacity: 1;
    }
    img{
        width:100%;
        height:100%;
        object-fit:cover
    }
    .movieName{
        position:absolute;
        left:0;
        right:0;
        bottom:0;
        padding:4px;
        text-align:center;
        font-size:14px;
        background-color:rgba(0,0,0,0.65)
    }
  }
`;
