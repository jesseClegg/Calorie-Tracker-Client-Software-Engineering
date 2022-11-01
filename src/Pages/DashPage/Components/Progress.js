import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { LinearProgress } from '@mui/material';
import Grid from "@mui/material/Grid"

function preventDefault(event) {
  event.preventDefault();
}

export default function Progress(data) {
  console.log(data.data);
  var sum = 0;
  for (var i = 0; i < data.data.length; i++) {
    // console.log(data[i]);
    sum += data.data[i]
  }
  const calorieGoal = 2000;
  return (
    <>
      <h2>Today's Calories</h2>
      <Grid container>
        <Grid item xs={1}>0</Grid>
        <Grid item xs={10}></Grid>
        <Grid item xs={1}>{calorieGoal}</Grid>
      </Grid>
      <LinearProgress color='primary' variant='determinate' value={50}></LinearProgress>
      <div>
        You have exceeded your daily calorie goal by {sum}.
      </div>
    </ >
  );
}
