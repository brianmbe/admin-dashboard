import React from "react";
import { Box, Typography } from "@mui/material";
import { Header } from "./index";

export default function Dashboard() {
  return (
    <Box mt={2}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtile="Welcome to your Dashboard" />
      </Box>
    </Box>
  );
}
