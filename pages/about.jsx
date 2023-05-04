import React from "react";
import { makeStyles } from "@mui/styles";
import { Avatar, Grid, Hidden, Typography, useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";

// import yearbook from "../../assets/yearbook.svg";
// import puppy from "../../assets/puppy.svg";
// import profile from "../../assets/image.jpeg";
// import history from "../../assets/history.svg";
import CallToAction from "../src/ui/CallToAction";
import Head from "next/head";
const useStyles = makeStyles((theme) => ({
  statement: {
    fontStyle: "italic",
    fontWeight: "300",
    fontSize: "1.5rem",
    maxWidth: "50em",
    lineHeight: "1.4",
  },
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
  avtar: {
    height: "25em",
    width: "25em",
    [theme.breakpoints.down("sm")]: {
      height: "20em",
      width: "20em",
      maxHeight: 300,
      maxWidth: 300,
    },
  },
}));
export default function About() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXL = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Grid container direction="column">
        <Head>
          <title key="title">
            {" "}
            About us - History & Team | Arc Developement{" "}
          </title>{" "}
          <meta
            name="description"
            key="description"
            content="We provide the fastest, most modern, affordable,and asthetic software design and developement services in India. get a free onlice estimat"
          />
          <meta
            property="og:title"
            content="Bringin West Coast technology to the Midwest |About Us"
            key="og:title"
          />
          <meta property="og:url" key="og:url" content="arc.com/about" />
          <link rel="canonical" key="canonical" href="arc.com/about" />
        </Head>
        <Grid item className={classes.rowContainer} sx={{ mt: "2em" }}>
          <Typography variant="h1" align="center">
            About Us
          </Typography>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          className={classes.rowContainer}
          sx={{ mt: "3em" }}
        >
          <Typography variant="h4" className={classes.statement} align="center">
            Wether it be person to person, business to consumer, or an
            individual to their interests, technology is meant to bring us
            closer to what we care about in the best way possible. Arc
            Development will use that principle to provide fast, modern,
            inexpensive, and aesthetic software to the Midwest and beyondography{" "}
          </Typography>
        </Grid>
        {/* ===============================history======================= */}
        <Grid
          item
          container
          className={classes.rowContainer}
          direction={matchesMD ? "column" : " row"}
          alignItems={matchesMD ? "center" : undefined}
          justifyContent={matchesXL ? "space-evenly" : "space-around"}
          sx={{ mt: "10em", mb: "10em" }}
        >
          <Grid item>
            <Grid
              item
              container
              direction="column"
              lg
              style={{ maxWidth: "35em" }}
            >
              <Grid item>
                <Typography
                  variant="h4"
                  gutterBottom
                  align={matchesMD ? "center" : undefined}
                >
                  History
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesMD ? "center" : undefined}
                  sx={{ fontWeight: "700", fontStyle: "italic" }}
                >
                  We are the new kid on the block
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesMD ? "center" : undefined}
                  // sx={{ fontWeight: "700", fontStyle: "italic" }}
                >
                  Founded in 2019, we’re ready to get our hands on the world’s
                  business problems.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesMD ? "center" : undefined}
                  // sx={{ fontWeight: "700", fontStyle: "italic" }}
                >
                  It all started with one question: Why aren’t all businesses
                  using available technology? There are many different answers
                  to that question: economic barriers, social barriers,
                  educational barriers, and sometimes institutional barriers.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesMD ? "center" : undefined}
                  // sx={{ fontWeight: "700", fontStyle: "italic" }}
                >
                  We aim to be a powerful force in overcoming these obstacles.
                  Recent developments in software engineering and computing
                  power, compounded by the proliferation of smart phones, has
                  opened up infinite worlds of possibility. Things that have
                  always been done by hand can now be done digitally and
                  automatically, and completely new methods of interaction are
                  created daily. Taking full advantage of these advancements is
                  the name of the game.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid item container justifyContent="center" lg>
              <img
                src="/assets/history.svg"
                alt="history"
                width={matchesMD ? "100%" : undefined}
                style={{ maxHeight: matchesMD ? 300 : "22em" }}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* ===============================Team========================== */}
        <Grid
          item
          container
          className={classes.rowContainer}
          direction="column"
          alignItems={"center"}
          sx={{ mb: "15em" }}
        >
          <Grid item>
            <Typography variant="h4" gutterBottom align="center">
              {" "}
              Team
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph align="center">
              Parikshit Patil,Founder
            </Typography>
            <Typography variant="body1" paragraph align="center">
              I started coding when i was 10 year old
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              alt="founder"
              src="/assets/image.jpeg"
              className={classes.avtar}
            />
          </Grid>
          <Grid
            item
            container
            justifyContent={matchesMD ? "center" : undefined}
          >
            <Grid
              item
              container
              direction="column"
              lg
              sx={{ mb: { md: "2.5em" } }}
              alignItems={matchesMD ? "center" : undefined}
            >
              <Hidden lgUp>
                <Grid item lg sx={{ maxWidth: "45em", padding: "1.25em" }}>
                  <Typography variant="body1" align="center" paragraph>
                    I taught myself basic coding from a library book in third
                    grade, and ever since then my passion has solely been set on
                    learning — learning about computers, learning mathematics
                    and philosophy, studying design, always just learning.
                  </Typography>
                  <Typography variant="body1" align="center" paragraph>
                    Now I’m ready to apply everything I’ve learned, and to help
                    others with the
                  </Typography>
                </Grid>
              </Hidden>
              <Grid item>
                <img
                  src="/assets/yearbook.svg"
                  width={matchesMD ? "100%" : undefined}
                  alt="yearBook"
                />
              </Grid>
              <Grid item>
                <Typography variant={"caption"}>
                  {" "}
                  a page from my Sephomore yearbook
                </Typography>
              </Grid>
              {/*  */}
            </Grid>
            <Hidden mdDown>
              <Grid item lg sx={{ maxWidth: "45em", padding: "1.25em" }}>
                <Typography variant="body1" align="center" paragraph>
                  I taught myself basic coding from a library book in third
                  grade, and ever since then my passion has solely been set on
                  learning — learning about computers, learning mathematics and
                  philosophy, studying design, always just learning.
                </Typography>
                <Typography variant="body1" align="center" paragraph>
                  Now I’m ready to apply everything I’ve learned, and to help
                  others with the
                </Typography>
              </Grid>
            </Hidden>
            <Grid
              item
              container
              direction="column"
              lg
              alignItem={matchesMD ? "center" : "flex-end"}
            >
              <Grid item>
                <img
                  src="/assets/puppy.svg"
                  width={matchesMD ? "100%" : undefined}
                  alt="puppyimage"
                />
              </Grid>
              <Grid item>
                <Typography variant={"caption"}>
                  {" "}
                  my kjbbksjkn kjnlknddslnl nksdnk
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
