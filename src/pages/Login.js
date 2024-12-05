import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  TextField,
  Typography,
  Box,
  Container,
  Card,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await axios.post("http://localhost:3001/login", form);
      const { user, token } = response.data;
      dispatch(login({ user, token }));
      navigate(`/${user.role.toLowerCase()}`);
    } catch (err) {
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stacks on small screens
          gap: 3,
          paddingRight:3,
          alignItems: "center",
          boxShadow: 3,
          width: "100%",
          maxWidth: "900px",
        }}
      >
        {/* Logo Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/Logo.jpg" // Replace with the path to your logo
            alt="RBAC System Logo"
            style={{
              maxWidth: "100%",
              height: "100%",
            }}
          />
        </Box>

        {/* Login Form Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Typography variant="h4" gutterBottom align="center">
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" gap={2}>
              <TextField
                label="Username"
                variant="outlined"
                name="username"
                value={form.username}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                fullWidth
                required
              />
              {error && (
                <Typography color="error" align="center" variant="body2">
                  {error}
                </Typography>
              )}
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                sx={{
                  padding: "0.8rem",
                  fontSize: "1rem",
                  textTransform: "capitalize",
                }}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : "Login"}
              </Button>
            </Box>
          </form>
        </Box>
      </Card>
    </Container>
  );
};

export default Login;
