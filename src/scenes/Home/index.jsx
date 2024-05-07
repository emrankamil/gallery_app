import { Box, Typography } from "@mui/material";
import React from "react";
import Slider from "../../components/Slider";
import bag1 from "../../assets/images/bag1.jpg";
import bag2 from "../../assets/images/bag2.jpg";
import bag3 from "../../assets/images/bag3.jpg";
import bag4 from "../../assets/images/bag4.jpg";
import bag5 from "../../assets/images/bag5.jpg";

function Home() {
  const IMAGES = [bag1, bag2, bag3, bag4, bag5];
  return (
    <Box>
      <Box textAlign="center">
        <Typography variant="h3" mb="15px">
          ENDS TODAY
        </Typography>
        <Typography variant="h1" fontWeight="bold" mb="15px">
          THE FREE SHIPPING EVENT
        </Typography>
        <Typography variant="h3" mb="15px">
          ENJOY FREE SHIPPING & DELIVER ON BR HOME ORDERS OF $1500
        </Typography>
        <Typography variant="h3" fontWeight="bold" mb="15px">
          SHOP NOW
        </Typography>
        <Typography variant="h3" mb="15px">
          *EXCLUSSIVE APPLY
        </Typography>
      </Box>
      <Box width="100%" height="500px" marigin="0 auto">
        <Slider imageUrls={IMAGES} />
      </Box>
    </Box>
  );
}

export default Home;
