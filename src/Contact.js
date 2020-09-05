import React, { useState } from "react";

import { Typography, Grid, Button } from "@material-ui/core/";
import FormHelperText from "@material-ui/core/FormHelperText";

import Typed from "react-typed";

import emailjs from "emailjs-com";

import ConfirmSend from "./ConfirmSend";
import Footer from "./Footer";

import { InputField, useStyles } from "./ContactStyles";

const Contact = () => {
  const classes = useStyles();
  const [buttonText, setButtonText] = useState("hire me");
  const [confirm, setConfirm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (name === "") {
      setErrorName(true);
      setErrorEmail(false);
      setErrorMessage(false);
    } else if (email === "" || !/.+@.+..+/.test(email)) {
      setErrorName(false);
      setErrorEmail(true);
      setErrorMessage(false);
    } else if (message === "") {
      setErrorName(false);
      setErrorEmail(false);
      setErrorMessage(true);
    } else {
      setErrorName(false);
      setErrorEmail(false);
      setErrorMessage(false);
      setButtonText("sending...");
      emailjs
        .sendForm(
          "service_w5ouio7",
          "template_o6xpcxj",
          e.target,
          "user_feTz9iU1AQdh8eDOF14YF"
        )
        .then(
          () => {
            setButtonText("hire me");
            setConfirm(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  if (confirm) {
    return <ConfirmSend path="confirm" />;
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
        <form onSubmit={sendEmail} noValidate autoComplete="off">
          <InputField
            error={errorName}
            id="from_name"
            name="from_name"
            value={name}
            label="Name"
            helperText={errorName ? "Please enter your name." : ""}
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <InputField
            error={errorEmail}
            id="from_email"
            name="from_email"
            value={email}
            label="Email"
            helperText={errorEmail ? "Please enter a valid email." : ""}
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <InputField
            error={errorMessage}
            id="message"
            name="message"
            value={message}
            label="Message"
            helperText={errorMessage ? "Please type something here." : ""}
            multiline
            rows={4}
            variant="outlined"
            onChange={(e) => setMessage(e.target.value)}
          />
          <br />
          <br />
          <Button
            // onClick={changeButtonText}
            type="submit"
            className={classes.button}
            fullWidth={true}
            variant="outlined"
          >
            {buttonText}
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
