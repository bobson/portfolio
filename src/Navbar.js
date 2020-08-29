import React, { useState } from "react";
import { Link } from "@reach/router";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Tabs,
  Tab
} from "@material-ui/core";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import WorkIcon from "@material-ui/icons/Work";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";

import Footer from "./Footer";

import { useStyles } from "./NavbarStyles";

const menuItems = [
  { listIcon: <HomeIcon />, listText: "Home", listPath: "/" },
  { listIcon: <InfoIcon />, listText: "About", listPath: "about" },
  { listIcon: <WorkIcon />, listText: "Portfolio", listPath: "portfolio" },
  { listIcon: <MailIcon />, listText: "Contact", listPath: "contact" }
];

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [value, setValue] = useState(0);
  const [color, setColor] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMessage = e => {
    if (e.target.textContent === "Home") {
      setMessage("");
    } else {
      setMessage(e.target.textContent);
    }
    setOpen(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={color ? (classes.root, classes.active) : classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon style={{ color: "tomato" }} />
          </IconButton>
          <Grid container justify="flex-end" className={classes.title}>
            <Typography className={classes.listColor} variant="h6">
              {message}
            </Typography>
          </Grid>
          <Grid container justify="center" className={classes.buttons}>
            <Tabs value={value} onChange={handleChange}>
              {menuItems.map((item, key) => (
                <Tab
                  className={classes.button}
                  label={item.listText}
                  component={Link}
                  to={item.listPath}
                  key={key}
                />
              ))}
            </Tabs>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton style={{ color: "tomato" }} onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>

        <List>
          {menuItems.map((listItem, key) => (
            <ListItem
              button
              key={key}
              component={Link}
              to={listItem.listPath}
              onClick={handleMessage}
            >
              <ListItemIcon className={classes.listColor}>
                {listItem.listIcon}
              </ListItemIcon>
              <ListItemText
                className={classes.listColor}
                primary={listItem.listText}
              />
            </ListItem>
          ))}
        </List>
        <div className={classes.drawerFooter}>
          <Footer />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}
