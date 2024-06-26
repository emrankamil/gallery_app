import { Box, Link, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";

function DropDown({ data }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width='100hv'>
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        marginInline="auto"
        p="60px 100px"
        gap="40px"
      >
        {data.dropdown.map((item, key) => {
          return (
            <Box key={key} width={`${(1 / data.dropdown.length) * 60}%`}>
              <Typography mb="30px">{item.title}</Typography>
              {item.links.map((link, key) => {
                return (
                  <Link href={link.link} key={key}>
                    <Typography color={colors.gray[500]} mb="5px">
                      {link.label}
                    </Typography>
                  </Link>
                );
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default DropDown;

