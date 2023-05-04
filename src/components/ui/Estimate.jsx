import React, { useState } from "react";
import { cloneDeep, matches } from "lodash";
import { makeStyles } from "@mui/styles";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  Grid,
  Hidden,
  IconButton,
  Snackbar,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import check from "../../assets/check.svg";
import send from "../../assets/send.svg";
import Software from "../../assets/software.svg";
import mobile from "../../assets/mobile.svg";
import website from "../../assets/website.svg";
import backarrow from "../../assets/backArrow.svg";
import forwordarrow from "../../assets/forwardArrow.svg";
import BackarrowDis from "../../assets/backArrowDisabled.svg";
import forwardArrowDis from "../../assets/forwardArrowDisabled.svg";
import camera from "../../assets/camera.svg";
import upload from "../../assets/upload.svg";
import person from "../../assets/person.svg";
import persons from "../../assets/persons.svg";
import people from "../../assets/people.svg";
import info from "../../assets/info.svg";
import bell from "../../assets/bell.svg";
import users from "../../assets/users.svg";
import iphone from "../../assets/iphone.svg";
import gps from "../../assets/gps.svg";
import customized from "../../assets/customized.svg";
import data from "../../assets/data.svg";
import android from "../../assets/android.svg";
import globe from "../../assets/globe.svg";
import biometrics from "../../assets/biometrics.svg";

import estimateAnim from "../../animations/estimateAnimation/data.json";

import { useMediaQuery } from "@mui/material";
import Lottie from "react-lottie";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  icon: {
    width: "12em",
    height: "10em",
  },
  estimate: {
    "&.MuiButton-root": {
      ...theme.typography.estimate,
      borderRadius: 50,
      height: 50,
      width: 225,
      backgroundColor: theme.palette.common.orange,
      fontSize: "1.25rem",
      marginTop: "5em",
      //   marginLeft: "2em",
      "&:hover": {
        backgroundColor: theme.palette.secondary.light,
      },
    },
  },
  message: {
    "&.css-66dh3a-MuiInputBase-input-MuiInput-input": {
      border: "2px solid #0B72B9",
      marginTop: "3em",
      borderRadius: 5,
      marginBottom: "2em",
    },
  },
  specialText: {
    "&.css-3i5jgz-MuiTypography-root": {
      fontFamily: "Raleway",
      fontSize: "1.5rem",
      fontWeight: 700,
      color: theme.palette.common.orange,
    },
  },
}));

