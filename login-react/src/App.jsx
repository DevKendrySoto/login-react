import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import AppRoutes from "./routes/route"; 

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes /> 
      </Router>
    </AuthProvider>
  );
}

export default App;
