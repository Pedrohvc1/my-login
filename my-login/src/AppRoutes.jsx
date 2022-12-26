import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import React, {useContext} from "react"
import LoginPage from "./pages/LoginPages";
import HomePage from "./pages/HomePages";
import { AuthProvider, AuthContext } from "./contexts/auth";

const AppRoutes = () => {    
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);

        if(loading){
            return <div className="loading">Loading...</div>
        }

        if(!authenticated){
            return <Navigate to="/login" />;
        }
        return children;
    };

  // user == null
  // authenticated = false

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" 
                 element={<LoginPage /> }>
          </Route>
        </Routes>
        <Routes>
          <Route exact path="/" 
                 element={<Private> <HomePage /> </Private> }>                    
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};
export default AppRoutes;
