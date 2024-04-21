import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in when the component mounts
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="navbar">
      <h3>Networking Aptitude Tests</h3>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <a href="/#about">About Us</a>
        </li>
        <li>
          <a href="/#services">Our Services</a>
        </li>
        <li>
          <a href="/#contact">Contact Us</a>
        </li>
      </ul>
      <div>
        {isLoggedIn ? (
          <NavLink to="/profile" className="login_btn">Profile</NavLink>
        ) : (
          <NavLink to="/login" className="login_btn">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
