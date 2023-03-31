import React from "react";
import { makeStyles } from "@mui/styles";

import { Grid, Typography, useTheme } from "@mui/material";
import ButtonArrow from "./ButtonArrow.js";
import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import LearnButton from "../../reusables/LearnButton.jsx";
import { useMediaQuery } from "@mui/material";
import mobileIcon from "../../assets/mobileIcon.svg";
import webIcon from "../../assets/websiteIcon.svg";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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
    marginTop: "8em",
    [theme.breakpoints.down("sm")]: {
      p: "25em",
    },
  },
}));

export default function Services() {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
 
  return (
    <>
      <Grid container direction={"column"}>
        <Grid item>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              ml: matches ? 0 : "5em",
              mt: matches ? "1em" : "2em",
              textAlign: matches ? "center" : "start",
            }}
          >
            Services
          </Typography>
        </Grid>
        {/*--------iOS/Android app developement Block */}
        <Grid item>
          <Grid
            container
            direction={"row"}
            className={classes.serviceContainer}
            justifyContent={matches ? "center" : "flex-end"}
            sx={{ mt: matches ? "1em" : "5em" }}
            // position={"inherit"}
          >
            <Grid
              item
              sx={{
                textAlign: matches ? "center" : "start",
                width: matches ? undefined : "35em",
              }}
            >
              <Typography variant="h4">iOS/Android App developement</Typography>
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
                width={"250em"}
              />
            </Grid>
          </Grid>
        </Grid>
        {/*--------costom software---------- */}
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
                textAlign: matches ? "center" : "start",
              }}
            >
              <Typography variant="h4">Custom Software Developement</Typography>
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
        {/* website developement */}
        <Grid item>
          <Grid
            container
            direction={"row"}
            className={classes.serviceContainer}
            justifyContent={matches ? "center" : "flex-end"}
            sx={{ mb: "10em" }}
          >
            <Grid
              item
              sx={{
                textAlign: matches ? "center" : "start",
                width: matches ? undefined : "35em",
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
                mr: matches ? 0 : "5em",
                textAlign: matches ? "center" : undefined,
              }}
            >
              <img
                className={classes.icon}
                src={webIcon}
                alt="webIcon"
                width={"250em"}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
