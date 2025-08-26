import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useLocation
} from "react-router-dom";

import Login from "./assets/components/Login";
import Home from "./assets/components/Home";
import About from "./assets/components/About";
import Features from "./assets/components/Features";
import Contact from "./assets/components/Contact";
import Register from "./assets/components/Register";
import Dashboard from "./assets/components/dashboard";
import AddUser from "./assets/components/AddUser";
import Settings from "./assets/components/Settings";
import Viewuser from "./assets/components/Viewuser";
import Addcategory from "./assets/components/Addcategory";
import Deluser from "./assets/components/Deluser";
import Updateuser from "./assets/components/Updateuser";
import Viewcategory from "./assets/components/Viewcategory";

class App extends React.Component {
  render() {
    const { location } = this.props;
    // Hide navbar on /dashboard
    const hideNavbar = location.pathname === "/dashboard"||location.pathname === "/AddUser"||location.pathname === "/ViewUser"||location.pathname === "/Addcategory";

    return (
      <>
        {!hideNavbar && (
          <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 control">
            <a className="navbar-brand" href="#">
              <h5>Inventory Management System</h5>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav control">
                <NavLink to="/" className="nav-item nav-link">
                  Home
                </NavLink>
                <NavLink to="/about" className="nav-item nav-link">
                  About
                </NavLink>
                <NavLink to="/features" className="nav-item nav-link">
                  Features
                </NavLink>
                <NavLink to="/contact" className="nav-item nav-link">
                  Contact
                </NavLink>
              </div>
            </div>
            <div className="navbar-nav divs">
              <NavLink to="/login" className="nav-item nav-link">
                Login
              </NavLink>
            </div>
            <div className="navbar-nav divs">
              <NavLink to="/register" className="nav-item nav-link">
                Sign up
              </NavLink>
            </div>
          </nav>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/AddUser" element={<AddUser/>} />
          <Route path="/dashboard/Settings" element={<Settings />} />
          <Route path="/Viewuser" element={<Viewuser/>}/>
          <Route path="/deluserbyid/:uid" element={<Deluser />} />
          <Route path="/updateuserbyid/:uid/:username/:email/:password/:contact/:address" element={<Updateuser/>} />

          <Route path="/Addcategory" element={<Addcategory/>} />

          <Route path="/Viewcategory" element={<Viewcategory/>} />


        </Routes>
      </>
    );
  }
}

// Functional wrapper to provide location prop to App
function AppWrapper() {
  const location = useLocation();
  return <App location={location} />;
}

export default function Root() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}
