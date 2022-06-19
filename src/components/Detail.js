import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';


const Detail = ({ exerciseDetail }) => {
  const {name, description, bodyPart, gifUrl, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    }
  ];

  return (
    <Stack
      gap="100px"
      sx={{
        flexDirection: { lg: 'row' },
        p: '40px',
        alignItems: 'center'
      }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '25px', xs: '15px' }}}>
        <Typography variant="h4" textTransform="capitalize">
          {name}
        </Typography>
        <Typography fontSize="18px">
          Exercises keep you strong. {name} is one of the best exercises to target your {target}. It will help you improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{ background: '#fff2db', borderRadius: '50%', width: '60px', height: '60px' }}>
              <img src={item.icon} alt={bodyPart} style={{ width: '30px', height: '30px'}} />
            </Button>
            <Typography textTransform="capitalize" fontSize="18px" color="#808080">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail;