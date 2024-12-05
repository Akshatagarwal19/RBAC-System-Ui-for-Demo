import React from "react";
import { Box, Typography, Container, Button, Grid2 } from "@mui/material";
import { Link } from "react-router-dom";
import ClassIcon from "@mui/icons-material/Class";
import PeopleIcon from "@mui/icons-material/People";

const InstructorDashboard = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      {/* Sidebar takes space, so offset the dashboard */}
      <Box component="main" sx={{ flexGrow: 1, padding: 3, marginLeft: { sm: "240px" } }} >
        <Container maxWidth="lg" sx={{ marginTop: 4 }}>
          <Box sx={{ padding: 3, boxShadow: 3, borderRadius: 2, backgroundColor: "white", }} >
            <Typography variant="h4" gutterBottom>
              Instructor Dashboard
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 3 }}>
              Welcome to the Instructor section of the app! Here you can manage
              your students and courses.
            </Typography>

            <Grid2 container spacing={2}>
              <Grid2 item xs={12} sm={6} md={4}>
                <Button component={Link} to="/instructor/manage-courses" variant="contained" fullWidth color="primary" sx={{ padding: 2, display: "flex", alignItems: "center", justifyContent: "center", }} startIcon={<ClassIcon />} >
                  Manage Courses
                </Button>
              </Grid2>
              <Grid2 item xs={12} sm={6} md={4}>
                <Button component={Link} to="/instructor/manage-students" variant="contained" fullWidth color="primary" sx={{ padding: 2, display: "flex", alignItems: "center", justifyContent: "center", }} startIcon={<PeopleIcon />} >
                  Manage Students
                </Button>
              </Grid2>
            </Grid2>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default InstructorDashboard;
