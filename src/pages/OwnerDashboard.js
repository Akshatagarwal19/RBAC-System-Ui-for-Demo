import React from "react";
import { Box, Typography, Container, Button, Grid2 } from "@mui/material";
import { Link } from "react-router-dom";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AssignmentIcon from "@mui/icons-material/Assignment";
import InventoryIcon from "@mui/icons-material/Inventory";

const OwnerDashboard = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Container maxWidth="lg" sx={{ marginTop: 4, marginLeft: { xs: 0, sm: "240px" },  padding: 3, }} >
        <Box sx={{ padding: 3, boxShadow: 3, borderRadius: 2, backgroundColor: "white", }} >
          <Typography variant="h4" gutterBottom>
            Owner Dashboard
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 3 }}>
            Welcome to the owner section of the app! Here you can manage all the key aspects of the system.
          </Typography>

          <Grid2 container spacing={2}>
            <Grid2 item xs={12} sm={6} md={4}>
              <Button component={Link} to="/owner/manage-users" variant="contained" fullWidth color="primary" sx={{ padding: 2, display: "flex", alignItems: "center", justifyContent: "center", }} startIcon={<ManageAccountsIcon />} >
                Manage Users
              </Button>
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4}>
              <Button component={Link} to="/owner/manage-orders" variant="contained" fullWidth color="primary" sx={{ padding: 2, display: "flex", alignItems: "center", justifyContent: "center", }}
                startIcon={<AssignmentIcon />} >
                Manage Orders
              </Button>
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4}>
              <Button component={Link} to="/owner/manage-products" variant="contained" fullWidth color="primary" sx={{ padding: 2, display: "flex", alignItems: "center", justifyContent: "center", }} startIcon={<InventoryIcon />} >
                Manage Products
              </Button>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Box>
  );
};

export default OwnerDashboard;
