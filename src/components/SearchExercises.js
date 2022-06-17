import React, {useEffect, useState} from 'react';
import {Box, Button, Stack, TextField, Typography} from '@mui/material';

const SearchExercises = () => {


  return (
    <Stack
      alignItems="center"
      mt="35px"
      justifyContent="center"
      p="20px"
    >
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: '44px', xs: '30px'}
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Workouts You <br />
        Should Know
      </Typography>
      <Box
        position="relative"
        mb="72px" 
      >
        <TextField 
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px',
            },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
          }}
          height="70px"
          value=''
          onChange={(e) => {}}
          placeholder="Search Workouts"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransfrom: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs:'14px' },
            height: '56px',
            position: 'absolute',
            right: '0'
          }}
        >
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises;