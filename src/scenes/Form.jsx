import React from "react";
import { Box, Button, Grid, TextField, useMediaQuery } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "./global/Header";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const phoneNumberRegx = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

// for validation
const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("Invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneNumberRegx, "Phone number isnot valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});

export default function Form() {
  const isNoneMobile = useMediaQuery("min-width:600px");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box>
      <Header title="create user" subtile="Create a new User profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleFormSubmit,
        }) => {
          <form onSubmit={handleFormSubmit}>
            <Box
              sx={{
                display: "grid",
                gap: "30px",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                "& > div": {
                  gridColumn: isNoneMobile ? undefined : "span 4",
                },
              }}
              component={"form"}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="first Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>

            {/* gid
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="first Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={!!touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                  sx={{ bgcolor: "red" }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={!!touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                />
              </Grid>
            </Grid> */}
          </form>;
        }}
      </Formik>
    </Box>
  );
}
