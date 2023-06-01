import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

export default function Header({ title, subtile }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        textTransform="uppercase"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h4" color={colors.greenAccent[400]}>
        {subtile}
      </Typography>
    </Box>
  );
}
