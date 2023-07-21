import React from 'react'
import {Box,Stack,Typography} from "@mui/material";

import Logo2 from "../assets/images/Gym-Silhoutte-PNG-Photo.png";
import "../App.css";
const Footer = () => {
  return (
    <Box mt="80px" className="foot">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo2} alt="logo" width="80px" height="60px" />
        <Typography variant='h5' pb="40px" mt="0px" >
          Made with ❤ by Himanshu Upadhyay
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer