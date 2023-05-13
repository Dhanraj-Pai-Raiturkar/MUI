import React from 'react';
import logo from './logo.svg';
import './App.css';
import MuiCard from './components/MuiCard';
import MuiTypography from './components/MuiTypography';
import { Typography } from '@mui/material';
import MuiButtons from './components/MuiButtons';

function App() {
  return (
    <div className="App">
      <Typography variant='h4' sx={{mb:8, mt:2}} color='white' fontWeight='500'>Material UI Course</Typography>
      
      <MuiCard>
        <MuiTypography title="Typography" link="https://youtu.be/r42jcDXSFM0"/>
      </MuiCard>

      <MuiCard>
        <MuiButtons title="Buttons" link="https://youtu.be/fgTLgz1xSn8"/>
      </MuiCard>
    </div>
  );
}

export default App;
