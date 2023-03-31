import "./App.css";
import Header from "./components/ui/Header";
import { ThemeProvider } from "@mui/material/styles";
// import { theme } from "./components/ui/Theme.jsx";
import { Route, Routes } from "react-router-dom";

import { createTheme } from "@mui/material/styles";
import Footer from "./components/Footer";
import LandingPage from "./components/ui/LandingPage";
import Services from "./components/ui/Services";
import CustomSoftware from "./components/ui/CustomSoftware";

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
  },
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
          <Route path="/mobileapps" element={<div>mobileapps</div>} />
          <Route path="/websites" element={<div>websites</div>} />
          <Route path="/revolution" element={<div>revolution</div>} />
          <Route path="/about" element={<div>about</div>} />
          <Route path="/contact" element={<div>contact</div>} />
          <Route path="/estimate" element={<div>estimate</div>} />
        </Routes>

        <Footer />
        {/* Hello ! */}
      </ThemeProvider>
    </div>
  );
}

export default App;
