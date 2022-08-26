import React from 'react'
import '../App.css'
import AfricaImage from '../assets/Africa-Map-PNG-file.PNG.png'
import AmericaImage from '../assets/americas.png'
import AsiaImage from '../assets/asia2.png'
import EuropeImage from '../assets/europe2.png'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}

const RegionPicker = () => {
  return (
    <div>
      
    </div>
  )
}

export default RegionPicker