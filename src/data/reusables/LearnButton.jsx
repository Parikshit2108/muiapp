import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  learnBtn: {
    "&.MuiButton-root": {
      marginRight: 40,
      borderWidth: 2,
      textTransform: "none",
      fontFamily: "Roboto",
      fontWeight: "bold",
      borderRadius: 50,
      // backgroundColor: "#FFBA60",
      color: theme.palette.common.blue,
      borderColor: theme.palette.common.blue,
      // marginTop: "1em",
      [theme.breakpoints.down("sm")]: {
        marginBottom: "2em",
      },
    },
  },
}));

export default function LearnButton({
  fontSize = "",
  label = "Button",
  variant = "contained",
  onBtnClick = () => {},
  size = "small",
  //   muiProps = "",
  //   borderRadius = "4px",
  //   textColor = "color-white",
  //   bgColor = "bg-btn",
  fullWidth = false,
  disabled = false,
  children,
  component = "",
  to = "",
  iconPosition = "start",
  // icon = <DeleteIcon />,
  showIcon = false,
  sx = {},
}) {
  const classes = useStyles();
  return (
    <Button
      component={component}
      // {...IconProp}
      variant={variant}
      href={to}
      onClick={onBtnClick}
      size={size}
      className={classes.learnBtn}
      //   className={`px-3 py-2 ${
      //     disabled === true
      //       ? classes.root
      //       : // eslint-disable-next-line no-nested-ternary
      //       variant === "contained"
      //       ? `${bgColor} ${textColor}`
      //       : variant === "outlined"
      //       ? `${textColor}`
      //       : variant === "text"
      //       ? `${textColor}`
      //       : ""
      //   }
      // ${muiProps}`}
      sx={sx}
      fullWidth={fullWidth}
      disabled={disabled}
      disableFocusRipple
      disableElevation
    >
      <span style={{ marginRight: 10 }}>{label}</span>

      {children}
      {/* {children} */}
    </Button>
  );
}
