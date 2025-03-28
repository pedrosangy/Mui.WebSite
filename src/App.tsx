import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import Navbar from "./components/MuiNavbar";
import { Box, Stack } from "@mui/material";
import MuiFeed from "./components/MuiFeed";
import MuiRightBar from "./components/MuiRightBar";
import MuiLeftBar from "./components/MuiLeftBar";
import MuiNavbar from "./components/MuiNavbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
       <MuiNavbar />
        <Stack direction="row" spacing={2} justifyContent={"space-between"}>
          <MuiLeftBar />
          <MuiFeed />
          <MuiRightBar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
