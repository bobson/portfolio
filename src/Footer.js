import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250
    },
    backgroundColor: "inherit"
  },
  action: {
    width: 60,
    color: "tan",
    transition: "transform 0.3s ease-out",
    "&:hover": {
      transform: "translateY(8px)",
      color: "tomato"
    }
  }
});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation className={classes.root}>
      <BottomNavigationAction
        className={classes.action}
        href="https://www.linkedin.com/in/slobodan-markoski-93ab0517a/"
        target="blank"
        label="LinkedIn"
        icon={<LinkedInIcon />}
      />
      <BottomNavigationAction
        className={classes.action}
        href="https://github.com/bobson"
        target="blank"
        label="GitHub"
        icon={<GitHubIcon />}
      />
      <BottomNavigationAction
        className={classes.action}
        href="https://twitter.com/bmarkoski"
        target="blank"
        label="Twitter"
        icon={<TwitterIcon />}
      />
      <BottomNavigationAction
        className={classes.action}
        href="https://www.instagram.com/bobi_slb/"
        target="blank"
        label="Instagram"
        icon={<InstagramIcon />}
      />
    </BottomNavigation>
  );
};

export default Footer;
