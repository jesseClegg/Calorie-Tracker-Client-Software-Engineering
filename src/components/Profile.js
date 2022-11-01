import { MenuItem, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import React from "react";
import { useAuth } from "../user-auth/contexts/AuthContexts";
import Select from "@mui/material/Select";

export default function Profile() {
  const [sex, setSex] = React.useState("");
  const handleChange = (event) => {
    setSex(event.target.value);
  };
  const { currentUser } = useAuth();
  return (
    <>
      <h3>{currentUser.email}</h3>
      <br />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={1}>
            Age:
          </Grid>
          <Grid item xs={11}>
            <TextField></TextField>
          </Grid>
          <Grid item xs={1}>
            Sex:
          </Grid>
          <Grid item xs={11}>
            <Select
              sx={{ width: "14em" }}
              id="sex-select"
              value={sex}
              onChange={handleChange}
            >
              <MenuItem value={"F"}>Female</MenuItem>
              <MenuItem value={"M"}>Male</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={1}>
            Height:
          </Grid>
          <Grid item xs={11}>
            <TextField></TextField>
          </Grid>
          <Grid item xs={1}>
            Weight:
          </Grid>
          <Grid item xs={11}>
            <TextField></TextField>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
