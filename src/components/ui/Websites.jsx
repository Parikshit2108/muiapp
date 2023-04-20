import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "@mui/styles";
import { Grid, IconButton, Typography, Hidden, useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import backArrow from "../../assets/backArrow.svg";
import forwordArrow from "../../assets/forwardArrow.svg";
import analytics from "../../assets/analytics.svg";
import seo from "../../assets/seo.svg";
import outreach from "../../assets/outreach.svg";
import ecommers from "../../assets/ecommerce.svg";

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
  paraContainer: {
    maxWidth: "30em",
  },
}));
export default function Websites() {
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
      <Grid container direction={"row"}>
        <Grid
          item
          container
          direction={"row"}
          justifyContent={matchesMD ? "center" : undefined}
          className={classes.rowContainer}
        >
          <Hidden mdDown>
            <Grid
              item
              className={classes.arrowContainer}
              sx={{ mr: "1em", ml: "-3.5em" }}
            >
              <IconButton
                sx={{ backgroundColor: "transparent" }}
                component={Link}
                to="/mobileapps"
              >
                <img src={backArrow} alt="back to service page" />
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
                Website Developement
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Having a website is a necessity in today’s business world. They
                give you one central, public location to let people know who you
                are, what you do, and why you’re the best at it.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                From simply having your hours posted to having a full fledged
                online store, making yourself as accessible as possible to users
                online drives growth and enables you to reach new customers.
              </Typography>
            </Grid>
          </Grid>
          {/* hiddne for md */}
          <Hidden mdDown>
            <Grid item>
              <IconButton
                sx={{ backgroundColor: "transparent" }}
                component={Link}
                to="/services"
              >
                <img src={forwordArrow} alt="forword to services page" />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>
        {/*===================================analytics============================ */}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems={"center"}
          className={classes.rowContainer}
          sx={{ mt: "15em" }}
        >
          <Grid item>
            <Grid item container direction={"column"}>
              <Grid item>
                <Typography variant="h4" gutterBottom>
                  Analytics
                </Typography>
              </Grid>
              <Grid item>
                <img
                  src={analytics}
                  alt="Analytics Graph"
                  width="100%"
                  height="100%"
                  style={{ marginLeft: { xs: 0, lg: "-2.75em" } }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.paraContainer}>
            <Typography
              variant="body1"
              gutterBottom
              paragraph
              textAlign={matchesMD ? "center" : "left"}
            >
              Knowledge is power, and data is 21st Century gold. Analyzing this
              data can reveal hidden patterns and trends in your business,
              empowering you to make smarter decisions with measurable effects.
            </Typography>
          </Grid>
        </Grid>
        {/*===================================E-Commers============================ */}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems={"center"}
          className={classes.rowContainer}
          justifyContent={"flex-end"}
          sx={{ mb: "15em", mt: "15em" }}
        >
          <Grid item>
            <Grid item container direction={"column"}>
              <Grid item>
                <Typography variant="h4" align="center" gutterBottom>
                  E-Commerce
                </Typography>
              </Grid>
              <Grid item>
                <img
                  src={ecommers}
                  alt="Analytics Graph"
                  width="100%"
                  height="100%"
                  style={{ marginLeft: { xs: 0, lg: "-2.75em" } }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ ml: "1em" }} className={classes.paraContainer}>
            <Typography
              variant="body1"
              gutterBottom
              paragraph
              textAlign={matchesMD ? "center" : "left"}
              //   className={classes.paraContainer}
            >
              It’s no secret that people like to shop online.
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              paragraph
              textAlign={matchesMD ? "center" : "left"}
              //   className={classes.paraContainer}
            >
              In 2017 over $2.3 trillion was spent in e-commerce, and it’s time
              for your slice of that pie.
            </Typography>
          </Grid>
        </Grid>
        {/*===================================Outreach============================ */}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems={"center"}
          className={classes.rowContainer}
        >
          <Grid item>
            <Grid item container direction={"column"}>
              <Grid item>
                <Typography variant="h4" gutterBottom>
                  Outreach
                </Typography>
              </Grid>
              <Grid item>
                <img
                  src={outreach}
                  alt="Analytics Graph"
                  width="100%"
                  height="100%"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            className={classes.paraContainer}
            style={{ marginLeft: "1em" }}
          >
            <Typography
              variant="body1"
              gutterBottom
              paragraph
              textAlign={matchesMD ? "center" : "left"}
            >
              Draw people in with a dazzling website. Showing off your products
              online is a great way to help customers decide what’s right for
              them before visiting in person
            </Typography>
          </Grid>
        </Grid>
        {/* ===============================SEO=========================*/}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems={"center"}
          className={classes.rowContainer}
          justifyContent={"flex-end"}
          sx={{ mb: "15em", mt: "15em" }}
        >
          <Grid item>
            <Grid item container direction={"column"}>
              <Grid item>
                <Typography variant="h4" align="center" gutterBottom>
                  Search Engine <br /> Optimization
                </Typography>
              </Grid>
              <Grid item>
                <img
                  src={seo}
                  alt="seo Graph"
                  width="100%"
                  height="100%"
                  style={{ marginLeft: { xs: 0, lg: "-2.75em" } }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.paraContainer} sx={{ ml: "1em" }}>
            <Typography
              variant="body1"
              gutterBottom
              paragraph
              textAlign={matchesMD ? "center" : "left"}
              //   className={classes.paraContainer}
            >
              How often have you ever been to the second page of Google results?
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              paragraph
              textAlign={matchesMD ? "center" : "left"}
              //   className={classes.paraContainer}
            >
              If you’re like us, probably never.
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              paragraph
              textAlign={matchesMD ? "center" : "left"}
              //   className={classes.paraContainer}
            >
              Customers don’t go there either, so we make sure your website is
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <CallToAction />
        </Grid>
      </Grid>
    </>
  );
}
