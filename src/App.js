import React from 'react'
import './App.css';
// it is used to route from 1 to another page.
import {Route,Routes} from 'react-router-dom';
// box is similar to div with the shading & colors.
import {Box} from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from './components/Footer';

const App = () => {
  return (
    // sx is used for width for extra large divices.
    <Box width="400px" sx={{width: {xl:'1488px'}}} m="auto">
       < Navbar/>
       
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
        </Routes>
        
        <Footer/>
    </Box>
  )
}

export default App