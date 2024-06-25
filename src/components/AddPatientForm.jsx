// In AddPatientForm.js
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { TextField, Button, Box } from "@mui/material";
import { PatientService } from "../utils/api";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddPatientForm = () => {
  const [dob, setDob] = useState("");
  const [ssn, setSsn] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const [submitting, setSubmitting] = useState(false);

  const validationSchema = Yup.object({
    dob: Yup.date()
      .required("Date of Birth is required")
      .typeError("Invalid date - correct format is YYYY-MM-DD"),
    ssn: Yup.string()
      .required("SSN is required")
      .matches(/^\d{9}$/, "SSN must be in the format XXXXXXXXX"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await PatientService.createPatient(values);
      navigate("/patients"); // Navigate back to the list after successful creation
    } catch (error) {
      console.error("Failed to create patient", error);
      setSubmitting(false);
    }
  };
  if (location.pathname === "/patients/add") {
    return (
      <>
        <h1>Add Patient</h1>
        <Formik
          initialValues={{ dob: "", ssn: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, handleChange, handleBlur, touched, errors }) => (
            <Form>
              <Box sx={{ mt: 3 }}>
                <Field
                  as={TextField}
                  fullWidth
                  label="Date of Birth"
                  type="date"
                  name="dob"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.dob && Boolean(errors.dob)}
                  helperText={touched.dob && errors.dob}
                  sx={{ mb: 2 }}
                  InputLabelProps={{ shrink: true }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  label="Gender"
                  name="gender"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.gender && Boolean(errors.gender)}
                  helperText={touched.gender && errors.gender}
                  sx={{ mb: 2 }}
                  InputLabelProps={{ shrink: true }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  label="First Name"
                  name="first_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.first_name && Boolean(errors.first_name)}
                  helperText={touched.first_name && errors.first_name}
                  sx={{ mb: 2 }}
                  InputLabelProps={{ shrink: true }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  label="Last Name"
                  name="last_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.last_name && Boolean(errors.last_name)}
                  helperText={touched.last_name && errors.last_name}
                  sx={{ mb: 2 }}
                  InputLabelProps={{ shrink: true }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  label="Address"
                  name="address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.address && Boolean(errors.address)}
                  helperText={touched.address && errors.address}
                  sx={{ mb: 2 }}
                  InputLabelProps={{ shrink: true }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  label="Social Security Number"
                  name="ssn"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.ssn && Boolean(errors.ssn)}
                  helperText={touched.ssn && errors.ssn}
                />

                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{ mt: 2, mb: 2 }}
                >
                  Add Patient
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </>
    );
  }
};

export default AddPatientForm;
