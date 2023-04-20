import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "@mui/styles";
import { Grid, IconButton, Typography, Hidden, useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import backArrow from "../../assets/backArrow.svg";
import forwordArrow from "../../assets/forwardArrow.svg";
import swiss from "../../assets/swissKnife.svg";
import access from "../../assets/extendAccess.svg";
import engagement from "../../assets/increaseEngagement.svg";
import animationData from "../../animations/integrationAnimation/data.json";
import CallToAction from "./CallToAction";
const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    // paddingTop: "2em",
    // paddingBottom: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1em",
      paddingRight: "1em",
    },
  },
  headings: {
    maxWidth: "40em",
  },
}));
export default function MobileApps() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
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
      <Grid container direction={"column"}>
        <Grid
          item
          container
          direction={"row"}
          justifyContent={matchesMD ? "center" : undefined}
          className={classes.rowContainer}
        >
          {/*=============================ios/android developement===================== */}
          <Hidden mdDown>
            <Grid
              item
              className={classes.arrowContainer}
              sx={{ mr: "1em", ml: "-3.5em" }}
            >
              <IconButton
                sx={{ backgroundColor: "transparent" }}
                component={Link}
                to="/costomsoftware"
              >
                <img src={backArrow} alt="backArrow" />
              </IconButton>
            </Grid>
          </Hidden>

          <Grid
            item
            container
            direction={"column"}
            textAlign="start"
            className={classes.headings}
          >
            <Grid item>
              <Typography align={matchesMD ? "center" : undefined} variant="h2">
                iOS/ Android App Developement
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                {" "}
                Mobile apps allow you to take your tools on the go.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Whether you want an app for your customers, employees, or
                yourself, we can build cross-platform native solutions for any
                part of your business process. This opens you up to a whole new
                world of possibilities by taking advantage of phone features
                like the camera, GPS, push notifications, and more.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Convenience. Connection. options.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                We create exactly what you what, exactly how you want it
              </Typography>
            </Grid>
          </Grid>
          {/* hiddne for md */}
          <Hidden mdDown>
            <Grid item>
              <IconButton
                sx={{ backgroundColor: "transparent" }}
                component={Link}
                to="/websites"
              >
                <img src={forwordArrow} alt="forwordArrow" />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>
        {/*=============================intigration===================== */}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          style={{ marginTop: "15em", marginBottom: "15em" }}
          className={classes.rowContainer}
        >
          <Grid item container direction={"column"} md>
            <Grid item>
              <Typography
                align={matchesMD ? "" : "left"}
                variant="h4"
                gutterBottom
              >
                Integration
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesMD ? "" : "left"}
                variant="body1"
                paragraph
              >
                Our technology enables an innate interconnection between web and
                mobile applications, putting everything you need right in one
                convenient place.
              </Typography>
              <Typography
                align={matchesMD ? "" : "left"}
                variant="body1"
                paragraph
              >
                This allows you to extend your reach, reinvent interactions, and
                develop a stronger relationship with your users than ever
                before.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={defaultOptions}
              isStopped={true}
              style={{ maxWidth: "20em" }}
            />
          </Grid>
          <Grid item container direction={"column"} md>
            <Grid item>
              <Typography
                align={matchesMD ? "" : "right"}
                variant="h4"
                gutterBottom
              >
                Simultaneous Platform Suport
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesMD ? "" : "right"}
                variant="body1"
                paragraph
              >
                Our cutting-edge development process allows us to create apps
                for iPhone, Android, and tablets — all at the same time.
              </Typography>
              <Typography
                align={matchesMD ? "" : "right"}
                variant="body1"
                paragraph
              >
                This significantly reduces costs and creates a more unified
                brand experience across all devices.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/*============================= icon container===================================== */}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          className={classes.rowContainer}
          style={{ marginBottom: "15em" }}
        >
          <Grid
            item
            container
            direction={"column"}
            alignItems="center"
            md
            sx={{ mt: matchesMD ? "5em" : 0, mb: matchesMD ? "10em" : 0 }}
          >
            <Grid item>
              <Typography
                align={matchesMD ? "center" : "center"}
                variant="h4"
                gutterBottom
              >
                Extend Functionality
              </Typography>
            </Grid>
            <Grid item>
              <img src={swiss} alt="swiss arey knife" />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction={"column"}
            alignItems="center"
            md
            sx={{ mb: matchesMD ? "10em" : 0 }}
          >
            <Grid item>
              <Typography
                align={matchesMD ? "center" : "center"}
                variant="h4"
                gutterBottom
              >
                Extend Access
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={access}
                alt="Extend Accses"
                style={{ width: matchesSM ? "15em" : "20em" }}
              />
            </Grid>
          </Grid>
          <Grid item container direction={"column"} alignItems="center" md>
            <Grid item>
              <Typography
                align={matchesMD ? "center" : "center"}
                variant="h4"
                gutterBottom
              >
                Increase Engagement
              </Typography>
            </Grid>
            <Grid item>
              <img src={engagement} alt="app with Notification" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <CallToAction />
        </Grid>
      </Grid>
    </>
  );
}
