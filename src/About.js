import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    color: "white",
    textAlign: "center",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Grid item xs={11} md={6}>
        <Typography className={classes.root} variant="h6">
          "Results-oriented Front-end Developer using React and Material-UI,
          dedicated to creating and optimizing interactive, user-friendly, and
          feature-rich websites. Leverage analytical skills and strong attention
          to detail in order to deliver original and efficient web solutions,
          provide technical knowledge, build new websites from start to finish,
          and successfully manage a team of other software professionals."
        </Typography>
      </Grid>
    </Grid>
  );
};
export default About;
