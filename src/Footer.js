import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    backgroundColor: "inherit",
  },
  action: {
    width: 60,
    color: "tan",
    transition: "transform 0.3s ease-out",
    "&:hover": {
      transform: "translateY(8px)",
      color: "tomato",
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation className={classes.root}>
      <BottomNavigationAction
        style={{ color: "rgb(0, 119, 181)" }}
        className={classes.action}
        href="https://www.linkedin.com/in/slobodan-markoski-93ab0517a/"
        target="blank"
        label="LinkedIn"
        icon={<LinkedInIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        className={classes.action}
        href="https://github.com/bobson"
        target="blank"
        label="GitHub"
        icon={<GitHubIcon />}
      />
      <BottomNavigationAction
        style={{ color: "rgb(8, 160, 233)" }}
        className={classes.action}
        href="https://twitter.com/bmarkoski"
        target="blank"
        label="Twitter"
        icon={<TwitterIcon />}
      />
    </BottomNavigation>
  );
};

export default Footer;
