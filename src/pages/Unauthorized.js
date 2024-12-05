import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <Container maxWidth="xs">
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 8, padding: 3, borderRadius: 1, boxShadow: 3, }} >
        <Typography variant="h5" color="error">
          403 - Unauthorized
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          You do not have permission to access this page.
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: 3 }} component={Link} to="/" >
          Go back to Login
        </Button>
      </Box>
    </Container>
  );
};

export default Unauthorized;
