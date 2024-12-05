import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Box } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SchoolIcon from '@mui/icons-material/School';
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleIcon from '@mui/icons-material/People';
import DashboardIcon from '@mui/icons-material/Dashboard';

const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = "/";
  };

  const renderLinks = () => {
    if (!auth.isAuthenticated) {
      return null;
    }

    switch (auth.user.role) {
      case "Owner":
        return (
          <>
            <ListItem button component={Link} to="/owner">
              <ListItemIcon>
                <DashboardIcon/>
              </ListItemIcon>
              <ListItemText primary="Owner Dashboard"/>
            </ListItem>
            <ListItem button component={Link} to="/owner/manage-users">
              <ListItemIcon>
                <PeopleIcon/>
              </ListItemIcon>
              <ListItemText primary="Manage Users"/>
            </ListItem>
            <ListItem button component={Link} to="/owner/manage-orders">
              <ListItemIcon>
                <ShoppingCartIcon/>
              </ListItemIcon>
              <ListItemText primary="Manage Orders" />
            </ListItem>
            <ListItem button component={Link} to="/owner/manage-products">
              <ListItemIcon>
                <InventoryIcon/>
              </ListItemIcon>
              <ListItemText primary="Manage Products" />
            </ListItem>
          </>
        );
      case "Manager":
        return (
          <>
            <ListItem button component={Link} to="/manager">
              <ListItemIcon>
                <DashboardIcon/>
              </ListItemIcon>
              <ListItemText primary="Manager Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/instructors">
              <ListItemIcon>
                <SchoolIcon/>
              </ListItemIcon>
              <ListItemText primary="Manage Instructors" />
            </ListItem>
            <ListItem button component={Link} to="/students">
              <ListItemIcon>
                <SchoolIcon/>
              </ListItemIcon>
              <ListItemText primary="Manage Students" />
            </ListItem>
          </>
        );
      case "Instructor":
        return (
          <>
            <ListItem button component={Link} to="/instructor">
              <ListItemIcon>
                <DashboardIcon/>
              </ListItemIcon>
              <ListItemText primary="Instructor Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/students">
              <ListItemIcon>
                <SchoolIcon/>
              </ListItemIcon>
              <ListItemText primary="Manage Students" />
            </ListItem>
          </>
        );
      case "Student":
        return (
          <ListItem button component={Link} to="/student">
            <ListItemIcon>
              <DashboardIcon/>
            </ListItemIcon>
            <ListItemText primary="Student Dashboard" />
          </ListItem>
        );
      default:
        return null;
    }
  };

  return (
    <Drawer variant="permanent" anchor="left">
      <Box sx={{ width: 250 }}>
        <Typography variant="h6" sx={{ p: 2 }}>
          RBAC Dashboard
        </Typography>
      </Box>
      <List>
        {renderLinks()}
        {auth.isAuthenticated && (
          <ListItem button onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon/>
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        )}
      </List>
    </Drawer>
  );
};
export default Navbar;
