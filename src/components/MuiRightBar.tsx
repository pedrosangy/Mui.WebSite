import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";

const MuiRightBar = () => {
  return (
    <Box
      bgcolor="lightblue"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position={"fixed"}>
        <Typography>Online Friends</Typography>
        <AvatarGroup sx={{color:"white"}} >
          <Avatar sx={{ backgroundColor: "#0A5E58", color:"white" }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar sx={{ backgroundColor: "#0A5E58", color:"white" }} alt="Wemy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar sx={{ backgroundColor: "#0A5E58", color:"white" }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar sx={{ backgroundColor: "#0A5E58", color:"white" }} alt="Semy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar sx={{ backgroundColor: "#0A5E58", color:"white" }} alt="Eemy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar sx={{ backgroundColor: "#0A5E58", color:"white" }} alt="Memy Sharp" src="/static/images/avatar/1.jpg" />
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default MuiRightBar;
