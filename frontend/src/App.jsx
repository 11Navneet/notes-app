import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import { useAuthContext } from './context/AuthContext';

const App = () => {

  const {authUser} = useAuthContext();
  console.log("app.jsx",authUser);

  const routes = (
    <Router>
      <Routes>
        <Route path="/"  element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path="/login"  element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path="/signup"  element={authUser ? <Navigate to='/' /> : <Signup />} />
      </Routes>
    </Router>
  );
  
  return (
    <div>
      {routes}
    </div>
  )
}

export default App
