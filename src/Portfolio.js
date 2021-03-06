import React from "react";
import MediaCard from "./MediaCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import BrainsterSpace from "./images/BrainsterSpace.jpg";
import Covid from "./images/Covid-19.png";
import Chat from "./images/ChatApp.png";
import PetAdopt from "./images/PetAdopt.png";
import BudgeController from "./images/budge_controller.png";
import PigGame from "./images/PigGame.png";
import eCommerce from "./images/E-commerce.png";

const useStyles = makeStyles(() => ({
  card: {
    transition: "transform 0.3s ease-out",
    "&:hover": {
      transform: "translateY(8px)",
    },
  },
}));

export default function Portfolio() {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Grid className={classes.card} item xs={12} sm={4}>
        <MediaCard
          image={BrainsterSpace}
          title="Brainster - Final Project"
          description="Final Project of the Braister bootcamp build with React and Bootsrap"
          demo="https://brainsterspace-slobodan.netlify.app/"
          git="https://github.com/bobson/BrainsterSpace.git"
        />
      </Grid>
      <Grid className={classes.card} item xs={12} sm={4}>
        <MediaCard
          image={eCommerce}
          title="React-ecommerce - In development"
          description="E-coomerce site build with React and MaterialUI, stripe for payment and commercejs.com as a backend of products."
          demo="https://re-commercejs.netlify.app/"
          git="https://github.com/bobson/react-e-shop.git"
        />
      </Grid>
      <Grid className={classes.card} item xs={12} sm={4}>
        <MediaCard
          image={Covid}
          title="Covid-19 Tracker"
          description="This project is a simple COVID-19 Virus tracker
             app build with React.js with all the latest features like
             hooks, styled with Materilal UI, visualization with Charts.js"
          demo="https://covidvirustracker.netlify.app/"
          git="https://github.com/bobson/covid_19_tracker"
        />
      </Grid>
      <Grid className={classes.card} item xs={12} sm={4}>
        <MediaCard
          image={Chat}
          title="Chat App"
          description="Chat App Build with Reac.js and socket.io,
            styled with Material UI"
          demo="https://chat-appl.netlify.app/"
          git="#"
        />
      </Grid>
      <Grid className={classes.card} item xs={12} sm={4}>
        <MediaCard
          image={PetAdopt}
          title="Pet Adopt Site"
          description=" Pet Adoption site, where you can choose from
            varius animals, and then adopt them.
            Pleace read README file on GitHub"
          demo="https://pet-adopt.netlify.app/"
          git="https://github.com/bobson/adopt-me"
        />
      </Grid>
      <Grid className={classes.card} item xs={12} sm={4}>
        <MediaCard
          image={BudgeController}
          title="Budge Controller"
          description="JavaScript Budge Controller Project"
          demo="https://codepen.io/bobi-mar/full/ExjmxOO"
          git="https://codepen.io/bobi-mar/pen/ExjmxOO"
        />
      </Grid>
      <Grid className={classes.card} item xs={12} sm={4}>
        <MediaCard
          image={PigGame}
          title="Pig Game"
          description="JavaScript Pig Game Project"
          demo="https://codepen.io/bobi-mar/full/jOPmObM"
          git="https://codepen.io/bobi-mar/pen/jOPmObM"
        />
      </Grid>
    </Grid>
  );
}
