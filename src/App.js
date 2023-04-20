import "./App.css";
import Header from "./components/ui/Header";
import { ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import { createTheme } from "@mui/material/styles";

import Footer from "./components/Footer";
import LandingPage from "./components/ui/LandingPage";
import Services from "./components/ui/Services";
import CustomSoftware from "./components/ui/CustomSoftware";
import MobileApps from "./components/ui/MobileApps";
import Websites from "./components/ui/Websites";
import Revolution from "./components/ui/Revolution";
import About from "./components/ui/About";
import Contact from "./components/ui/Contact";

const arcBlue = `#0B72B9`;
const arcOrange = "#FFBA60";
const theme = createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tabsStyle: {
      textTransform: "none",
      fontWeight: "700",
      fontSize: "1rem",
      fontFamily: "Raleway",
      color: "#fff",
      minWidth: 10,
      marginLeft: "25px",
    },
    estimate: {
      fontSize: "1rem",
      textTransform: "none",
      fontFamily: "pacifico",
      color: "white",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: `${arcBlue}`,
      lineHeight: 1.5,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      fontWeight: 700,
      color: `${arcBlue}`,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: "gray",
    },
    subtitle2: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: "white",
    },
    h3: {
      fontFamily: "pacifico",
      fontSize: "2.5rem",
      color: arcBlue,
    },
    body1: {
      fontSize: "1.25rem",
      color: "grey",
      fontweight: 300,
    },
    caption: {
      fontSize: "1 rem",
      fontWeight: 300,
      color: "gray",
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        // color: "grey",
        // fontSize: "1rem",
      },
    },
    MuiInput: {
      "&..css-1u3bzj6-MuiFormControl-root-MuiTextField-root": {
        // color: "grey",
        // fontSize: "1rem",
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${arcBlue}`,
        },
        "&:hover:not:($disabled):not($focused}:not($error):before": {
          borderBottom: `2px solid ${arcBlue}`,
        },
      },
    },
  },
  // learnButton: {
  //   marginRight: 40,
  //   borderWidth: 2,
  //   textTransform: "none",
  //   fontFamily: "Roboto",
  //   fontWeight: "bold",
  //   borderRadius: 50,
  //   backgroundColor: "#FFBA60",
  //   color: arcBlue,
  //   borderColor: arcBlue,
  //   // marginTop: "1em",
  // },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/costomsoftware" element={<CustomSoftware />} />
          <Route path="/mobileapps" element={<MobileApps />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/revolution" element={<Revolution />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/estimate" element={<div>estimate</div>} />
        </Routes>

        <Footer />
        {/* Hello ! */}
      </ThemeProvider>
    </div>
  );
}

export default App;
