import { withStyles, makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core/";

export const InputField = withStyles({
  root: {
    width: "100%",
    "& label.Mui-focused": {
      color: "white",
    },
    "& input.MuiInputBase-input": {
      color: "tan",
    },
    "& .MuiOutlinedInput-multiline": {
      color: "tan",
    },
    "& label.MuiFormLabel-root": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

export const useStyles = makeStyles(() => ({
  root: {
    background: "rgb(0, 0, 0, 0.6)",
    // opacity: "0.6"
  },
  button: {
    color: "tomato",
    borderColor: "tan",
    transition: "transform 0.3s ease-out",
    "&:hover": {
      transform: "translateY(8px)",
      color: "green",
    },
    backgroundColor: "#0d0e12",
  },
  header: {
    fontSize: "2.5rem",
    color: "white",
    textAlign: "center",
    padding: "30px 20px 20px 20px",
  },
  paragraph: {
    fontStyle: "italic",
    color: "tomato",
    textShadow: "2px 2px 1px #1f1f1f",
    textAlign: "center",
  },
  footer: {
    width: "50%",
    marginTop: "50px",
  },
  helper: {
    color: "tan",
    marginTop: "10px",
    textAlign: "center",
    fontSize: "1rem",
  },
}));
