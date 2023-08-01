import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} />
      <Stack direction="row">
        <Button
          sx={{
            ml: "16px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "13px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
            {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "16px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "13px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
            {exercise.target}
        </Button>

      </Stack>
      <Typography ml='18px' color='#000' fontWeight='bold' mt='9px' pb='10px' textTransform='capitalize' fontSize='20px'>
          {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
