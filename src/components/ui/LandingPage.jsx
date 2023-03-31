import Lottie from "react-lottie";
import React from "react";
import { makeStyles } from "@mui/styles";
import animationData from "../../animations/landinganimation/data.js";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import ButtonArrow from "./ButtonArrow.js";
import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import LearnButton from "../../reusables/LearnButton.jsx";
import { useMediaQuery } from "@mui/material";
import mobileIcon from "../../assets/mobileIcon.svg";
import webIcon from "../../assets/websiteIcon.svg";
import revBackgroundImg from "../../assets/repeatingBackground.svg";
import infoBackgroundImg from "../../assets/infoBackground.svg";
import { Link } from "react-router-dom";
import CallToAction from "./CallToAction.jsx";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  // learnBtn: {
  //   "&.MuiButton-root": {
  //     fontSize: "1rem",
  //     height: 45,
  //     width: 145,
  //     marginRight: 40,
  //     borderWidth: 2,
  //     textTransform: "none",
  //     fontFamily: "Roboto",
  //     fontWeight: "bold",
  //     borderRadius: 50,
  //     // backgroundColor: "#FFBA60",
  //     color: theme.palette.common.blue,
  //     borderColor: theme.palette.common.blue,
  //     // marginTop: "1em",
  //   },
  // },
  estimateBtn: {
    // ...theme.typography.estimate,
    // backgroundColor: theme.palette.common.blue,
    "&.MuiButton-root": {
      borderRadius: 50,
      height: 45,
      width: 145,
      marginRight: 40,
      fontSize: "1rem",
      textTransform: "none",
      fontFamily: "pacifico",
      backgroundColor: "#FFBA60",
      color: "#fff",
      marginBottom: "1em",
    },
    btnContainer: {
      marginTop: "2em",
    },
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  textContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0em",
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0em",
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      p: "25em",
    },
  },
  revBackground: {
    backgroundImage: `url(${revBackgroundImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revCard: {
    position: "absolute",
    boxShadow: "",
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: "0px",
      paddingRight: "0px",
      borderRadius: "0px",
      width: "100%",
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackgroundImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.up("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Grid container direction={"column"} className={classes.mainContainer}>
        <Grid item>
          {/*----------HERO BLOCK---------- */}
          <Grid
            container
            direction={"row"}
            justifyContent="flex-end"
            alignItems={"center"}
            // className={classes.""}
          >
            <Grid sm item className={classes.textContainer}>
              <Typography align="center" variant="h2">
                Bringing West Coast Technology <br /> to the Midwest{" "}
              </Typography>
              <Grid
                container
                justifyContent={"center"}
                className={classes.btnContainer}
              >
                <Grid item>
                  <Button
                    variant="contained"
                    component={Link}
                    to="/estimate"
                    className={classes.estimateBtn}
                  >
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <LearnButton
                    label="Learn more"
                    variant="outlined"
                    sx={{ fontSize: "1rem", height: 45, width: 145 }}
                    component={Link}
                    to="/revolution"
                  >
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </LearnButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid sm item className={classes.animation}>
              <Lottie
                className={classes.animation}
                options={defaultOptions}
                height={"100%"}
                width={"100%"}
              />
            </Grid>
          </Grid>
          {/* Services block */}
          <Grid item>
            <Grid
              container
              direction={"row"}
              className={classes.serviceContainer}
              justifyContent={matches ? "center" : undefined}
            >
              <Grid
                item
                sx={{
                  ml: matches ? 0 : "5em",
                  textAlign: matches ? "center" : undefined,
                }}
              >
                <Typography variant="h4">
                  Custom Software Developement
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                  Save Energy. Save Time. Save Money.
                </Typography>
                <Typography variant="subtitle1">
                  Complete Digital Solutions, from investigation to{" "}
                  <span className={classes.specialText}>celebration</span>
                </Typography>
                <LearnButton
                  label="Learn more"
                  variant="outlined"
                  sx={{
                    fontSize: "0.7rem",
                    height: "35px",
                    padding: "5px",
                  }}
                  component={Link}
                  to="/costomsoftware"
                >
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.blue}
                  />
                </LearnButton>
              </Grid>
              <Grid
                item
                sx={{
                  ml: matches ? 0 : "5em",
                  textAlign: matches ? "center" : undefined,
                }}
              >
                <img
                  className={classes.icon}
                  src={customSoftwareIcon}
                  alt="softwareIcon"
                />
              </Grid>
            </Grid>
          </Grid>
          {/*--------iOS/Android app developement Block */}
          <Grid item>
            <Grid
              container
              direction={"row"}
              className={classes.serviceContainer}
              justifyContent={matches ? "center" : "flex-end"}
              // position={"inherit"}
            >
              <Grid
                item
                sx={{
                  textAlign: matches ? "center" : undefined,
                }}
              >
                <Typography variant="h4">
                  iOS/Android App developement
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                  Extend Functionality. Extend Access. Increase Engagement.
                </Typography>
                <Typography variant="subtitle1">
                  Intigrate your web experience or create Standalone app{" "}
                  {matches ? null : <br />} with either Mobile platform
                </Typography>
                <LearnButton
                  label="Learn more"
                  variant="outlined"
                  sx={{
                    fontSize: "0.7rem",
                    height: "35px",
                    padding: "5px",
                  }}
                  component={Link}
                  to="/mobileapps"
                >
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.blue}
                  />
                </LearnButton>
              </Grid>
              <Grid
                item
                sx={{
                  mr: matches ? 0 : "5em",
                  textAlign: matches ? "center" : undefined,
                  marginBottom: "1em",
                }}
              >
                <img
                  className={classes.icon}
                  style={{}}
                  src={mobileIcon}
                  alt="mobileIcon"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction={"row"}
            className={classes.serviceContainer}
            justifyContent={matches ? "center" : undefined}
          >
            <Grid
              item
              sx={{
                ml: matches ? 0 : "5em",
                textAlign: matches ? "center" : undefined,
              }}
            >
              <Typography variant="h4">Website Developement</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Reach More. Discover More. Sell More.
              </Typography>
              <Typography variant="subtitle1">
                Optimized for Search Enignes, built for speed
              </Typography>
              <LearnButton
                label="Learn more"
                variant="outlined"
                sx={{
                  fontSize: "0.7rem",
                  height: "35px",
                  padding: "5px",
                }}
                component={Link}
                to="/websites"
              >
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </LearnButton>
            </Grid>
            <Grid
              item
              sx={{
                ml: matches ? 0 : "5em",
                textAlign: matches ? "center" : undefined,
              }}
            >
              <img className={classes.icon} src={webIcon} alt="webIcon" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/* The revalution */}
          <Grid
            container
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ height: "100em", mt: "12em" }}
          >
            <Card
              className={classes.revCard}
              sx={{ boxShadow: "1px 1px 1px 1px grey" }}
            >
              <CardContent>
                <Grid
                  container
                  direction={"column"}
                  sx={{ textAlign: "center" }}
                >
                  <Grid item>
                    <Typography variant="h3" gutterBottom>
                      The Revolution
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      Visionory insights coupled with cutting-edge technology is
                      recipe for revolution.
                    </Typography>
                    <LearnButton
                      label="Learn more"
                      variant="outlined"
                      sx={{ fontSize: "1rem", height: 45, width: 145 }}
                      component={Link}
                      to="/revolution"
                    >
                      <ButtonArrow
                        width={15}
                        height={15}
                        fill={theme.palette.common.blue}
                      />
                    </LearnButton>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Box className={classes.revBackground}></Box>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            sx={{ height: "80em" }}
            direction={"row"}
            alignItems={"center"}
            // marginRight={matchesXS ? "3.5em" : undefined}
          >
            <Grid
              item
              container
              sx={{
                position: "absolute",
                textAlign: matchesXS ? "center" : "inherit",
                // marginLeft: matchesXS ? "3.4em" : undefined,
              }}
              spacing={matchesXS ? 10 : 0}
              // direction={matchesXS ? "column" : "row"}
            >
              <Grid
                item
                sm
                xs={12}
                style={{
                  marginLeft: matchesXS ? 0 : matches ? "2em" : "5em",
                  textAlign: matchesXS ? "center" : "left",
                  width: "auto",
                }}
              >
                <Grid container direction={"column"}>
                  <Typography variant="h2" sx={{ color: "#fff" }}>
                    About Us
                  </Typography>
                  <Typography variant="subtitle1">
                    Let's get Personal
                  </Typography>
                  <Grid item>
                    <LearnButton
                      label="Learn more"
                      variant="outlined"
                      sx={{
                        fontSize: "0.7rem",
                        height: "35px",
                        padding: "5px",
                        // color: "white",
                        // borderColor: "white",
                      }}
                      component={Link}
                      to="/about"
                    >
                      <ButtonArrow width={10} height={10} fill="white" />
                    </LearnButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                sm
                xs={12}
                style={{
                  marginRight: matchesXS ? 0 : matches ? "2em" : "5em",
                  textAlign: matchesXS ? "center" : "right",
                }}
              >
                <Grid container direction={"column"}>
                  <Box>
                    <Typography variant="h2" sx={{ color: "#fff" }}>
                      Contact Us
                    </Typography>
                    <Typography variant="subtitle1">
                      Say hello!{" "}
                      <span role="img" aria-label="waving hand"></span> 👋
                    </Typography>
                  </Box>
                  <Grid item>
                    <LearnButton
                      label="Learn more"
                      variant="outlined"
                      sx={{
                        fontSize: "0.7rem",
                        height: "35px",
                        padding: "5px",
                        color: "white",
                        borderColor: "white",
                      }}
                      component={Link}
                      to="/contact"
                    >
                      <ButtonArrow width={10} height={10} fill="white" />
                    </LearnButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Box className={classes.infoBackground}></Box>
          </Grid>
        </Grid>
        <Grid item>
          <CallToAction />
        </Grid>
      </Grid>
    </>
  );
}
