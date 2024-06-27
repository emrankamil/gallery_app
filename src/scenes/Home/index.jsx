import { Box } from "@mui/material";
import React from "react";
import Slider from "../../components/Slider";
import bag1 from "../../assets/images/bag1.jpg";
import bag2 from "../../assets/images/bag2.jpg";
import bag3 from "../../assets/images/bag3.jpg";
import bag4 from "../../assets/images/bag4.jpg";
import bag5 from "../../assets/images/bag5.jpg";
import bag6 from "../../assets/images/bag6.jpg";
import Header from "../../components/Header";
import ThreeByTwoBoard from "../../components/display_boards/ThreeByTwoBoard";

function Home() {
  const IMAGES = [bag1, bag2, bag3, bag4, bag5];
  return (
    <Box>
      <Box width="100%" height="500px" marigin="0 auto">
        <Header
          title="THE FREE SHIPPING EVENT"
          subtitle="ENJOY FREE SHIPPING & DELIVERY ON BR HOME ORDERS OF $1500"
          label="SHOP NOW"
        />
        <Slider imageUrls={IMAGES} />
        <Header
          title="A SUMMER OASIS"
          subtitle="Modern silhouettes, artisanal lighting, and European linen pillows and throws create a welcome retreat. Escape the ordinary."
          label="SHOP NOW"
        />
        <ThreeByTwoBoard images={[...IMAGES, bag6]}/>
      </Box>
    </Box>
  );
}

export default Home;
