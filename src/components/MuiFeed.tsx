import { Box } from "@mui/material";
import * as React from "react";
import Post from "./Post";
 

export default function MuiFeed() {
  return (
     <Box width={100} flex={4} p={2}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
     </Box>
  );
}
