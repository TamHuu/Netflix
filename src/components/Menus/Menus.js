import React from "react";
import styled from "styled-components";
import { FaHome, FaStar, FaHotjar } from "react-icons/fa";
import {
  GiNinjaHeroicStance,
  GiGhost,
  GiRomanToga,
  GiBandageRoll,
} from "react-icons/gi";
import { MdTheaterComedy } from "react-icons/md";
import MenuItemne from "./MenuItem";

function Menus() {
  return (
    <MenusPane>
      <MenuItemne name="Home" Icon={FaHome} />
      <MenuItemne name="Trending" Icon={FaHotjar} />
      <MenuItemne name="Top rated" Icon={FaStar} />
      <MenuItemne name="Actions Movies" Icon={GiNinjaHeroicStance} />
      <MenuItemne name="Comedy Movies" Icon={MdTheaterComedy} />
      <MenuItemne name="Horror Movies" Icon={GiGhost} />
      <MenuItemne name="Romance Movies" Icon={GiRomanToga} />
      <MenuItemne name="Documentaries" Icon={GiBandageRoll} />
    </MenusPane>
  );
}

export default Menus;
const MenusPane = styled.div`
  position: fixed;
  left: 0;
  top: 20%;
  width:46px;
  padding: 4px 0;
  background: rgba(220, 220, 220, 0.3);
  z-index: 100;
  display: flex;
  flex-direction: column;
  transform-origin: left center;
  transition: all 0.3s linear;
  overflow: hidden;

  &:hover {
    width: 180px;
    background: rgba(220, 220, 220, 0.5);
  }


  .subMenu {
    display: flex;
    align-items: center;
    width: max-content;
    margin-left: 2px;
    padding: 4px 6px;
    cursor: pointer;

    .icon {
        font-size: 30px;
        margin-right: 8px;
      }
    span {
        font-size: 16px;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.6);
       
        }
    }
  }
`;
