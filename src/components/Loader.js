import React from 'react'
import {Stack} from "@mui/material";
import {InfinitySpin} from "react-loader-spinner";
const Loder = () => {
  return (
    <Stack direction="row" justifyContent="center" alignContent="center" width="100%">
        <InfinitySpin color="gray"/>
    </Stack>
  )
}

export default Loder