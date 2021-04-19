import React from "react";

const Icon = (props) => {
  return <use xlinkHref={`assets/sprite.svg#${props.icon}`} />;
};

export default Icon;
