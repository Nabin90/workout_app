import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{ gap: {sm: '128px', xs: '40px'},
            mt: {sm: '26px', xs: '15px'},
            justifyContent: 'none'
        }}
      px="20px"  
    >
      <Link to="/">
        <img 
          src={Logo}
          alt="Logo"
          style={{
            width: '45px',
            height: '45px',
            margin: '0 20px'
          }}
        />
      </Link>

      <Stack
        direction="row"
        gap="40px"
        fontSize="22px"
        alignItems="flex-end"
      >
        <Link to="/" style={{ 
          textDecoration: 'none',
          color: '#3A1212',
          borderBottom: '2px solid #FF2625'
        }}>
          Home
        </Link>
        <a href="#exercises" style={{
          textDecoration: 'none',
          color: '#3A1212'
        }}>
          Exercises
        </a>
      </Stack>

    </Stack>
  )
}

export default Navbar;