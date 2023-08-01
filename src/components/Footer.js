import React from 'react'
import { Box, Typography ,Stack } from '@mui/material'
import Logo from '../assets/images/gymmmmm.png'

const Footer = () => {
  return (
    <Box mt='50px' bgcolor='#fff3f4'>
    <Stack gap='30px' alignItems='center' px='30px' pt='22px'>
      <img src={Logo} alt='logo' width='190px' height='40px'/>
      <Typography variant='h5' pb='30px' mt='15px'>
          Made with ❤️ by Vaibhav
      </Typography>
    </Stack>
    
    </Box>
  )
}

export default Footer