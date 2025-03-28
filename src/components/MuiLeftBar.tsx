import {
  AccountCircle,
  Groups3,
  Home,
  Layers,
  ModeNight,
  PeopleAlt,
  SettingsSuggest,
  Store,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import theme from "../theme";

const MuiLeftBar = () => {
  return (
    <Box
      bgcolor="#1ABC9C"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position={"fixed"}>
        <List disablePadding>
          <ListItemButton component="a" href="#home" sx={{ borderRadius: 4 }}>
            <ListItemIcon>
               
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton
            component="a"
            href="#MarketPlace"
            sx={{ borderRadius: 4 }}
          >
            <ListItemIcon>
              {" "}
              <Store />
            </ListItemIcon>
            <ListItemText primary="MarketPlace" />
          </ListItemButton>
          <ListItemButton
            component="a"
            href="#Friends"
            sx={{ borderRadius: 4 }}
          >
            <ListItemIcon>
              {" "}
              <PeopleAlt />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
          <ListItemButton
            component="a"
            href="#Settings"
            sx={{ borderRadius: 4 }}
          >
            <ListItemIcon>
              {" "}
              <SettingsSuggest />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
          <ListItemButton
            component="a"
            href="#Profile"
            sx={{ borderRadius: 4 }}
          >
            <ListItemIcon>
              {" "}
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
          <ListItemButton
            component="a"
            href="#Profile"
            sx={{ borderRadius: 4 }}
          >
            <ListItemIcon>
              {" "}
              <ModeNight />
            </ListItemIcon>
            <Switch />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
};

export default MuiLeftBar;
