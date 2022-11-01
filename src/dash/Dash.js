import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container"
import Progress from "./Progress";
import CalorieCounter from "./Counter";
import { LineChart, data } from "./DashChart";
import ActivityCard from "./ActivityTracker";

export function Dash() {

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className="bg-dark text-light">
            <div className="text-center align-items-center justify-content-between">
              <h1>Overview</h1>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className="bg-dark text-light" sx={{ p: 3 }}>
            <Progress data={data.datasets[0].data} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className="bg-dark text-light" sx={{ p: 3 }}>
            <h2>Calories In</h2>
            <CalorieCounter />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className="bg-dark text-light" sx={{ p: 3 }}>
            <h2>Calories Out</h2>

            <ActivityCard />

          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className="bg-dark text-light text-center" sx={{ p: 3 }}>
            <h2>Net Calories</h2>
            <Paper>
              <LineChart></LineChart>
            </Paper>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default Dash;
