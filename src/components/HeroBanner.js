import React from "react";
import { Box, Stack, Typography ,Button} from "@mui/material";
import { Player } from '@lottiefiles/react-lottie-player';
//  Box -> div , Typography -> <p>,
const HeroBanner = () => {
  return (
    <Box sx={{
      mt: {lg: '212px', xs:'70px'},
      ml: {sm:'50px'}
    }} position="relative" p="20px">
      <Typography color="#FF2625"
      fontWeight="600" fontSize="26px"
      >Fitness Club</Typography>
      <Typography fontWeight={700}
      sx={{fontSize:{lg:'44px' , xs:'40px'}}} mb="23px" mt="30px">Sweat, Smile <br/> and Repeat</Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={4}>Check out the most effective exercises</Typography>
      
      <Button variant="contained" color="error" href="#exercises" 
      sx={{
        backgroundColor: '#ff2625', padding:'10px'
      }}
      >Explore Exercises</Button>
      <Typography color="ff2625" 
      sx={{
        opacity: 0.1,
        display:{lg: 'block',xs: 'none'}
        }} fontSize="200px"
        >Exercise</Typography>
      {/* <img src={HeroBannerImage} alt="banner-image" className="hero-banner-img" /> */}
      <Player 
        // src='https://assets4.lottiefiles.com/temp/lf20_fPETSw.json'
        src='https://assets4.lottiefiles.com/packages/lf20_oncjxjbd.json'
        className="player"
        loop
        autoplay
        speed={1}
      />
    </Box>
  );
};

export default HeroBanner;
