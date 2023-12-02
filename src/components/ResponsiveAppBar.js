import { AppBar, Box } from "@mui/material";
import React from "react";
import { purple } from "@mui/material/colors";

const ResponsiveAppBar = () => {
  return (
    <Box sx={{flexgrow:1}}>
      <AppBar position="static" color="purple"></AppBar>
    </Box>
  );
};

export default ResponsiveAppBar;
