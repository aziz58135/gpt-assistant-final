import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/Dashboard';
import AppDemoPage from './pages/AppDemo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/app-demo" element={<AppDemoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
