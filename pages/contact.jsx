import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  Grid,
  Snackbar,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useMediaQuery } from "@mui/material";
// // import Background from "../../assets/background.jpg";

// // import mobileBackgroundImg from "../../assets/mobileBackground.jpg";
// import airplane from "../../assets/send.svg";
// import phoneIcon from "../../assets/phone.svg";
// import emailIcon from "../../assets/email.svg";
import { useState } from "react";
import ButtonArrow from "../src/ui/ButtonArrow";
import Link from "../src/Link";
import LearnButton from "../src/data/reusables/LearnButton";
// import { alignProperty } from "@mui/material/styles/cssUtils";
import axios from "axios";
import Head from "next/head";

const useStyles = makeStyles((theme) => ({
  background: {
    // eslint-disable-next-line no-undef
    backgroundImage: `url("/assets/background.jpg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      // eslint-disable-next-line no-undef
      backgroundImage: `url("/assets/mobileBackground.jpg")`,
    },
    // width: "100%",
  },
  estimateBtn: {
    "&.MuiButton-root": {
      ...theme.typography.estimate,
      borderRadius: 50,
      height: 60,
      width: 205,
      backgroundColor: theme.palette.common.orange,
      fontSize: "1.5rem",
      marginRight: "5em",
      marginLeft: "2em",
      //  marginLeft: "60em",
      [theme.breakpoints.down("md")]: {
        marginLeft: 0,
        marginRight: 0,
      },
      //   position: "absolute",
    },
  },
  message: {
    "&.css-1u3bzj6-MuiFormControl-root-MuiTextField-root": {
      border: "2px solid #0B72B9",
      marginTop: "5em",
      borderRadius: 5,
    },
  },
  sendButton: {
    "&.css-1k8xi5w-MuiButtonBase-root-MuiButton-root": {
      ...theme.typography.estimate,
      borderRadius: 50,
      height: 45,
      width: 245,
      backgroundColor: theme.palette.common.orange,
      "&.css-1k8xi5w-MuiButtonBase-root-MuiButton-root:hover": {
        backgroundColor: "#FFBA60",
      },
      [theme.breakpoints.down("md")]: {
        height: 40,
        width: 200,
      },
    },
  },
}));

export default function Contact(props) {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.up("xs"));
  const classes = useStyles();
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errorHelper, setErrorHelper] = useState({
    nameError: false,
    emailError: false,
    phoneError: false,
    messageError: "",
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });
  // validation
  const validation = (e) => {
    let isValid;
    switch (e.target.id) {
      case "name":
        setInput({ ...input, name: e.target.value });
        isValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(e.target.value);
        isValid
          ? setErrorHelper({ ...errorHelper, nameError: false })
          : setErrorHelper({ ...errorHelper, nameError: true });
        break;

      case "email":
        setInput({ ...input, email: e.target.value });
        isValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );
        isValid
          ? setErrorHelper({ ...errorHelper, emailError: false })
          : setErrorHelper({ ...errorHelper, emailError: true });
        break;
      case "phone":
        setInput({ ...input, phone: e.target.value });
        isValid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          e.target.value
        );
        isValid
          ? setErrorHelper({ ...errorHelper, phoneError: false })
          : setErrorHelper({ ...errorHelper, phoneError: true });
        break;

      case "message":
        setInput({ ...input, message: e.target.value });
        // isValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
        //   e.target.value
        // );
        // isValid
        //   ? setErrorHelper({ ...errorHelper, messageError: "" })
        //   : setErrorHelper({
        //       ...errorHelper,
        //       messageError: "Enter Valid Name",
        //     });
        break;

      default:
        break;
    }
  };

  //api request
  const onConfirm = () => {
    setLoading(true);
    axios
      .get("https://us-central1-mui-app-6a883.cloudfunctions.net/sendEmail", {
        params: input,
      })
      .then((res) => {
        setLoading(false);
        setDialogOpen(false);
        setInput({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setAlert({
          open: true,
          message: "Message sent successfully",
          backgroundColor: "#4BB543",
        });
      })
      .catch((error) => {
        setLoading(false);
        setAlert({
          open: true,
          message: "Somthing went wrong please try again",
          backgroundColor: "#FF3232",
        });
      });

    setDialogOpen(false);
  };
  const buttonContent = (
    <React.Fragment>
      {" "}
      " Send Message"
      <img src="/assets/send.svg" alt="paper-airplane" sx={{ ml: "1em" }} />
    </React.Fragment>
  );

  return (
    <>
      <Grid container direction="row">
        <Head>
          <title key="title"> Contact us | Arc Developement </title>{" "}
        </Head>
        <meta
          name="description"
          key="description"
          content="Let us guide you through the custom software design and developement process.send us a message with any of your ideas or questions to get started!"
        />
        <meta
          property="og:title"
          content="Bringin West Coast technology to the Midwest |Contact Us"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="arc.com/contact" />
        <link rel="canonical" key="canonical" href="arc.com/contact" />
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          lg={4}
          xl={3}
          sx={{ mt: { md: "2em", xs: "1em" }, mb: { md: "2em", xs: "1em" } }}
        >
          <Grid item>
            <Grid container direction="column" alignItems="center">
              <Grid item justifyContent="center">
                <Typography variant="h1" sx={{ lineHeight: 1 }}>
                  {" "}
                  Contact Us{" "}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#0B72B9",
                    fontSize: "1rem",
                    textAlign: { md: "center" },
                  }}
                >
                  {" "}
                  We are Waiting{" "}
                </Typography>
              </Grid>
              <Grid item container justifyContent="center" sx={{ mt: "2em" }}>
                <Grid item>
                  <img
                    src="/assets/phone.svg"
                    alt="phone"
                    sx={{ mr: "0.5em" }}
                  />
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    sx={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                  >
                    <a
                      href="tel:8600618996"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      (020)-552 150
                    </a>
                  </Typography>
                </Grid>
              </Grid>
              {/* email  */}
              <Grid item container justifyContent="center" sx={{ mb: "2em" }}>
                <Grid item>
                  <img
                    src="/assets/emailIcon.svg"
                    alt="emailIcon"
                    style={{ mr: "0.5em", verticalAlign: "bottom" }}
                  />
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    sx={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                  >
                    <a
                      href="mailto:parikshitpatil987@gmail.com"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      parikshitpatil987@gmail.com
                    </a>
                  </Typography>
                </Grid>

                {/* emailend */}
              </Grid>
              {/* Name */}
              <Grid
                item
                container
                direction="column"
                justifyContent="center"
                sx={{ maxWidth: "20em" }}
              >
                <Grid item sx={{ mb: "0.5em" }}>
                  <TextField
                    variant="standard"
                    lable={"Name"}
                    error={errorHelper.nameError}
                    helperText={
                      errorHelper.nameError && "Please Enter Valid Name"
                    }
                    id={"name"}
                    fullWidth
                    placeholder="Name"
                    value={input.name}
                    onChange={(e) => validation(e)}
                  />
                </Grid>
                {/* email */}
                <Grid item sx={{ mb: "0.5em" }}>
                  <TextField
                    variant="standard"
                    lable={"Email"}
                    id={"email"}
                    error={errorHelper.emailError}
                    helperText={
                      errorHelper.emailError && "Please Enter valid email"
                    }
                    fullWidth
                    value={input.email}
                    placeholder="Email"
                    onChange={(e) => validation(e)}
                  />
                </Grid>
                {/* Phone */}
                <Grid item sx={{ mb: "0.5em" }}>
                  <TextField
                    variant="standard"
                    error={errorHelper.phoneError}
                    helperText={
                      errorHelper.phoneError &&
                      "Please Enter valid phone number"
                    }
                    lable={"Phone"}
                    id={"phone"}
                    value={input.phone}
                    fullWidth
                    placeholder="Phone No"
                    onChange={(e) => validation(e)}
                  />
                </Grid>
              </Grid>
              {/* message */}
              <Grid item sx={{ maxWidth: "20em" }}>
                <TextField
                  InputProps={{ disableUnderline: true }}
                  variant="standard"
                  value={input.message}
                  id="message"
                  placeholder="Tell us more about your project"
                  multiline
                  className={`${classes.message} msgBorde`}
                  rows={10}
                  onChange={(e) => validation(e)}
                  //   fullWidth
                />
              </Grid>
              {/* SendButton */}
              <Grid item container justifyContent="center" sx={{ mt: "2em" }}>
                <Button
                  disabled={
                    errorHelper.nameError === true ||
                    errorHelper.emailError === true ||
                    errorHelper.phoneError === true ||
                    input.message.length === 0
                  }
                  variant="contained"
                  className={classes.sendButton}
                  onClick={() => setDialogOpen(true)}
                >
                  {loading ? <CircularProgress size={30} /> : buttonContent}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Dialog Box */}
        <Dialog
          open={dialogOpen}
          fullScreen={matchesSM}
          onClose={(e) => {
            setDialogOpen(false);
          }}
          sx={{ zIndex: 1302 }}
          PaperProps={{
            sx: {
              pt: { xs: "1em", sm: "5em" },
              pb: { xs: "1em", sm: "5em" },
              pl: { xs: 0, sm: "5em", md: "15", lg: "25em" },
              pr: { xs: 0, sm: "5em", md: "15", lg: "25em" },
            },
          }}
        >
          <DialogContent>
            <Grid item>
              <Typography variant="h4" gutterBottom align="center">
                Confirm Message
              </Typography>
            </Grid>

            <Grid
              item
              container
              direction="column"
              justifyContent="center"
              sx={{ maxWidth: "20em" }}
            >
              <Grid item sx={{ mb: "0.5em" }}>
                <TextField
                  variant="standard"
                  lable={"Name"}
                  error={errorHelper.nameError}
                  helperText={
                    errorHelper.nameError && "Please Enter Valid Name"
                  }
                  id={"name"}
                  fullWidth
                  placeholder="Name"
                  value={input.name}
                  onChange={(e) => validation(e)}
                />
              </Grid>
              {/* email */}
              <Grid item sx={{ mb: "0.5em" }}>
                <TextField
                  variant="standard"
                  lable={"Email"}
                  id={"email"}
                  error={errorHelper.emailError}
                  helperText={
                    errorHelper.emailError && "Please Enter valid email"
                  }
                  fullWidth
                  value={input.email}
                  placeholder="Email"
                  onChange={(e) => validation(e)}
                />
              </Grid>
              {/* Phone */}
              <Grid item sx={{ mb: "0.5em" }}>
                <TextField
                  variant="standard"
                  error={errorHelper.phoneError}
                  helperText={
                    errorHelper.phoneError && "Please Enter valid phone number"
                  }
                  lable={"Phone"}
                  id={"phone"}
                  value={input.phone}
                  fullWidth
                  placeholder="Phone No"
                  onChange={(e) => validation(e)}
                />
              </Grid>
            </Grid>
            {/* message */}
            <Grid item sx={{ width: matchesSM ? "100%" : "20em" }}>
              <TextField
                InputProps={{ disableUnderline: true }}
                variant="standard"
                value={input.message}
                id="message"
                multiline
                //   width="20em"
                className={[classes.message, "msgBorder"]}
                rows={10}
                onChange={(e) => validation(e)}
                // fullWidth
              />
            </Grid>
            <Grid
              item
              container
              direction={matchesMD ? "column" : "row"}
              sx={{ mt: "2em" }}
              alignItems={"center"}
            >
              <Grid item>
                <Button
                  style={{ fontWeight: 300 }}
                  onClick={() => setDialogOpen(false)}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  className={classes.sendButton}
                  onClick={onConfirm}
                >
                  {loading ? <CircularProgress size={30} /> : buttonContent}
                </Button>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
        {/* snackbar */}
        <Snackbar
          open={alert.open}
          message={alert.message}
          ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={() => setAlert({ ...alert, open: false })}
          autoHideDuration={2000}
        />
        <Grid
          item
          container
          className={classes.background}
          alignItems={"center"}
          justifyContent={matchesMD ? "center" : undefined}
          //   direction={matchesMD ? "column" : "row"}
          lg={8}
          xl={9}
        >
          {/* ===============from call to action start */}
          <Grid
            item
            lg={5}
            sm={11}
            textAlign={matchesSM ? "Center" : "start"}
            sx={{ ml: matchesSM ? "1em" : "3em" }}
          >
            <Grid container direction={"column"} alignItems={"center"}>
              <Grid item>
                <Typography variant="h1">
                  Simple Software <br /> revolutionary result
                </Typography>
                <Typography variant="subtitle2" sx={{ fontSize: "1.5rem" }}>
                  Take advantage of 21st Century.
                </Typography>
                <Grid
                  container
                  justifyContent={matchesSM ? "center" : "underfined"}
                  item
                >
                  <LearnButton
                    label="Learn more"
                    variant="outlined"
                    sx={{
                      fontSize: "0.7rem",
                      height: "20px",
                      padding: "5px",
                    }}
                    component={Link}
                    href="/revolution"
                  >
                    <ButtonArrow
                      width={10}
                      height={10}
                      fill={theme.palette.common.blue}
                    />
                  </LearnButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            lg={5}
            sm={11}
            alignItems={"center"}
            textAlign={matchesMD ? "center" : "end"}
            sx={{ ml: { xs: "4em", sm: "0", md: "-5em", lg: "5em" } }}
          >
            <Button
              variant="contained"
              component={Link}
              href="/estimate"
              className={classes.estimateBtn}
            >
              Free Estimate
            </Button>
          </Grid>
          {/* ===============from call to action start */}
        </Grid>
      </Grid>
    </>
  );
}
