import React from 'react'
import Header from '../Header';
import bag2 from '../../assets/images/bag2.jpg';
import { Box } from '@mui/material';
import styles from './ImageAndText.module.css';

function ImageAndText() {
  return (
    <Box className={styles.img_text_box} width="100%" display="flex" flexWrap="wrap">
      <Box flex="1">
        <img src={bag2} alt="bag2" />
      </Box>
      <Box flex="1">
        <Header
          title="THE FREE SHIPPING EVENT"
          subtitle="ENJOY FREE SHIPPING & DELIVERY ON BR HOME ORDERS OF $1500"
          label="SHOP NOW"
        />
      </Box>
    </Box>
  );
}

export default ImageAndText
