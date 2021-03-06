import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Typed from "react-typed";
import Particles from "react-particles-js";

const useStyles = makeStyles(() => ({
  title: {
    color: "white",
    fontSize: "2.5rem",
    textShadow: "2px 2px 2px black"
  },
  subtitle: {
    color: "tomato",
    marginBottom: "3rem"
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1
  },
  particlesCanva: {
    position: "absolute"
  },
  footer: {
    marginTop: "100px"
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Particles canvasClassName={classes.particlesCanva} />
      <div className={classes.typedContainer}>
        <Typography className={classes.title} variant="h4">
          SLOBODAN MARKOSKI
        </Typography>
        <Typography className={classes.subtitle} variant="h5">
          <Typed strings={["Front End React Developer "]} typeSpeed={40} />
        </Typography>
      </div>
    </>
  );
};

export default Home;
