import React from "react";
import { RandomColor } from "../../utils";
import { Link } from "react-scroll";
function MenuItem(props) {
  const { name, Icon, to } = props;
  return (
    <Link
      className="subMenu"
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      activeClass="active"
    >
      <Icon className="icon" style={{ color: RandomColor(1) }} />
      <span className="hidden">{name}</span>
    </Link>
  );
}

export default MenuItem;
