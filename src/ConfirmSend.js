import React from "react";
import { Link } from "@reach/router";
import { Typography, Grid } from "@material-ui/core";

const ConfirmSend = () => (
  <Grid container direction="column" alignItems="center" justify="space-around">
    <Grid item xs>
      <h1 style={{ color: "tan" }}>Thank You!!!</h1>
    </Grid>
    <Grid item xs>
      <h2 style={({ textAlign: "center" }, { color: "tan" })}>
        Your message has been send
      </h2>
    </Grid>
    <Grid item xs>
      <Typography style={{ color: "tan" }} component={Link} to="/">
        Go to home page
      </Typography>
    </Grid>
  </Grid>
);

export default ConfirmSend;
