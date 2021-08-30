import React from "react";
import PropTypes from "prop-types";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  const { array } = props;
  return (
    <div>
      {array.map((object) => {
        return <Tile key={object.id} object={object}></Tile>;
      })}
    </div>
  );
};

TileList.propTypes = {
  array: PropTypes.array.isRequired,
};
