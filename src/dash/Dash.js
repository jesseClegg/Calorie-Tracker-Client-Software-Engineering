import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Progress from "./Progress";
import CalorieCounter from "./Counter";
import { LineChart, data } from "./DashChart";

export function Dash() {
  const DashChart = <LineChart />;

  return (
    <Grid container spacing={3}>
      <Grid>
        <div className="text-center align-items-center justify-content-between">
          <h1>Overview</h1>
        </div>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Paper>
          <br />
          {DashChart}
          <br />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Progress data={data.datasets[0].data} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <CalorieCounter />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Dash;
