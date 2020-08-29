import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Typed from "react-typed";
import FormHelperText from "@material-ui/core/FormHelperText";

import MailIcon from "@material-ui/icons/Mail";

import { TextField, Typography, Grid, Button } from "@material-ui/core/";

import Footer from "./Footer";

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white"
    },
    "& input.MuiInputBase-input": {
      color: "tan"
    },
    "& label.MuiFormLabel-root": {
      color: "white"
    }
  }
})(TextField);

const useStyles = makeStyles(() => ({
  root: {
    height: "200%"
  },
  button: {
    color: "tomato",
    borderColor: "tan",
    transition: "transform 0.3s ease-out",
    "&:hover": {
      transform: "translateY(8px)",
      color: "green"
    },
    backgroundColor: "#0d0e12"
  },
  header: {
    fontSize: "2.5rem",
    color: "white",
    textAlign: "center",
    marginTop: "30px"
  },
  paragraph: {
    fontStyle: "italic",
    color: "tomato",
    textShadow: "2px 2px 1px #1f1f1f",
    textAlign: "center"
  },
  footer: {
    width: "50%",
    marginTop: "50px"
  },
  helper: {
    color: "tan",
    marginTop: "10px",
    textAlign: "center",
    fontSize: "1rem"
  }
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="center"
    >
      <Grid item xs={12} md>
        <Typography className={classes.header} variant={"h4"}>
          Let's work together
        </Typography>
        <Typography className={classes.paragraph} variant={"subtitle1"}>
          <Typed
            strings={["Where there's a will there's a way"]}
            typeSpeed={40}
          ></Typed>
        </Typography>
      </Grid>
      <Grid item xs={12} md>
        <h1></h1>
      </Grid>
      <Grid item xs={12} md>
        <form noValidate autoComplete="off">
          <InputField id="name" label="Name" />
          <br />
          <InputField id="email" label="Email" />
          <br />
          <br />
          <Button
            href="mailto:bmarkoski@yahoo.com"
            className={classes.button}
            fullWidth={true}
            variant="outlined"
            endIcon={<MailIcon />}
          >
            contact me
          </Button>
          <FormHelperText className={classes.helper}>
            bmarkoski@yahoo.com
          </FormHelperText>
        </form>
      </Grid>
      <Grid item xs={12} md className={classes.footer}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Contact;
