import React from "react";
import { Box, Typography, Container, Button, Grid2 } from "@mui/material";
import { Link } from "react-router-dom";
import SchoolIcon from '@mui/icons-material/School';
import GradeIcon from '@mui/icons-material/Grade';

const StudentDashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4,marginLeft: { xs: 0, sm: "240px" },padding: 3, }}>
      <Box sx={{ padding: 3, boxShadow: 3, borderRadius: 2, backgroundColor: 'white' }}>
        <Typography variant="h4" gutterBottom>
          Student Dashboard
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 3 }}>
          Welcome to the Student section of the app! Here you can view your courses and grades.
        </Typography>

        <Grid2 container spacing={2}>
          <Grid2 item xs={12} sm={6} md={4}>
            <Button component={Link} to="/student/courses" variant="contained" fullWidth color="primary" sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }} startIcon={<SchoolIcon />} >
              View Courses
            </Button>
          </Grid2>
          <Grid2 item xs={12} sm={6} md={4}>
            <Button component={Link} to="/student/grades" variant="contained" fullWidth color="primary" sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }} startIcon={<GradeIcon />} >
              View Grades
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
};

export default StudentDashboard;
