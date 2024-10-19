import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';
import ParentDashboard from './components/ParentDashboard';

function App() {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={token ? <DashboardRouter /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

function DashboardRouter() {
  const userRole = getUserRole(); // Function to decode JWT and extract role
  switch (userRole) {
    case 'Admin':
      return <AdminDashboard />;
    case 'Teacher':
      return <TeacherDashboard />;
    case 'Student':
      return <StudentDashboard />;
    case 'Parent':
      return <ParentDashboard />;
    default:
      return <Navigate to="/login" />;
  }
}

function getUserRole() {
  const token = localStorage.getItem('token');
  if (!token) return null;
  const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
  const roles = { 1: 'Admin', 2: 'Teacher', 3: 'Student', 4: 'Parent' };
  return roles[decodedToken.roleId];
}

export default App;
