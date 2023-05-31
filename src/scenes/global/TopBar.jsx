import React, { useContext } from "react";
import {
  Box,
  InputBase,
  useTheme,
  IconButton,
  Typography,
} from "@mui/material";
import { colorModeContext, tokens } from "../../theme/theme";
// icons
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function TopBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colormode = useContext(colorModeContext);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mt: 2,
      }}
    >
      <Box display="flex" alignItems="center">
        <img
          src="../../assets/admin.svg"
          height="40px"
          width="40px"
          alt="admin"
        />
        <Typography
          component="h1"
          fontWeight="bold"
          variant="h4"
          sx={{ pl: "10px" }}
        >
          FirstBank{" "}
        </Typography>
      </Box>

      {/* Search box */}
      <Box
        sx={{
          display: "flex",
          borderRadius: "20px",
          bgcolor:
            theme.palette.mode === "light"
              ? colors.grey[800]
              : colors.primary[400],
          width: "40%",
        }}
      >
        <InputBase
          sx={{
            ml: 2,
            flex: 1,
          }}
          placeholder="Search"
        />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchOutlinedIcon sx={{}} />
        </IconButton>
      </Box>

      {/* Icons */}
      <Box display="flex" justifyContent="space-between">
        <IconButton onClick={colormode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlineOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
