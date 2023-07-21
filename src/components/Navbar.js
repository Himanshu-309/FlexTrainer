import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo2 from "../assets/images/Gym-Silhoutte-PNG-Photo.png";
import { useState,useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "../App.css";
const Navbar = () => {
  const [theme, setTheme] = useState("light-mode");
  const toggleTheme = ()=>{
    if(theme==="dark-mode"){
      setTheme("light-mode");
    }
    else{
      setTheme("dark-mode")
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      
      sx={{
        gap: {
          sm: "122px",
          xs: "40px",
        },
        mt:{
          sm:"32px",xs:"20px",
        },
        justifyContent:'none'
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo2}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItem="flex-end" className="nav-items"
      sx={{
        gap: {
          lg:"40px",
          sm: "20px",
          xs: "15px",
        },
      }}
      >
        <Link
          to="/"
          className="my-link"
        >
          Home
        </Link>
        <a
          href="#exercises"
          className="my-link-exe"
        >
          Exercises
        </a>
        <a
          href=""
          className="my-link-theme"
          onClick={(event) => { event.preventDefault(); toggleTheme(); }}
        >
          {/* Theme */}
          {theme === "dark-mode" ? <FaSun /> : <FaMoon />}
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
