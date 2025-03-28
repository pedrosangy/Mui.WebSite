import { Mail, SupportAgent } from "@mui/icons-material"; // Corrigido o ícone inválido
import { useState } from "react";
import { deepOrange } from "@mui/material/colors";
import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape?.borderRadius || 4, // Adicionado fallback caso theme.shape seja undefined
  width: "40%",
}));

const Icons = styled(Box)({
  display: "flex",
  gap: "20px",
  alignItems: "center",
});

const MuiNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky" color="primary">
        <StyledToolBar>
          <Typography variant="h5" component="div">
            DNIT
          </Typography>
          <Search>
            <InputBase placeholder="search..." />
          </Search>
          <Icons>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={10} color="error">
              <SupportAgent />
            </Badge>
            <Avatar
              sx={{
                width: 30,
                height: 30,
                bgcolor: deepOrange[500],
                color: "white",
                cursor: "pointer",
              }}
              onClick={() => setOpen(true)}
            >
              P
            </Avatar>
          </Icons>
        </StyledToolBar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open} // Agora usa o estado corretamente
          onClose={() => setOpen(false)} // Corrigido erro de sintaxe
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
    </>
  );
};

export default MuiNavbar;
