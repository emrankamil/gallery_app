import React from 'react'
import styles from "./Footer.module.scss"
import { Box, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Divider from '@mui/material/Divider';

function Footer() {

  return (
    <Box className={styles.footer} width="100%">
      <section className={styles.footer_top}>
        <Box flex="1">
          <Typography>KEEP IN TOUCH</Typography>
          <Typography>
            Subscribe to receive news from Banana Republic
          </Typography>
        </Box>
        <Box flex="1" display="flex" alignItems="center">
          <Box display="flex">
            <Box>
              <LocationOnIcon />
            </Box>
            <Typography>FIND A STORE</Typography>
          </Box>
          <Box display="flex">
            <Box>
              <LocationOnIcon />
            </Box>
            <Typography>READY TO WEAR</Typography>
          </Box>
        </Box>
      </section>
      <Divider />
      <section className={styles.footer_middle}>
        <Box className={styles.footer_column}>
          <Typography>CUSTOMER SUPPORT</Typography>
          <ul>
            <li>
              <a href="#">Shipping & Handling</a>
            </li>
            <li>
              <a href="#">Payments, Returns & Exchanges</a>
            </li>
          </ul>
        </Box>
        <Box className={styles.footer_column}>
          <Typography>RESOURCES</Typography>
          <ul>
            <li>
              <a href="#">BR Design & Styling Services</a>
            </li>
            <li>
              <a href="#">BR Home Trade Program</a>
            </li>
          </ul>
        </Box>
        <Box className={styles.footer_column}>
          <Typography>ACCIDENT PROTECTION</Typography>
          <ul>
            <li>
              <a href="#">Accident Protection FAQ</a>
            </li>
            <li>
              <a href="#">File a Claim</a>
            </li>
          </ul>
        </Box>
        <Box className={styles.footer_column}>
          <Typography>FIND US</Typography>
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">BR Home Store Locator</a>
            </li>
          </ul>
        </Box>
      </section>
      <section className={styles.footer_bottom}></section>
    </Box>
  );
}

export default Footer
