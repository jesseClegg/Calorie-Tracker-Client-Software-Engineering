import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Progress from "./Progress";
import CalorieCounter from "./Counter";
import { LineChart, data } from "./DashChart";

export function Dash() {
  const DashChart = <LineChart />;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <Paper>
          <br />
          {DashChart}
          <br />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 454,
          }}
        >
          <Progress data={data.datasets[0].data} />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <CalorieCounter />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Dash;
