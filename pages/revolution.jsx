import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography, useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Lottie from "react-lottie";
import technologyAnim from "../src/animations/technologyAnimation/data.json";
// import vison from "../../assets/vision.svg";
// import consultaion from "../../assets/consultationIcon.svg";
// import mockup from "../../assets/mockupIcon.svg";
// import review from "../../assets/reviewIcon.svg";
// import design from "../../assets/designIcon.svg";
// import build from "../../assets/buildIcon.svg";
// import launch from "../../assets/launchIcon.svg";
// import maintain from "../../assets/maintainIcon.svg";
// import iterate from "../../assets/iterateIcon.svg";

import { paraData, headings } from "../src/data/data";
import CallToAction from "../src/ui/CallToAction";
import Head from "next/head";

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
  //   animation: {
  //     maxWidth: "40em",
  //     minWidth: "21em",
  //     marginTop: "2em",
  //     marginLeft: "10%",
  //     [theme.breakpoints.down("sm")]: {
  //       maxWidth: "30em",
  //     },
  //   },
}));

export default function Revolution() {
  const classes = useStyles();
  const theme = useTheme();
  let imgArray = [
    "/assets/consultationIcon.svg",
    "/assets/mockupIcon.svg",
    "/assets/reviewIcon.svg",
    "/assets/designIcon.svg",
    "/assets/reviewIcon.svg",
    "/assets/buildIcon.svg",
    "/assets/launchIcon.svg",
    "/assets/maintainIcon.svg",
    "/assets/iterateIcon.svg",
  ];

  let colorArray = [
    "#838383",
    "#ff7372",
    "#39B54A",
    "#A67C52",
    "#39B54A",
    "#FBB03B",
    "#C1272D",
    "#8E45CE",
    "#29ABE2",
  ];
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: technologyAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  // const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <>
      <Grid container direction={"column"} alignItems={"center"}>
        <Head>
          <title key="title">
            The Revolution-Cutting-Edge Software | Arc Developement
          </title>
          <meta
            name="description"
            key="description"
            content="Visionary insights with cutting edge technology ,is a recipe for revolution get a online estimate easily"
          />
          <meta
            property="og:title"
            content="Bringin West Coast technology to the Midwest | The Revolution"
            key="og:title"
          />
          <meta property="og:url" key="og:url" content="arc.com/revolution" />
          <link rel="canonical" key="canonical" href="arc.com/revolution" />
        </Head>
        <Grid item className={classes.rowContainer} style={{ mt: "2em" }}>
          <Typography
            variant="h1"
            sx={{ fontFamily: "pacifico" }}
            align={matchesMD ? "center" : undefined}
          >
            The Revolution
          </Typography>
        </Grid>
        {/* ========================vision======================= */}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems={"center"}
          className={[classes.rowContainer, "main"]}
          sx={{ mt: "10em" }}
        >
          <Grid item lg sx={{ maxWidth: "40em" }}>
            <img
              src="/assets/vision.svg"
              alt="mountain through binaculors"
              width={"100%"}
              height={"100%"}
              style={{
                maxWidth: matchesSM ? 300 : "40em",
                mb: matchesMD ? "5em" : 0,
              }}
              //mr:matchesMD?0:"5em"
            />
          </Grid>
          <Grid
            item
            container
            direction={"column"}
            justifyContent={matchesMD ? "center" : undefined}
            lg
            sx={{ maxWidth: "40em", ml: { sm: 0, lg: "5em" } }}
          >
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Vision
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesMD ? "center" : "left"}
                variant="body1"
                paragraph
              >
                The rise of computers, and subsequently the Internet, has
                completely altered every aspect of human life. This has
                increased our comfort, broadened our connections, and reshaped
                how we view the world.
              </Typography>
              <Typography
                align={matchesMD ? "center" : "left"}
                variant="body1"
                paragraph
              >
                hat once was confined to huge rooms and teams of engineers now
                resides in every single one of our hands. Harnessing this
                unlimited potential by using it to solve problems and better
                lives is at the heart of everything we do.
              </Typography>
              <Typography
                align={matchesMD ? "center" : "left"}
                variant="body1"
                paragraph
              >
                We want to help businesses capitalize on the latest and greatest
                technology. The best way to predict the future is to be the one
                building it, and we want to help guide the world into this next
                chapter of technological expansion, exploration, and innovation.
              </Typography>
              <Typography
                align={matchesMD ? "center" : "left"}
                variant="body1"
                paragraph
              >
                By holding ourselves to rigorous standards and pristine quality,
                we can ensure you have the absolute best tools necessary to
                thrive in this new frontier.
              </Typography>
              <Typography
                align={matchesMD ? "center" : "left"}
                variant="body1"
                paragraph
              >
                We see a future where every individual has personalized software
                custom tailored to their lifestyle, culture, and interests,
                helping them.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* ========================== technology=========================== */}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          className={classes.rowContainer}
          sx={{ mt: "10em", mb: "10em" }}
        >
          <Grid
            item
            container
            direction={"column"}
            lg
            style={{ maxWidth: "40em" }}
          >
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Technology
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesMD ? "center" : "left"}
                variant="body1"
                paragraph
              >
                In 2013, Facebook invented a new way of building websites. This
                new system, React.js, completely revolutionizes the process and
                practice of website development.
              </Typography>
              <Typography
                align={matchesMD ? "center" : "left"}
                variant="body1"
                paragraph
              >
                Instead of chaining together long individual pages, like
                traditional websites, React websites are built with little
                chunks of code called components. These components are faster,
                easier to maintain, and are easily reused and customized, each
                serving a singular purpose
              </Typography>
              <Typography
                align={matchesMD ? "center" : "left"}
                variant="body1"
                paragraph
              >
                Two years later they shocked the world by releasing a similar
                system, React Native, for producing iOS and Android apps.
                Instead of having to master two completely separate development
                platforms, you can leverage the knowledge you already possessed
                from building websites and reapply it directly! This was a huge
                leap forward.
              </Typography>
              <Typography
                align={matchesMD ? "center" : "left"}
                variant="body1"
                paragraph
              >
                This technology is now being used by companies like AirBnB,
                Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when
                Facebook purchased Instagram large portions of it were even
                rebuilt using React.
              </Typography>
              <Typography
                align={matchesMD ? "center" : "left"}
                variant="body1"
                paragraph
              >
                Developers have since built on top of these systems by
                automating project setup and deployment, allowing creators to
                focus as much as possible on their work itself.
              </Typography>
              <Typography
                align={matchesMD ? "center" : "left"}
                variant="body1"
                paragraph
              >
                These technical advancements translate into savings by
                significantly reducing the workload and streamlining the
                workflow for developing new pieces of software, while also
                lowering the barrier to entry for mobile app development.
              </Typography>
              <Typography
                align={matchesMD ? "center" : "left"}
                variant="body1"
                paragraph
              >
                This puts personalization in your pocket — faster, better, and
                more affordable than ever before.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            justifyContent={matchesMD ? "center" : "flex-end"}
            sx={{ ml: matchesMD ? 0 : "5em" }}
            lg
          >
            <Lottie
              //   className={classes.animation}
              options={defaultOptions}
              height={"75%"}
              width={"100%"}
              isStopped={true}
              style={{ maxWidth: "40em", margin: 0 }}
            />
          </Grid>
        </Grid>
        {/* ==============================process======================= */}
        <Grid
          item
          container
          direction={"row"}
          justifyContent={"center"}
          className={classes.rowContainer}
        >
          <Grid item>
            <Typography variant="h1" gutterBottom>
              Process
            </Typography>
          </Grid>
        </Grid>
        {/* process maping */}
        {paraData?.map((arr, index) => (
          <Grid
            item
            container
            direction={matchesMD ? "column" : "row"}
            justifyContent={"center"}
            className={classes.rowContainer}
            sx={{ backgroundColor: colorArray[index], height: "90em" }}
            key={`G${index}`}
          >
            <Grid
              item
              container
              direction={"column"}
              lg
              alignItems={matchesMD ? "center" : undefined}
              style={{ maxWidth: "40em" }}
            >
              <Grid item>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ color: "#000", mt: "5em" }}
                >
                  {headings[index]}
                </Typography>
              </Grid>
              {arr.map((str, idx) => (
                <Grid item key={`typo${idx}`}>
                  <Typography
                    variant="body1"
                    style={{ color: "#ffff", maxWidth: "20em" }}
                    gutterBottom
                    paragraph
                    align={matchesMD ? "center" : "left"}
                  >
                    {str}
                  </Typography>
                </Grid>
              ))}
            </Grid>
            <Grid
              item
              lg
              sx={{ alignSelf: "center" }}
              maxHeight={"90em"}
              textAlign={"center"}
            >
              <img
                src={imgArray[index]}
                alt={headings[index]}
                // width="100vw"
                width={matchesMD ? "70%" : ""}
                height="100%"
                className={index === 3 ? "designImg" : undefined}
                sx={{ maxWidth: matchesMD ? 300 : 700 }}
              />
            </Grid>
          </Grid>
        ))}
        <Grid item>
          <CallToAction />
        </Grid>
      </Grid>
    </>
  );
}
