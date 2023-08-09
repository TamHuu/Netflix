import React from "react";
import styled from "styled-components";
import { FaStar, FaHotjar } from "react-icons/fa";
import { SiNetflix } from "react-icons/si";
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
      <MenuItemne name="Netflix" Icon={SiNetflix} to="Netflix" />
      <MenuItemne name="Trending" Icon={FaHotjar} to="Trending" />
      <MenuItemne name="Top rated" Icon={FaStar} to="Top rated" />
      <MenuItemne
        name="Actions Movies"
        Icon={GiNinjaHeroicStance}
        to="Actions Movies"
      />
      <MenuItemne
        name="Comedy Movies"
        Icon={MdTheaterComedy}
        to="Comedy Movies"
      />
      <MenuItemne name="Horror Movies" Icon={GiGhost} to="Horror Movies" />
      <MenuItemne
        name="Romance Movies"
        Icon={GiRomanToga}
        to="Romance Movies"
      />
      <MenuItemne
        name="Documentaries"
        Icon={GiBandageRoll}
        to="Documentaries"
      />
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
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
  display: flex;
  flex-direction: column;
  transform-origin: left center;
  transition: all 0.3s linear;
  overflow: hidden;

  &:hover {
    width: 180px;
    background: rgba(0, 0, 0, 0.5);
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
