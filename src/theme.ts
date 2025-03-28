// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0A5E58", // cor primária
    },
    secondary: {
      main: "#1ABC9C", // cor secundária
    },
    background: {
      default: "#1ABC9C", // cor padrão de fundo (usada se o degradê falhar ou não for suportado)
    },
  },    
  typography: {
    fontFamily: "Kanit, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          background: "linear-gradient(135deg, #0A5E58, #1ABC9C)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed", // opcional, para manter o degradê fixo
          backgroundSize: "cover",
        },
      },
    },
  },
});

export default theme;
