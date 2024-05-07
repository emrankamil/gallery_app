import { Box, Button, useTheme } from "@mui/material";
import { carouselSlice } from "../features/carousel/carouselSlice";
import { useSelector, useDispatch } from "react-redux";
import { setDataLength} from "../features/carousel/carouselSlice";
import { tokens } from "../theme";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CarouselContent from "./CarouselContent";

function Carousel({content}) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const colors = tokens(theme.palette.mode);
  const carouselData = useSelector((state) => state.content);
  const activeIndex = useSelector((state) => state.carousel.value);
  console.log(activeIndex)

  // const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    dispatch(setDataLength(carouselData.length));
    dispatch(carouselSlice.actions.nextSlide()); 
  };
  const prevSlide = () => {
    dispatch(setDataLength(carouselData.length));
    dispatch(carouselSlice.actions.prevSlide()); 
  };
  return (
    <Box
      className="carousel"
      backgroundColor="#e1dcd1"
      m="40px"
      p="20px"
      borderRadius="0.75"
      sx={{ boxShadow: "0px 4px 4px 0px #00000040" }}
    >
      <Box display="flex" alignItems="center">
        {/* left arrow */}
        <Button onClick={prevSlide}>
          <ArrowBackIosNewIcon
            style={{ fontSize: 40 }}
            color='gray'
          />
        </Button>
        {/* main content */}
        <Box flex="1">
          <CarouselContent
            title={carouselData[activeIndex].title}
            subtitle={carouselData[activeIndex].subtitle}
            image={carouselData[activeIndex].image} 
            key_val={activeIndex}
          />
        </Box>
        {/* right arrow */}
        <Button onClick={nextSlide}>
          <ArrowForwardIosIcon
            style={{ fontSize: 40 }}
            color={colors.primary[500]}
          />
        </Button>
      </Box>
      {/* navigaion */}
      <Box display='flex' justifyContent='center'>
        {carouselData.map((item, index) => (
          <Box
            key={index}
            onClick={() => dispatch(carouselSlice.actions.setSlide(index))}
            sx={{
              width: "10px",
              height: "10px",
              backgroundColor: activeIndex === index ? colors.primary[500] : colors.gray[500],
              borderRadius: "50%",
              display: "inline-block",
              margin: "5px",
              cursor: "pointer",
            }}
          ></Box>
        ))}
      </Box>
    </Box>
  );
}

export default Carousel;