function Estimate() {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  // const matchesXS = useMediaQuery(theme.breakpoints.up("xs"));
  const classes = useStyles();
  const defaultQuestions = [
    {
      id: 1,
      title: "Which service are you intrested in ?",
      active: true,
      options: [
        {
          id: 1,
          title: "Custom Software Developement",
          subtitle: null,
          icon: Software,
          iconAlt: "Three floating screen",
          selected: false,
          cost: 0,
        },
        {
          id: 2,
          title: "iOS/Android App Developement",
          subtitle: null,
          icon: mobile,
          iconAlt: "phones and tablets outilne",
          selected: false,
          cost: 0,
        },
        {
          id: 3,
          title: "Website Developement",
          subtitle: null,
          icon: website,
          iconAlt: "computer outline",
          selected: false,
          cost: 0,
        },
      ],
    },
  ];

  const softwareQuestions = [
    { ...defaultQuestions[0], active: false },
    {
      id: 2,
      title: "Which platforms do you need supported?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Web Application",
          subtitle: null,
          icon: website,
          iconAlt: "computer outline",
          selected: false,
          cost: 100,
        },
        {
          id: 2,
          title: "iOS Application",
          subtitle: null,
          icon: iphone,
          iconAlt: "outline of iphone",
          selected: false,
          cost: 100,
        },
        {
          id: 3,
          title: "Android Application",
          subtitle: null,
          icon: android,
          iconAlt: "outlines of android phone",
          selected: false,
          cost: 100,
        },
      ],
      active: true,
    },
    {
      id: 3,
      title: "Which features do you expect to use?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Photo/Video",
          subtitle: null,
          icon: camera,
          iconAlt: "camera outline",
          selected: false,
          cost: 25,
        },
        {
          id: 2,
          title: "GPS",
          subtitle: null,
          icon: gps,
          iconAlt: "gps pin",
          selected: false,
          cost: 25,
        },
        {
          id: 3,
          title: "File Transfer",
          subtitle: null,
          icon: upload,
          iconAlt: "outline of cloud with arrow pointing up",
          selected: false,
          cost: 25,
        },
      ],
      active: false,
    },
    {
      id: 4,
      title: "Which features do you expect to use?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Users/Authentication",
          subtitle: null,
          icon: users,
          iconAlt: "outline of a person with a plus sign",
          selected: false,
          cost: 25,
        },
        {
          id: 2,
          title: "Biometrics",
          subtitle: null,
          icon: biometrics,
          iconAlt: "fingerprint",
          selected: false,
          cost: 25,
        },
        {
          id: 3,
          title: "Push Notifications",
          subtitle: null,
          icon: bell,
          iconAlt: "outline of a bell",
          selected: false,
          cost: 25,
        },
      ],
      active: false,
    },
    {
      id: 5,
      title: "What type of custom features do you expect to need?",
      subtitle: "Select one.",
      options: [
        {
          id: 1,
          title: "Low Complexity",
          subtitle: "(Informational)",
          icon: info,
          iconAlt: "'i' inside a circle",
          selected: false,
          cost: 25,
        },
        {
          id: 2,
          title: "Medium Complexity",
          subtitle: "(Interactive, Customizable, Realtime)",
          icon: customized,
          iconAlt: "two toggle switches",
          selected: false,
          cost: 50,
        },
        {
          id: 3,
          title: "High Complexity",
          subtitle: "(Data Modeling and Computation)",
          icon: data,
          iconAlt: "outline of line graph",
          selected: false,
          cost: 100,
        },
      ],
      active: false,
    },
    {
      id: 6,
      title: "How many users do you expect?",
      subtitle: "Select one.",
      options: [
        {
          id: 1,
          title: "0-10",
          subtitle: null,
          icon: person,
          iconAlt: "person outline",
          selected: false,
          cost: 1,
        },
        {
          id: 2,
          title: "10-100",
          subtitle: null,
          icon: persons,
          iconAlt: "outline of two people",
          selected: false,
          cost: 1.25,
        },
        {
          id: 3,
          title: "100+",
          subtitle: null,
          icon: people,
          iconAlt: "outline of three people",
          selected: false,
          cost: 1.5,
        },
      ],
      active: false,
    },
  ];

  const websiteQuestions = [
    { ...defaultQuestions[0], active: false },
    {
      id: 2,
      title: "Which type of website are you wanting?",
      subtitle: "Select one.",
      options: [
        {
          id: 1,
          title: "Basic",
          subtitle: "(Informational)",
          icon: info,
          iconAlt: "person outline",
          selected: false,
          cost: 100,
        },
        {
          id: 2,
          title: "Interactive",
          subtitle: "(Users, API's, Messaging)",
          icon: customized,
          iconAlt: "outline of two people",
          selected: false,
          cost: 200,
        },
        {
          id: 3,
          title: "E-Commerce",
          subtitle: "(Sales)",
          icon: globe,
          iconAlt: "outline of three people",
          selected: false,
          cost: 250,
        },
      ],
      active: true,
    },
  ];

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: estimateAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [dialogOpen, setDialogOpen] = useState(false);
  const [questions, setQuestions] = useState(defaultQuestions);
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
  const [service, setService] = useState({
    selectedService: "",
    platform: [],
    features: [],
    customFeature: "",
    users: ``,
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });
  const [category, setCategory] = useState("");
  const [total, setTotal] = useState(0);
  const nextQuestion = () => {
    const newQuestion = cloneDeep(questions);
    const currentActive = newQuestion.filter((questions) => questions.active);
    const activeIndex = currentActive[0].id - 1;

    const nextIndex = activeIndex + 1;
    newQuestion[activeIndex] = { ...currentActive[0], active: false };
    newQuestion[nextIndex] = { ...newQuestion[nextIndex], active: true };

    setQuestions(newQuestion);
  };
  const previousQuestion = () => {
    const newQuestion = cloneDeep(questions);
    const currentActive = newQuestion.filter((questions) => questions.active);
    const activeIndex = currentActive[0].id - 1;
    const nextIndex = activeIndex - 1;

    newQuestion[activeIndex] = { ...currentActive[0], active: false };
    newQuestion[nextIndex] = { ...newQuestion[nextIndex], active: true };

    setQuestions(newQuestion);
  };
  const prevNavArrowDisable = () => {
    const currentActive = questions.filter((questions) => questions.active);
    if (currentActive[0].id === 1) {
      return true;
    } else return false;
  };
  const forwordNavArrowDisable = () => {
    const currentActive = questions.filter((questions) => questions.active);
    if (currentActive[0].id === questions[questions.length - 1].id) {
      return true;
    } else return false;
  };

  const handleSelect = (id) => {
    const newQuestion = cloneDeep(questions);
    const currentActive = newQuestion.filter((questions) => questions.active);
    const activeIndex = currentActive[0].id - 1;

    const newSelected = newQuestion[activeIndex].options[id - 1];
    const prevSelected = currentActive[0].options.filter(
      (options) => options.selected
    );

    switch (currentActive[0].subtitle) {
      case "Select one.":
        if (prevSelected[0]) {
          prevSelected[0].selected = !prevSelected[0].selected;
        }
        newSelected.selected = !newSelected.selected;
        break;
      default:
        newSelected.selected = !newSelected.selected;
    }
    switch (newSelected.title) {
      case "Custom Software Developement":
        setQuestions(softwareQuestions);
        setService({ ...service, selectedService: newSelected.title });
        setService({
          selectedService: "",
          platform: [],
          features: [],
          customFeature: "",
          users: ``,
        });
        break;
      case "iOS/Android App Developement":
        setQuestions(softwareQuestions);
        setService({ ...service, selectedService: newSelected.title });
        setService({
          selectedService: "",
          platform: [],
          features: [],
          customFeature: "",
          users: ``,
        });
        break;
      case "Website Developement":
        setQuestions(websiteQuestions);
        setService({ ...service, selectedService: newSelected.title });
        setService({
          selectedService: "",
          platform: [],
          features: [],
          customFeature: "",
          users: ``,
        });
        break;
      default:
        setQuestions(newQuestion);
    }
  };

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
  const sendEstimate = () => {
    setLoading(true);
    axios
      .get("https://us-central1-mui-app-6a883.cloudfunctions.net/sendEmail", {
        params: {
          name: input.name,
          email: input.email,
          phone: input.phone,
          message: input.message,
          selectedService: service.selectedService,
          platform: service.platform,
          features: service.features,
          customFeature: service.customFeature,
          users: service.users,
          total: total,
          category: category,
        },
      })
      // .then((res) => console.log(res))
      // .catch((err) => console.log(err));
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
          message: "Estimate Placed successfully",
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
  const getTotal = () => {
    let cost = 0;
    const selections = questions
      .map((question) => question.options.filter((option) => option.selected))
      .filter((questions) => questions.length > 0);
    // console.log(selections);

    selections.map((options) => options.map((option) => (cost += option.cost)));

    if (questions.length > 2) {
      const userCost = questions
        .filter(
          (question) => question.title === "How many users do you expect?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0][0];
      cost -= userCost.cost;
      cost *= userCost.cost;

      const platformData = getPlatform();
      const newfeatures = getFeatures();
      const newCustomeFeatures = getCustomFeatures();
      //   getCategary();
      //   const newCategory = getCategary();
      setService({
        ...service,
        platform: platformData,
        features: newfeatures,
        customFeature: newCustomeFeatures,
        users: userCost.title,
      });
    }
    setTotal(cost);
  };

  const getPlatform = () => {
    let newPlatform = [];
    if (questions.length > 2) {
      questions
        .filter(
          (question) =>
            question.title === "Which platforms do you need supported?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0]
        .map((option) => newPlatform.push(option.title));

      return newPlatform;
    }
  };

  const getFeatures = () => {
    let newFeatures = [];
    if (questions.length > 2) {
      questions
        .filter(
          (question) =>
            question.title === "Which features do you expect to use?"
        )
        .map((question) => question.options.filter((option) => option.selected))
        .map((option) =>
          option.map((newFeature) => newFeatures.push(newFeature.title))
        );

      return newFeatures;
    }
  };
  const getCustomFeatures = () => {
    if (questions.length > 2) {
      const newCustomeFeatures = questions
        .filter(
          (question) =>
            question.title ===
            "What type of custom features do you expect to need?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0][0].title;

      return newCustomeFeatures;
      //   console.log(newCustomeFeatures);
    }
  };
  const getCategary = () => {
    if (questions.length > 2) {
      const newCategory = questions
        .filter(
          (question) =>
            question.title === "Which type of website are you wanting?"
        )[0]
        .options.filter((option) => option.selected)[0].title;
      console.log(newCategory);
      setCategory(newCategory);
    }
  };
  const estimateDisabled = () => {
    let disabled = true;
    const emptySelection = questions
      .map((question) => question.options.filter((option) => option.selected))
      .filter((question) => question.length === 0);

    if (questions.length === 2) {
      if (emptySelection.length === 1) {
        disabled = false;
      }
    } else if (questions.length === 1) {
      disabled = true;
    } else if (
      emptySelection.length < 3 &&
      questions[questions.length - 1].options.filter(
        (option) => option.selected.length > 0
      )
    ) {
      disabled = false;
    }
    return disabled;
  };
  const buttonContent = (
    <React.Fragment>
      Place Request
      <img src={send} alt="paper-airplane" style={{ marginLeft: "1em" }} />
    </React.Fragment>
  );

  const softwareSelection = (
    <Grid container direction="column">
      <Grid item container alignItems={"center"} sx={{ mb: "1.25em" }}>
        <Grid item xs={2}>
          <img src={check} alt="checkmark" />{" "}
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            You want {service.selectedService}
            {service.platform.length > 0
              ? `for ${
                  //if only web application is selected...
                  service.platform.indexOf("Web Application") > -1 &&
                  service.platform.length === 1
                    ? //then finish sentence here
                      "a Web Application."
                    : //otherwise, if web application and another platform is selected...
                    service.platform.indexOf("Web Application") > -1 &&
                      service.platform.length === 2
                    ? //then finish the sentence here
                      `a Web Application and an ${service.platform[1]}.`
                    : //otherwise, if only one platform is selected which isn't web application...
                    service.platform.length === 1
                    ? //then finish the sentence here
                      `an ${service.platform[0]}`
                    : //otherwise, if other two options are selected...
                    service.platform.length === 2
                    ? //then finish the sentence here
                      "an iOS Application and an Android Application."
                    : //otherwise if all three are selected...
                    service.platform.length === 3
                    ? //then finish the sentence here
                      "a Web Application, an iOS Application, and an Android Application."
                    : null
                }`
              : null}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container alignItems={"center"} sx={{ mb: "1.25em" }}>
        <Grid item xs={2}>
          <img src={check} alt="checkmark" />{" "}
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            {"with "}
            {/* if we have features... */}
            {service.features.length > 0
              ? //...and there's only 1...
                service.features.length === 1
                ? //then end the sentence here
                  `${service.features[0]}.`
                : //otherwise, if there are two service.features...
                service.features.length === 2
                ? //...then end the sentence here
                  `${service.features[0]} and ${service.features[1]}.`
                : //otherwise, if there are three or more service.features...
                  service.features
                    //filter out the very last feature...
                    .filter(
                      (feature, index) => index !== service.features.length - 1
                    )
                    //and for those service.features return their name...
                    .map((feature, index) => (
                      <span key={index}>{`${feature}, `}</span>
                    ))
              : null}
            {service.features.length > 0 &&
            service.features.length !== 1 &&
            service.features.length !== 2
              ? //...and then finally add the last feature with 'and' in front of it
                ` and ${service.features[service.features.length - 1]}.`
              : null}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container alignItems={"center"}>
        <Grid item xs={2}>
          <img src={check} alt="checkmark" />{" "}
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            The custom features will be of {service.customFeature.toLowerCase()}
            {`, and the project will be used by about ${service.users} users `}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
  const websiteSelection = (
    <Grid container direction="column" sx={{ mt: "14em" }}>
      <Grid item container alignItems={"center"}>
        <Grid item xs={2}>
          <img src={check} alt="checkmark" />{" "}
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            you want
            {category === "Basic" ? "a Basic Website" : `an ${category}Wbsite`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
  //   console.log(service.customFeature, service.users);
  return (
    <div>
      <Grid container direction={"row"}>
        <Grid
          item
          container
          direction={"column"}
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item sx={{ mt: "2em", ml: { md: 0, lg: "5em" } }}>
            <Typography variant="h2" align={matchesMD ? "center" : undefined}>
              Estimate
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              mr: { md: 0, lg: "10em" },
              maxWidth: "50em",
              mb: "2.5em",
              mt: "5em",
            }}
          >
            <Lottie
              options={defaultOptions}
              height="100%"
              width="100%"
            ></Lottie>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={"column"}
          alignItems="center"
          lg
          sx={{ mr: { md: 0, lg: "2em" }, mb: "25em" }}
        >
          {questions
            .filter((question) => question.active)
            .map((questions, ind) => (
              <React.Fragment key={`row${ind}`}>
                <Grid item>
                  <Typography
                    variant="h2"
                    align="center"
                    sx={{
                      fontWeight: 500,
                      fontSize: "2.25rem",
                      //   mb: "2.5em",
                      mt: "5em",
                      lineHeight: 1.25,
                      ml: { sm: "1em" },
                      mr: { sm: "1em" },
                    }}
                    // gutterBottom
                  >
                    {questions.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    sx={{ mb: "2.5em" }}
                    gutterBottom
                  >
                    {questions.subtitle}
                  </Typography>
                </Grid>
                <Grid item container>
                  {questions.options.map((element, index) => (
                    <Grid
                      item
                      container
                      direction="column"
                      md
                      key={`ro${index}`}
                      component={Button}
                      onClick={() => handleSelect(element.id)}
                      sx={{
                        display: "grid",
                        textTransform: "none",
                        borderRadius: "0px",
                        mb: { sm: "1.5em" },
                        backgroundColor: element.selected
                          ? theme.palette.common.orange
                          : null,
                      }}
                    >
                      <Grid item style={{ maxWidth: "14em" }}>
                        <Typography
                          variant="h6"
                          textAlign="center"
                          sx={{ mb: "1em" }}
                        >
                          {element.title}
                        </Typography>
                        <Typography variant="caption" align="center">
                          {element.subtitle}
                        </Typography>
                      </Grid>
                      <Grid item>
                        {/* <Typography variant="h6" align="center"></Typography> */}
                        <img
                          src={element.icon}
                          alt={element.iconAlt}
                          className={classes.icon}
                        />
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </React.Fragment>
            ))}
          <Grid
            item
            container
            justifyContent={"space-between"}
            sx={{ width: "18em", mt: "3em" }}
          >
            <Grid item>
              <IconButton
                disabled={prevNavArrowDisable()}
                onClick={previousQuestion}
              >
                <img
                  src={prevNavArrowDisable() ? BackarrowDis : backarrow}
                  alt="prev-question"
                  //   className={classes.icon}
                />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                disabled={forwordNavArrowDisable()}
                onClick={nextQuestion}
              >
                <img
                  src={
                    forwordNavArrowDisable() ? forwardArrowDis : forwordarrow
                  }
                  alt="nextQuestion"
                  //   className={classes.icon}
                />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              className={classes.estimate}
              disabled={estimateDisabled()}
              onClick={() => {
                setDialogOpen(true);
                getTotal();
                getCategary();
              }}
            >
              Get Estimate
            </Button>
          </Grid>
        </Grid>
        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          // PaperProps={{
          //   style: {
          //     paddingTop: "5em",
          //     paddingBottom: "5em",
          //     paddingLeft: "25em",
          //     paddingRight: "25em",
          //   },
          // }}
          sx={{ zIndex: 1302 }}
          fullWidth
          maxWidth="lg"
          fullScreen={matchesMD ? true : false}
        >
          <Grid container justifyContent="center">
            <Grid item sx={{ mt: "1em" }}>
              <Typography variant="h2" align="center">
                Estimate
              </Typography>
            </Grid>
          </Grid>
          <DialogContent>
            <Grid
              container
              justifyContent={"space-around"}
              directons={{ sm: "column" }}
              alignItems={{ sm: "center" }}
            >
              <Grid
                item
                container
                direction="column"
                md={7}
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
                {/* message */}
                <Grid item sx={{ maxWidth: "20em" }}>
                  <TextField
                    InputProps={{ disableUnderline: true }}
                    variant="standard"
                    value={input.message}
                    id="message"
                    multiline
                    placeholder="Tell us more about your project"
                    className={`${classes.message} msgBorde`}
                    rows={10}
                    sx={{
                      border: "2px solid #0B72B9",
                      marginTop: "3em",
                      borderRadius: 2,
                      mb: "2em",
                    }}
                    onChange={(e) => validation(e)}
                    //   fullWidth
                  />
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    align={matchesSM ? "center" : undefined}
                    paragrap
                    sx={{ lineHeight: 1.25 }}
                    gutterBottom
                  >
                    We can create this digital solutions for estimated
                    <span
                      className="specialText"
                      style={{
                        fontFamily: "Raleway",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        color: theme.palette.common.orange,
                      }}
                    >
                      ` Rs{total.toFixed(2)}`
                    </span>
                  </Typography>
                  <Typography
                    variant="body1"
                    paragrap
                    align={matchesSM ? "center" : undefined}
                  >
                    Fill out above from and place your request, and we'll get
                    back to you with details moving forword and a final price
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                direction="column"
                md={5}
                sx={{ maxWidth: "30em", alignItems: { xs: "center" } }}
              >
                <Hidden smDown>
                  <Grid item>
                    {questions.length > 2
                      ? softwareSelection
                      : websiteSelection}
                  </Grid>
                </Hidden>
                <Grid item>
                  <Button
                    disabled={
                      errorHelper.nameError === true ||
                      errorHelper.emailError === true ||
                      errorHelper.phoneError === true ||
                      input.message.length === 0
                    }
                    variant="contained"
                    className={classes.estimate}
                    onClick={() => sendEstimate()}
                  >
                    {loading ? <CircularProgress size={30} /> : buttonContent}
                  </Button>
                  {/* <img
                      src={send}
                      alt="paper airplane"
                      style={{ marginLeft: "1em" }}
                    />
                  </Button> */}
                </Grid>
                <Hidden mdUp>
                  <Grid item sx={{ mb: { sm: "5em" } }}>
                    <Button
                      color="primary"
                      sx={{ fontWeight: 300 }}
                      onClick={() => {
                        setDialogOpen(false);
                      }}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Hidden>
              </Grid>
            </Grid>
            {/* </Grid> */}
          </DialogContent>
        </Dialog>

        <Snackbar
          open={alert.open}
          message={alert.message}
          ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={() => setAlert({ ...alert, open: false })}
          autoHideDuration={2000}
        />
      </Grid>
    </div>
  );
}

export default Estimate;
