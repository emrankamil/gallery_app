import React from "react";
import { Box, Typography } from "@mui/material";

function Header({ title, subtitle, label }) {
  return (
    <Box textAlign="center" my="48px" maxWidth='fit-content' marginInline='auto'>
      <Typography variant="h1" fontWeight="bold" mb="20px" p="0 4.375rem">
        {title}
      </Typography>
      <Typography variant="h4" mb="48px">
        {subtitle}
      </Typography>
      <Box
        display="flex"
        gap="20px"
        marginInline="auto"
        maxWidth="fit-content"
        alignItems="center"
      >
        <Typography variant="h4">{label}</Typography>
        <button>
          <svg
            width="83"
            height="6"
            viewBox="0 0 83 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M77.5 0L82.5 3L77.5 6L79.6429 3L77.5 0Z"
              fill="currentColor"
            ></path>
            <rect y="2.5" width="80" height="1" fill="currentColor"></rect>
          </svg>
        </button>
      </Box>
    </Box>
  );
}

export default Header;
