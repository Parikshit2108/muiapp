import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LearnButton from "../../reusables/LearnButton";
import ButtonArrow from "./ButtonArrow";
import backgroundImg from "../../assets/background.jpg";
import mobileBackgroundImg from "../../assets/mobileBackground.jpg";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
    backgroundAttachment: "fixed",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackgroundImg})`,
      backgroundAttachment: "inherit",
    },
  },
  estimateBtn: {
    "&.MuiButton-root": {
      ...theme.typography.estimate,
      borderRadius: 50,
      height: 60,
      width: 205,
      backgroundColor: theme.palette.common.orange,
      fontSize: "1.5rem",
      marginRight: "5em",
      marginLeft: "2em",
      //  marginLeft: "60em",
      [theme.breakpoints.down("sm")]: {
        marginLeft: 0,
        marginRight: 0,
      },
      //   position: "absolute",
    },
  },
}));

export default function CallToAction() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      style={{ height: "60em" }}
      alignItems={"center"}
      justifyContent={matches ? "center" : "space-between"}
      className={classes.background}
      direction={matches ? "column" : "row"}
    >
      <Grid
        item
        lg={5}
        sm={11}
        textAlign={matches ? "Center" : "start"}
        sx={{ ml: matches ? 0 : "5em" }}
      >
        <Grid container direction={"column"}>
          <Grid item>
            <Typography variant="h2">
              Simple Software <br /> revolutionary result
            </Typography>
            <Typography variant="subtitle2" sx={{ fontSize: "1.5rem" }}>
              Take advantage of 21st Century.
            </Typography>
            <Grid
              container
              justifyContent={matches ? "center" : "underfined"}
              item
            >
              <LearnButton
                label="Learn more"
                variant="outlined"
                sx={{
                  fontSize: "0.7rem",
                  height: "20px",
                  padding: "5px",
                }}
                component={Link}
                to="/revolution"
              >
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </LearnButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        lg={5}
        sm={11}
        textAlign={matches ? "center" : "end"}
        // sx={{ ml: matches ? 0 : "5em" }}
      >
        <Button
          variant="contained"
          component={Link}
          to="/estimate"
          className={classes.estimateBtn}
        >
          Free Estimate
        </Button>
      </Grid>
      <Box></Box>
    </Grid>
  );
}
