import React from "react";
import PropTypes from "prop-types";
import "./ThreeByTwoBoard.css";

const ThreeByTwoBoard = ({ images }) => {
  return (
    <div className="board">
      {Object.values(images).map((image, index) => (
        <div key={index} className="board-item">
          <img src={image} alt={`img-${index}`} />
        </div>
      ))}
    </div>
  );
};

ThreeByTwoBoard.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ThreeByTwoBoard;
