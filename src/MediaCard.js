import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    // margin: "3rem",
    margin: "5rem auto",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  },
  description: {
    height: 140
  },
  media: {
    objectFit: "fill",
    height: 140
  }
});

export default function MediaCard({ image, title, description, demo, git }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href={demo} target="blank">
        <CardMedia
          component="img"
          className={classes.media}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography
            className={classes.description}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary" href={demo} target="blank">
          Live Demo
        </Button>
        <Button size="small" color="primary" href={git} target="blank">
          GitHub
        </Button>
      </CardActions>
    </Card>
  );
}
