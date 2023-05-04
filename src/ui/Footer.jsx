import { makeStyles } from "@mui/styles";
// import footerAdornment from "../assets/Footer Adornment.svg";
import { Grid, Hidden } from "@mui/material";
import Link from "../Link";
// import facebook from "../assets/facebook.svg";
// import twitter from "../assets/twitter.svg";
// import instagram from "../assets/instagram.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    textAlign: "start",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "18em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "14em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    fontFamily: "Arial",
    color: "white",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    "&.css-13i4rnv-MuiGrid-root": { margin: "4em" },
  },
  icon: {
    width: "4em",
    height: "4em",
    [theme.breakpoints.down("sm")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  iconStyle: {
    position: "absolute",
    marginTop: "-4.5em",
    right: "1.5em",
    [theme.breakpoints.down("sm")]: {
      right: "0.6em",
      marginTop: "-4em",
    },
  },
}));
const footerContent = [
  ["Home"],
  [
    "Services",
    "Custom Softwater Developement",
    "iOS/Android app Developement",
    "Website Developement  ",
  ],
  ["The Revolution", "Vision", "Technology", "Process"],
  ["About Us", "History", "Team"],
  ["Contact Us"],
];
const paths = [
  ["/"],
  ["/services", "/costomsoftware", "/mobileapps", "/websites"],
  ["/revolution", "/revolution", "/revolution", "/revolution"],
  ["/about", "/about", "/about"],
  ["/contact"],
];

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          justifyContent={"center"}
          className={classes.mainContainer}
          position="absolute"
          // columnSpacing={3}
          // p={"2.5em 0"}
        >
          {/* <Grid item>
          <Grid container direction={"column"}>
            <Grid item className={classes.link}>
              HOME
            </Grid>
          </Grid>
        </Grid> */}
          {footerContent?.map((element, i) => (
            <Grid item key={`ops-${i}`} className={classes.gridItem}>
              <Grid container direction={"column"} spacing={2}>
                {element?.map((ele, ind) => (
                  <Grid
                    item
                    key={`key-${ind}`}
                    component={Link}
                    href={paths[i][ind]}
                    className={classes.link}
                  >
                    {ele}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
          {/* <Grid item>
          <Grid container direction={"column"}>
            {footerContent1?.map((element) => (
              <Grid item className={classes.link}>
                {element}
              </Grid>
            ))}
          </Grid>
        </Grid> */}
        </Grid>
      </Hidden>
      <img
        src="/assets/footeradornment.svg"
        alt="footerImg"
        className={classes.adornment}
      />
      <Grid
        container
        className={classes.iconStyle}
        justifyContent={"end"}
        columnGap={2}
      >
        <Grid
          item
          component={"a"}
          href="http://www.facebook.com"
          rel="nooperner noreferrer"
          target="_blank"
        >
          <img src="/assets/facebook.svg" alt="fb" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="http://www.twitter.com"
          rel="nooperner noreferrer"
          target="_blank"
        >
          <img
            src="/assets/twitter.svg"
            alt="twitter"
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={"a"}
          href="http://www.instagram.com"
          rel="nooperner noreferrer"
          target="_blank"
        >
          <img
            src="/assets/instagram.svg"
            alt="insta"
            className={classes.icon}
          />
        </Grid>
      </Grid>
    </footer>
  );
}
