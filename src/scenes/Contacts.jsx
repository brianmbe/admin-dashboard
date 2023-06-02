import React from "react";
import {
  Box,
  Typography,
  useTheme,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "../data/mockData";
import { tokens } from "../theme/theme";
import { Header } from "./index";

export default function Contacts() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // columns for the data grid
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
    },
    {
      field: "registrarId",
      headerName: "Register ID",
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
      field: "age",
      headerName: "Age",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone No.",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "ZipCode",
      flex: 1,
    },
  ];

  return (
    <Box>
      <Header
        title="Contacts"
        subtile="Your contact list for future referrence"
      />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                Hello
              </Grid>
              <Grid item xs={12} sm={4}>
                Hello
              </Grid>
              <Grid item xs={12} sm={4}>
                Hello
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <img
                src="../../public/assets/man.jpg"
                height="250px"
                width="250px"
                alt="image-1"
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Card>
                <CardContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium optio,
                  eaque rerum! Provident similique accusantium nemo autem.
                  Veritatis obcaecati tenetur iure eius earum ut molestias
                  architecto voluptate aliquam nihil, eveniet aliquid culpa
                  officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                  harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                  quia. Quo neque error repudiandae fuga? Ipsa laudantium
                  molestias eos
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
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
          "& .MuiCheckbox-root": {
            color: colors.greenAccent[200],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: colors.grey[100],
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
}
