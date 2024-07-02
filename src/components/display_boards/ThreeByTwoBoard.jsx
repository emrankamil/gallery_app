import React from "react";
import styles from "./ThreeByTwoBoard.module.css";

const ThreeByTwoBoard = ({ images }) => {
  return (
    <div className={styles.board}>
      {images.map((image, index) => (
        <div key={index} className={styles.boardItem}>
          <img src={image} alt={`img-${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ThreeByTwoBoard;
