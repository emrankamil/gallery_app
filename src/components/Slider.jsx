import { useState } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Slider = ({ imageUrls }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)

  const showNext = () => {
    console.log(imageIndex);
    if (imageIndex === imageUrls.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  const showPrev = () => {
    if (imageIndex === 0) {
      setImageIndex(imageUrls.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };

  return (
    <Box width="100%" height="100vh" position="relative">
      <Box width="100%" height="100%" display="flex" overflow="hidden">
        {imageUrls.map((url, key) => (
          <img
            src={url}
            key={key}
            className="img-slider-img"
            alt="slider"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </Box>
      <button
        className="image-slider-btn"
        style={{ left: 0 }}
        onClick={showPrev}
      >
        <ArrowCircleLeftIcon style={{ fontSize: "40" }} />
      </button>
      <button
        className="image-slider-btn"
        style={{ right: 0 }}
        onClick={showNext}
      >
        <ArrowCircleRightIcon style={{ fontSize: "40" }} />
      </button>
      {/* <Box
          display="flex"
          position="absolute"
          bottom="0.5rem"
          left="50%"
          gap="0.5rem"
        >
          {imageUrls.map((url, index) => (
            <button
              className="image-slider-dot"
              style={{
                backgroundColor: index === imageIndex ? "black" : "gray",
              }}
              onClick={() => setImageIndex(index)}
            ></button>
          ))}
        </Box> */}
    </Box>
  );
};

export default Slider;
