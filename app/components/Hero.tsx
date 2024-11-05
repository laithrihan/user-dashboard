import { Box,  } from '@mui/material'
import React from 'react'
import { blue } from '@mui/material/colors';

const Hero = () => {

  return (
    <>
      <Box  display={'flex'}  sx={{flexDirection:'column',width:'100%' ,height:"40vh" ,backgroundColor:blue[600] ,mt:'10vh', boxShadow: 6 ,justifyContent:'space-around',alignItems:'center'  }} >
        <p className="text-white text-[32px] sm:text-[42px]">Users List Dashboard</p>
      </Box>
      </>
  )
}

export default Hero