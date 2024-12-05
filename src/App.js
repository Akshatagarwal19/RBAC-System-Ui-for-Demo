import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import OwnerDashboard from "./pages/OwnerDashboard";
import Unauthorized from "./pages/Unauthorized";
import ManagerDashboard from "./pages/ManagerDashboard";
import InstructorDashboard from "./pages/InstructorDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import { AuthProvider } from "./context/AuthContext";
import { useSelector } from "react-redux";

function App() {
  const auth = useSelector((state) => state.auth);
  return (
    <AuthProvider>
      <Router>
        {auth.isAuthenticated && <Navbar/>}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          <Route
            path="/owner"
            element={
              <ProtectedRoute allowedRoles={["Owner"]}>
                <OwnerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/manager"
            element={
              <ProtectedRoute allowedRoles={["Owner","Manager"]}>
                <ManagerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/instructor"
            element={
              <ProtectedRoute allowedRoles={["Owner","Manager","Instructor"]}>
                <InstructorDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/student"
            element={
              <ProtectedRoute allowedRoles={["Owner","Manager","Instructor","Student"]}>
                <StudentDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
