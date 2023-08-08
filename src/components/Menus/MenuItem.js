import React from "react";
import { RandomColor } from "../../utils";
function MenuItem(props) {
  const { name, Icon } = props;
  return (
    <div className="subMenu">
      <Icon className="icon" style={{ color: RandomColor(1) }} />
      <span className="hidden">{name}</span>
    </div>
  );
}

export default MenuItem;
