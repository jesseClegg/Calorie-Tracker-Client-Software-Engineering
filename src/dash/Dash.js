import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container"
import Progress from "./Progress";
import CalorieCounter from "./Counter";
import { LineChart, data } from "./DashChart";

export function Dash() {

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper>
          <div className="text-center align-items-center justify-content-between">
            <h1>Overview</h1>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 3 }}>
          <Progress data={data.datasets[0].data} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3 }}>
          <h2>Calories In</h2>
          <CalorieCounter />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3}}>
          <h2>Calories Out</h2>
          <Paper>
            Quick Add Exercise
          </Paper>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper>
          <LineChart></LineChart>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Dash;
