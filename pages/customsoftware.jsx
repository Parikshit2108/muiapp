import React from "react";
import Lottie from "react-lottie";
import CallToAction from "../src/ui/CallToAction";
import { makeStyles } from "@mui/styles";

import { Grid, IconButton, Typography, Hidden, useTheme } from "@mui/material";
import Link from "../src/Link";
import { useMediaQuery } from "@mui/material";
import documentAnimationData from "../src/animations/documentsAnimation/data";
import scaleAnimationData from "../src/animations/scaleAnimation/data.json";
import automationAnimation from "../src/animations/automationAnimation/data.json";
import uiAnimation from "../src/animations/uxAnimation/data";
import Head from "next/head";

// import stopwWatch from "../../assets/stopwatch.svg";
// import backArrow from "../../assets/backArrow.svg";
// import forwordArrow from "../../assets/forwardArrow.svg";
// import Root from "../../assets/root.svg";
// import lightBulb from "../../assets/bulb.svg";
// import cash from "../../assets/cash.svg";

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
  arrowContainer: {
    marginTop: "0.5em",
  },
  itemContainer: {
    maxWidth: "40em",
    textAlign: "start",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "80em",
    },
  },
  imgTag: {
    height: "30em",
    width: "30em",
    [theme.breakpoints.down("sm")]: {
      height: "10em",
      width: "10em",
    },
  },
}));

