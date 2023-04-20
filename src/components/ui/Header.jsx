import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
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

import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
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
    [theme.breakpoints.down("md")]: {
      height: "5em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "4.5em",
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
  const matches = useMediaQuery(theme.breakpoints.down("md"));
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
            to={paths[index]}
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
      <EstimateButton component={Link} to="/estimate">
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
          to="/services"
          classes={{ root: classes.menuItem }}
        >
          Services
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          to="/costomsoftware"
          classes={{ root: classes.menuItem }}
        >
          Custom Software Development
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          to="/mobileapps"
          classes={{ root: classes.menuItem }}
        >
          iOS/Android App Development
        </MenuItem>
        <MenuItem
          sx={{ height: "50px", width: "50px" }}
          onClick={handleClose}
          component={Link}
          to="/websites"
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
              to={paths[i]}
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
            to="/"
            disableRipple
            className={classes.logoContainer}
            sx={{ p: 0 }}
          >
            <img src={logo} alt="companyLogo" className={classes.logo} />
          </Button>
          {matches ? drawer : tabss}
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin}></div>
    </>
  );
}
