import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#dc84ff",
      light: "#dc84ff",
    },
    secondary: {
      main: "#25184d",
      light: "#25184d",
    },
    background: {
      paper: "#e2f7ff",
      default: "#e2f7ff",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
