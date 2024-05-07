import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box } from "@mui/material";

const Slider = ({imageUrls}) => {
    const [imageIndex, setImageIndex] = useState(0);

    const showNext = () => {
      console.log(imageIndex)
        if (imageIndex === imageUrls.length - 1) {
            setImageIndex(0);
        } else {
            setImageIndex(imageIndex + 1);
        }
    }

    const showPrev = () => {
        if (imageIndex === 0) {
            setImageIndex(imageUrls.length - 1);
        } else {
            setImageIndex(imageIndex - 1);
        }
    }

    return (
      <Box width='100%' height= "100%" position= "relative" >
        <Box width='100%' height= '100%' display= 'flex' overflow='hidden' >
          {imageUrls.map((url, index) => (
            <img src={url} className="img-slider-img" alt='slider' style={{translate: `${-100*imageIndex}%`}}/>
          ))}
        </Box>
        <button
          className="image-slider-btn"
          style={{ left: 0 }}
          onClick={showPrev}
        >
          <ArrowBackIosNewIcon />
        </button>
        <button
          className="image-slider-btn"
          style={{ right: 0 }}
          onClick={showNext}
        >
          <ArrowForwardIosIcon />
        </button>
        <Box display= 'flex' position= 'absolute' bottom= '0.5rem' left= '50%'gap= '0.5rem'>
          {imageUrls.map((url, index) => (
            <button
              className="image-slider-dot"
              style={{
                backgroundColor: index === imageIndex ? "black" : "gray",
              }}
              onClick={() => setImageIndex(index)}
            ></button>
          ))}
        </Box>
      </Box>
    );
}

export default Slider
