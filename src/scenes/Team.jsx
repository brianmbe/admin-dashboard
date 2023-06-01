import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../data/mockData";
import { tokens } from "../theme/theme";
import { Header } from "./index";

// Icons
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";

export default function Team() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "image",
      headerName: "Profile",
      renderCell: ({ row: { image } }) => {
        return (
          <img
            src={image}
            alt="profile"
            height="30px"
            width="30px"
            style={{ borderRadius: "50%" }}
          />
        );
      },
    },
    {
      field: "name",
      headerName: "Name",
      renderCell: ({ row: { name } }) => {
        return (
          <Typography sx={{ fontWeight: "bold", textTransform: "uppercase" }}>
            {name}
          </Typography>
        );
      },
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "age",
      headerName: "Age",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone No.",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            bgcolor={
              access === "admin"
                ? colors.greenAccent[500]
                : access === "manager"
                ? colors.redAccent[500]
                : colors.blueAccent[500]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color="#fff" sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
      cellClassName: "name-column--cell",
    },
  ];

  return (
    <Box>
      <Header title="team" subtile="Managing the team members" />
      <Box
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            ":hover": {
              bgcolor: colors.blueAccent[500],
              color: "white",
            },
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            bgcolor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            bgcolor: colors.primary[900],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            bgcolor: colors.blueAccent[700],
          },
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
}
