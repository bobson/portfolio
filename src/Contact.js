import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Typed from "react-typed";
import FormHelperText from "@material-ui/core/FormHelperText";

import emailjs from "emailjs-com";

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
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan"
      },
      "&:hover fieldset": {
        borderColor: "tan"
      }
    }
  }
})(TextField);

const useStyles = makeStyles(() => ({
  root: {
    background: "rgb(0, 0, 0, 0.6)"
    // opacity: "0.6"
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
    fontSize: "1rem",
    color: "white",
    textAlign: "center",
    padding: "30px 20px 20px 20px"
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

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w5ouio7",
        "template_o6xpcxj",
        e.target,
        "user_feTz9iU1AQdh8eDOF14YF"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  }

  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} md>
        <Typography className={classes.header} variant={"h4"}>
          If you have questions about my process,
          <br /> or would like to work together on a project, please reach out!
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
        <form onSubmit={sendEmail} noValidate autoComplete="off">
          <InputField
            id="from_name"
            name="from_name"
            label="Name"
            variant="outlined"
          />
          <br />
          <br />
          <InputField
            id="from_email"
            name="from_email"
            label="Email"
            variant="outlined"
          />
          <br />
          <br />
          <InputField
            id="message"
            name="message"
            label="Message"
            multiline
            rows={4}
            variant="outlined"
          />
          <br />
          <br />
          <Button
            type="submit"
            className={classes.button}
            fullWidth={true}
            variant="outlined"
            endIcon={<MailIcon />}
          >
            send
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
