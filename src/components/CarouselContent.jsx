import { useTheme, Box, Typography } from "@mui/material";
import { tokens } from "../theme";

const CarouselContent = ({title, subtitle, image, key_val}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box
      display="flex"
      alignItems="center"
      px="40px"
      gap={"20px"}
      className="carousel-content"
    >
      {key_val % 2 === 0 ? (
        <Box>
          <img
            src={image}
            alt="icon"
            style={{
              width: "330px",
              height: "550px",
            }}
          />
        </Box>
      ) : null}
      <Box>
        <Box>
          <Typography variant="h2" fontWeight={"bold"} color={colors.gray[500]}>
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4" color={colors.gray[500]}>
            {subtitle}
          </Typography>
        </Box>
      </Box>
      {key_val % 2 !== 0 ? (
        <Box>
          <img
            src={image}
            alt="discover"
            style={{
              width: "330px",
              height: "550px",
              top: "50px",
              gap: "0px",
              opacity: "0px",
            }}
          />
        </Box>
      ) : null}
    </Box>
  );
}

export default CarouselContent