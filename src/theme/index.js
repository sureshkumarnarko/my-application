import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          padding: "20px",
        },
      },
    },
  },
});

export default theme;
