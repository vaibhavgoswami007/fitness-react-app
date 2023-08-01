import React from 'react'
import {Box ,Stack , Typography} from '@mui/material'

import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'

const SimilarExercises = (targetMuscleExercises,equipmentExercises) => {
  return (
    <Box sx={{mt:{lg:'80px',xs:'0'}}}>
  <Typography variant='h4'>
      Exercises that targe the same muscle group
  </Typography>
  <Stack direction='row' sx={{p:'1,5', position:'relative'}}>
      {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises}/>: <Loader />  }
  </Stack>
    </Box>)
}

export default SimilarExercises