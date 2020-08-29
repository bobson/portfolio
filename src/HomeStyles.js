import { makeStyles } from "@material-ui/core/styles";

export const useHomeStyles = makeStyles((theme) => {
  return {
    avatar: {
      width: theme.spacing(15),
      height: theme.spacing(15),
      margin: theme.spacing(1),
    },
    title: {
      color: "white",
    },
    subtitle: {
      color: "tomato",
      marginBottom: "3rem",
    },
    typedContainer: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100vw",
      textAlign: "center",
      zIndex: 1,
    },
    particlesCanva: {
      position: "absolute",
    },
  };
});
