import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  styled,
  SwipeableDrawer,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

// import logo from "../../assets/logo.svg";
import Link from "../Link";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles((theme) => ({
  appbar: {
    "&.MuiAppBar-root": { zIndex: 1301 },
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "0.5em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1em",
    },
  },
  logo: {
    height: "6em",
    textTransform: "none",

    [theme.breakpoints.down("md")]: {
      height: "5em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  logoContainer: {
    padding: 0,
  },
  tabsContainer: {
    marginLeft: "auto",
  },
  tabsStyle: {
    ...theme.typography.tabsStyle,
    // color:"orange"
  },
  menuItem: {
    ...theme.typography.tabsStyle,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIcon: {
    marginLeft: "auto",
  },
  button: {
    // ...theme.typography.estimate,
  },
  drawer: {
    "&.MuiDrawer-paper": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  drawerItme: {
    textTransform: "none",
    fontWeight: "700",
    fontSize: "1rem",
    fontFamily: "Raleway",
    color: "#fff",
    minWidth: 10,
    opacity: 0.8,
    // marginLeft: "25px",
    // color: "#ffff",
  },
  estimate: {
    "&.MuiListItem-root": { backgroundColor: "#FFBA60" },
  },
  liactive: {
    "&.Mui-selected": {
      scale: 1.2,
      marginLeft: "1em",
      backgroundColor: "red",
      opacity: 1,
    },
  },

  // menu: {
  //   backgroundColor: theme.palette.common.orange,
  //   color: "white",
  // },
}));
const EstimateButton = styled(Button)(() => ({
  borderRadius: "50px",
  marginLeft: "50px",
  marginRight: "25px",
  fontSize: "1rem",
  textTransform: "none",
  fontFamily: "pacifico",
  height: "45px",
  backgroundColor: "#FFBA60",
  color: "#fff",
}));

export default function Header() {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  //=============================================================
  const theme = useTheme();
  const classes = useStyles();
  // const matches = useMediaQuery(theme.breakpoints.down("md"));
  //===================================================================
  const handleChange = (e, value) => {
    // e.preventDefault();
    setValue(value);
  };

  const handleClick = (e, index) => {
    if (index === 1) {
      setAnchorEl(e.currentTarget);
      setOpenMenu(true);
    }
    setValue(index);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  useEffect(() => {
    paths.map((element, index) => {
      return window.location.pathname === element ? setValue(index) : null;
    });
  }, []);

  const tabs = [
    "Home ",
    "Services",
    "The Revolution",
    "About us",
    "Contact Us",
  ];
  const paths = [
    "/",
    "/services",
    "/revolution",
    "/about",
    "/contact",
    "/estimate",
  ];
  const listItem = [
    "Home",
    "Services",
    "The Revolution",
    "About Us",
    "Contact Us",
    "Free Estimate",
  ];
  const tabss = (
    <React.Fragment>
      <Tabs value={value} className={classes.tabsContainer}>
        {tabs?.map((tab, index) => (
          <Tab
            className="main"
            onClick={(e) => {
              handleChange(e, index);
            }}
            onMouseOver={(e) => {
              handleClick(e, index);
              handleChange(e, index);
            }}
            component={Link}
            href={paths[index]}
            color="#ffff"
            key={index}
            label={tab}
            style={{
              textTransform: "none",
              fontWeight: "700",
              fontSize: "1rem",
              fontFamily: "Raleway",
              color: "#fff",
              minWidth: 10,
              marginLeft: "25px",
            }}
            aria-owns={index === 1 && anchorEl ? "simple-menu" : undefined}
            aria-haspopup={index === 1 && anchorEl ? "true" : undefined}
          ></Tab>
        ))}
      </Tabs>
      <EstimateButton component={Link} href="/estimate">
        Free Estimate
      </EstimateButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={value === 1 && { onMouseLeave: handleClose }}
        classes={{ root: classes.menu }}
        // className="menu"
        style={{
          zIndex: 1302,
        }}
      >
        <MenuItem
          onClick={handleClose}
          component={Link}
          href="/services"
          classes={{ root: classes.menuItem }}
        >
          Services
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          href="/costomsoftware"
          classes={{ root: classes.menuItem }}
        >
          Custom Software Development
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          href="/mobileapps"
          classes={{ root: classes.menuItem }}
        >
          iOS/Android App Development
        </MenuItem>
        <MenuItem
          sx={{ height: "50px", width: "50px" }}
          onClick={handleClose}
          component={Link}
          href="/websites"
          classes={{ root: classes.menuItem }}
        >
          Website Development
        </MenuItem>
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        open={openDrawer}
        onOpen={() => {
          setOpenDrawer(true);
        }}
        onClose={() => {
          setOpenDrawer(false);
        }}
        disableDiscovery={iOS}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin}></div>
        <List disablePadding>
          {listItem?.map((ele, i) => (
            <ListItem
              key={`ops${i}`}
              onClick={() => {
                setOpenDrawer(false);
                setValue(i);
              }}
              divider
              button
              className={i === 5 ? classes.estimate : ""}
              classes={{ selected: classes.liactive }}
              component={Link}
              href={paths[i]}
              selected={value === i}
            >
              <ListItemText className={classes.drawerItme} disableTypography>
                {ele}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIcon}
        sx={{ ml: "auto" }}
        disableRipple
        onClick={() => {
          setOpenDrawer(!openDrawer);
        }}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <>
      <AppBar position="fixed" color="primary" className={classes.appbar}>
        <Toolbar disableGutters>
          <Button
            component={Link}
            href="/"
            disableRipple
            className={classes.logoContainer}
            style={{ p: 0, textDecoration: "none" }}
          >
            <svg
              id="Layer_1"
              className={classes.logo}
              style={{
                height: { md: "5em", xs: "4.5", lg: "6em" },
                textTransform: "none",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 480 139"
            >
              <style>{`.st0{fill:none}.st1{fill:#fff}.st2{font-family:Raleway; font-weight: 300;}.st6{fill:none;stroke:#000;stroke-width:3;stroke-miterlimit:10`}</style>
              <path d="M448.07-1l-9.62 17.24-8.36 14.96L369.93 139H-1V-1z" />
              <path className="st0" d="M-1 139h479.92v.01H-1z" />
              <text
                transform="translate(261.994 65.233)"
                className="st1 st2"
                fontSize="57"
              >
                Arc
              </text>
              <text
                transform="translate(17.692 112.015)"
                className="st1 st2"
                fontSize="54"
              >
                Development
              </text>
              <path
                className="st0"
                d="M382.44 116.43l47.65-85.23 8.36-14.96M369.83 139l-.01.01L362 153"
              />
              <path
                d="M438.76 15.76l-56.42 100.91c-12.52-10.83-20.45-26.82-20.45-44.67 0-32.58 26.42-59 59-59 6.23 0 12.24.97 17.87 2.76z"
                fill="#0b72b9"
              />
              <path d="M479.89 72c0 32.58-26.42 59-59 59-14.73 0-28.21-5.4-38.55-14.33l56.42-100.91c23.85 7.57 41.13 29.89 41.13 56.24z" />
              <g id="Group_186" transform="translate(30.153 11.413)">
                <g id="Group_185">
                  <g id="Words">
                    <path
                      id="Path_59"
                      className="st1"
                      d="M405.05 14.4l-.09 80.38-7.67-.01.06-52.25-29.4 52.21-7.94-.01 45.04-80.32z"
                    />
                  </g>
                </g>
              </g>
              <path
                className="st0"
                d="M457-17l-8.93 16-9.62 17.24-8.36 14.96L369.93 139l-.01.01L361 155"
              />
            </svg>
          </Button>
          <Hidden mdDown>{tabss}</Hidden>
          <Hidden lgUp>{drawer}</Hidden>
          {/* {matches ? drawer : tabss} */}
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin}></div>
    </>
  );
}