export default function CustomSoftware() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  // animation1
  const documentsOptions = {
    loop: true,
    autoplay: false,
    animationData: documentAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // animation2
  const scaleOptions = {
    loop: true,
    autoplay: false,
    animationData: scaleAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // animation3
  const automationOptions = {
    loop: true,
    autoplay: false,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // animation4
  const uiOptions = {
    loop: true,
    autoplay: false,
    animationData: uiAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {/*======================================Main Grid Container=====================  */}
      <Grid
        container
        direction={"column"}
        // className={classes.rowContainer}
        justifyContent={matchesXS ? "center" : "right"}
      >
        <Head>
          <title key="title">
            {" "}
            Custom Software Developement & Design -Free Estimate{" "}
          </title>{" "}
          <meta
            name="description"
            key="description"
            content="Cutting-Edge custom software developement with best designs from scratch.let us  optimize your bussiness, solving problems instead of creating new ones."
          />
          <meta
            property="og:title"
            content="Bringin West Coast technology to the Midwest |Custom Software Devlopement"
            key="og:title"
          />
          <meta
            property="og:url"
            key="og:url"
            content="arc.com/customsoftware"
          />
          <link rel="canonical" key="canonical" href="arc.com/customsoftware" />
        </Head>
        {/*====================================Custom Software Developement=================================== */}
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
                href="/services"
              >
                <img src="/assets/backArrow.svg" alt="backArrow" />
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
              <Typography align={matchesMD ? "center" : undefined} variant="h1">
                Custom Software Developement
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Whether we’re replacing old software or inventing new solutions,
                Arc Development is here to help your business tackle technology.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Using regular commercial software leaves you with a lot of stuff
                you don’t need, without some of the stuff you do need, and
                ultimately controls the way you work. Without using any software
                at all you risk falling behind competitors and missing out on
                huge savings from increased efficiency.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Our custom solutions are designed from the ground up with your
                needs, wants, and goals at the core. This collaborative process
                produces finely tuned software that is much more effective at
                improving your workflow and reducing costs than generalized
                options.
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
                href="/mobileapps"
              >
                <img src="/assets/forwardArrow.svg" alt="forwordArrow" />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>
        {/*====================================================Icon Container=============================== */}
        <Grid
          item
          container
          direction={"row"}
          sx={{ mt: "15em", mb: "10em" }}
          className={classes.rowContainer}
          textAlign="center"
        >
          <Grid
            item
            container
            direction={"column"}
            md
            sx={{ maxWidth: "40em" }}
          >
            <Grid item>
              <Typography variant="h4">Save Energy</Typography>
            </Grid>
            <Grid item>
              <img src="/assets/bulb.svg" alt="logo" />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction={"column"}
            md
            sx={{
              maxWidth: "40em",
              mt: matchesSM ? "10em" : 0,
              mb: matchesSM ? "10em" : 0,
            }}
            // alignItems={"center"}
          >
            <Grid item>
              <Typography variant="h4">Save Time</Typography>
            </Grid>
            <Grid item>
              <img src="/assets/stopwatch.svg" alt="logo" />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction={"column"}
            md
            sx={{ maxWidth: "40em" }}
          >
            <Grid item>
              <Typography variant="h4">Save Money</Typography>
            </Grid>
            <Grid item>
              <img src="/assets/cash.svg" alt="logo" />
            </Grid>
          </Grid>
        </Grid>
        {/*=====================================Document and Scale=========================================== */}
        <Grid
          item
          container
          direction={"row"}
          justifyContent={"space-around"}
          className={classes.rowContainer}
        >
          <Grid item container className={classes.itemContainer}>
            <Grid item container direction={"column"} xs={12} sm={7}>
              <Grid item>
                <Typography
                  variant="h4"
                  align={matchesSM ? "center" : undefined}
                >
                  Dogital Document & Data
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : undefined}
                >
                  Reduce Errors. Reduce Waste. Reduce Costs.
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : undefined}
                >
                  Billions are spent annually on the purchasing, printing, and
                  distribution of paper. On top of the massive environmental
                  impact this has, it causes harm to your bottom line as well.
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : undefined}
                >
                  By utilizing digital forms and documents you can remove these
                  obsolete expenses, accelerate your communication, and help the
                  Earth.{" "}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Lottie
                options={documentsOptions}
                isStopped={true}
                style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
              />
            </Grid>
          </Grid>
          <Grid item container className={classes.itemContainer}>
            <Grid
              item
              xs={12}
              sm={5}
              justifyContent={matchesSM ? "center" : undefined}
            >
              <Lottie
                options={scaleOptions}
                isStopped={true}
                sx={{ maxHeight: 260, maxWidth: 280 }}
              />
            </Grid>
            <Grid item container direction={"column"} xs={12} sm={7}>
              <Grid item>
                <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                  Scale
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align={matchesSM ? "center" : "right"}
                  paragraph
                >
                  Whether you’re a large brand, just getting started, or taking
                  off right now, our application architecture ensures pain-free
                  growth and reliability.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/*=====================================RootCause=================================== */}
        <Grid
          item
          container
          direction={"row"}
          sx={{ mt: "20em", mb: "20em" }}
          className={classes.rowContainer}
        >
          <Grid item container direction={"column"} alignItems={"center"}>
            <Grid item>
              <img
                src="/assets/root.svg"
                alt="roots"
                // height={"450em"}
                className={classes.imgTag}
                // width={matchesXS ? "250em" : "450em"}
              />
            </Grid>
            <Grid item className={classes.itemContainer}>
              <Typography variant="h4" gutterBottom align="center">
                Root Cause Analysis
              </Typography>
              <Typography variant="body1" gutterBottom paragraph align="center">
                Many problems are merely symptoms of larger, underlying issues.
              </Typography>
              <Typography variant="body1" gutterBottom paragraph align="center">
                We can help you thoroughly examine all areas of your business to
                develop a holistic plan for the most effective implementation of
                technology.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/*=====================================Automation and uiux================================== */}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems={matchesMD ? "center" : undefined}
          justifyContent={"space-around"}
          sx={{ mt: "10" }}
          className={classes.rowContainer}
        >
          <Grid
            item
            container
            className={classes.itemContainer}
            sx={{ mb: matchesMD ? "10em" : "0em" }}
            justifyContent={matchesMD ? "center" : undefined}
            md
            xs={12}
            sm={7}
          >
            <Grid item container direction={"column"} md>
              <Grid item>
                <Typography
                  variant="h4"
                  align={matchesMD ? "center" : undefined}
                >
                  Automation
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesMD ? "center" : undefined}
                >
                  Why waste time when you don’t have to?
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesMD ? "center" : undefined}
                >
                  We can help you identify processes with time or event based
                  actions which can now easily be automated.
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesMD ? "center" : undefined}
                >
                  Increasing efficiency increases profits, leaving you more time
                  to focus on your business, not busywork.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md justifyContent={matchesMD ? "center" : undefined}>
              <Lottie
                options={automationOptions}
                isStopped={true}
                style={{ maxHeight: 290, maxWidth: 280 }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            className={classes.itemContainer}
            justifyContent={matchesMD ? "center" : undefined}
            md
            xs={12}
            sm={7}
          >
            <Grid item md>
              <Lottie
                options={uiOptions}
                isStopped={true}
                style={{ maxHeight: 310, maxWidth: 155 }}
              />
            </Grid>
            <Grid item container direction={"column"} md>
              <Grid item>
                <Typography variant="h4" align={matchesMD ? "center" : "right"}>
                  User Experience Design
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align={matchesMD ? "center" : "right"}
                  paragraph
                >
                  A good design that isn’t usable isn’t a good design.
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align={matchesMD ? "center" : "right"}
                  paragraph
                >
                  So why are so many pieces of software complicated, confusing,
                  and frustrating?
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align={matchesMD ? "center" : "right"}
                  paragraph
                >
                  By prioritizing users and the real ways they interact with
                  technology we’re able to develop unique, personable
                  experiences that solve problems rather than create new ones.
                </Typography>
              </Grid>
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
