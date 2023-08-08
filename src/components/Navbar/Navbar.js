import React from "react";
import img from "../../asset/img/logo.png";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";

function Navbar(props) {
  return (
    <Navigation>
      <div className="navContainer">
        <div className="logo">
          <img src={img} alt="thumb" />
        </div>

        <div className="navSearch">
          <MdSearch className="iconSearch" />
          <input type="text" placeholder="search film or actors" />
        </div>
      </div>
    </Navigation>
  );
}

export default Navbar;
const Navigation = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  transition-timing-function:ease-in;
  transition: all 1s; 

  .navContainer{
    background-color:var(--color-background);
    display:flex;
    justify-content:flex-start;
    flex-direction:row;
    height:100%;
    align-items:center;
    @media only screen and (max-width:600px){
      flex-direction:column;
    }
    .logo{
      width:120px;
      cursor:pointer;
      img{
        width:100%
      }
    }
    .navSearch{
      color:var(--color-white);
      padding-right:20px;
      display:flex;
      justify-content:flex-end;
&:hover .iconSearch{
  color:var(--color-white);
}
      .iconSearch{
        width:20px;
        height:20px;
        cursor:pointer;
        transform:translateX(24px) translateY(10px);
        color:#bbb
      }
      input{
font-size:14px;
border:1px solid #fff;
color:white;
outline:none;
width:0;
padding:10px;
cursor:pointer;
opacity:0;
background:var( --color-background);
transition: width 0.5s;

&:focus{
  padding-left:26px;
  width:300px;
  cursor:text;
  opacity:1;
  border-radius:4px
}
      }
    }
  }
 
   }   
`;
