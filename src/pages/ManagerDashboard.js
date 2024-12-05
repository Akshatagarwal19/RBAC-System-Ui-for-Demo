import React from "react";
import { Box, Typography, Container, Button, Grid2 } from "@mui/material";
import { Link } from "react-router-dom";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import SchoolIcon from '@mui/icons-material/School';
import ClassIcon from '@mui/icons-material/Class';

const ManagerDashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4,marginLeft: { xs: 0, sm: "240px" },padding: 3, }}>
      <Box sx={{ padding: 3, boxShadow: 3, borderRadius: 2, backgroundColor: 'white' }}>
        <Typography variant="h4" gutterBottom>
          Manager Dashboard
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 3 }}>
          Welcome to the Manager section of the app! Here you can manage various aspects of the system.
        </Typography>

        <Grid2 container spacing={2}>
          <Grid2 item xs={12} sm={6} md={4}>
            <Button component={Link} to="/manager/manage-instructors" variant="contained" fullWidth color="primary" sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }} startIcon={<SupervisorAccountIcon />} >
              Manage Instructors
            </Button>
          </Grid2>
          <Grid2 item xs={12} sm={6} md={4}>
            <Button component={Link} to="/manager/manage-students" variant="contained" fullWidth color="primary" sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }} startIcon={<SchoolIcon />} >
              Manage Students
            </Button>
          </Grid2>
          <Grid2 item xs={12} sm={6} md={4}>
            <Button component={Link} to="/manager/manage-courses" variant="contained" fullWidth color="primary" sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }} startIcon={<ClassIcon />} >
              Manage Courses
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
};

export default ManagerDashboard;
