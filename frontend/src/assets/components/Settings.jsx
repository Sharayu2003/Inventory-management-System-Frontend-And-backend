import React, { useState, useEffect } from "react";
import "./Settings.css";

export default function Settings() {
  // Profile form state
  const [name, setName] = useState("Admin User");
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("");

  // Theme state - read from localStorage or default light
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("app-theme") || "light";
  });

  useEffect(() => {
    document.body.dataset.theme = theme; // set data-theme attribute for CSS
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  // Submit handler for profile update
  function handleProfileUpdate(e) {
    e.preventDefault();
    // Here you can add API call to update profile on backend
    alert(`Profile Updated!\nName: ${name}\nEmail: ${email}`);
    setPassword(""); // clear password input
  }

  // Toggle theme handler
  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="settings-container">
      <h2>Settings</h2>

      <form onSubmit={handleProfileUpdate} className="profile-form">
        <h3>Update Profile</h3>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter new password"
          />
        </label>

        <button type="submit">Update Profile</button>
      </form>

      <div className="theme-toggle">
        <h3>Change Theme</h3>
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      {/* Add your CSS styles in an external or inline style */}
    </div>
  );
}
