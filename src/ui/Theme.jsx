// import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
// import { red } from "@mui/material/colors";

// export const roboto = Roboto({
//   weight: ["300", "400", "500", "700"],
//   subsets: ["latin"],
//   display: "swap",
//   fallback: ["Helvetica", "Arial", "sans-serif"],
// });

// Create a theme instance.
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
    h6: {
      fontweight: 300,
      fontFamily: "Raleway",
      color: arcBlue,
      lineHeight: 1,
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

// export default Theme;
