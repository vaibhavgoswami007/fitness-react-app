import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail =[
    {
        icon:BodyPartImage,
        name:bodyPart
    },
    {
        icon:TargetImage,
        name:target
    }
    ,
    {
        icon:EquipmentImage,
        name:equipment
    }
  ]


  return (
    <Stack
      gap="45px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} Loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "15px", xs: "18px" } }}>
        <Typography variant="h4" fontWeight='600' textTransform='capitalize'>{name}</Typography>
        <Typography variant="h6">
          Exercises keep you strong. {name} is one of the best exercises to
          target your {target} . It will help you to improve your mood and gain
          energy.
        </Typography>
        {
            extraDetail.map((item)=>(
                <Stack key={item.name} direction='row' gap='18px' alignItems='center'>
                    <Button sx={{background:'#fff2db',borderRadius:'50%',width:'70px',height:'70px'}}>
                        <img src={item.icon} alt={item.name} /> 
                    </Button>
                    <Typography variant="h6" textTransform='capitalize'>
                        {item.name}
                    </Typography>
                </Stack>
            ))
        }
      </Stack>
    </Stack>
  );
};

export default Detail;
