import React from "react";

export const Tile = (props) => {
  const { object } = props;
  const keys = Object.keys(object).filter((key) => key !== "id");
  const content = keys.map((key) => {
    const value = object[key];
    return (
      <>
        <p class="tile-title">{key}</p>
        <p class="tile">{value}</p>
      </>
    );
  });
  return <div className="tile-container">{content}</div>;
};
