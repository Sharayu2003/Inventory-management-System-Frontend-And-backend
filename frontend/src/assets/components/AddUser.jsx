import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddUser.css";
import Dashsidebar from "./Dashsidebar";
import Navbar from "./Navbar";
import UserService from "../services/UserService";

const AddUser = () => {
  const [formData, setFormData] = useState({
    uid: "",
    username: "",
    email: "",
    password: "",
    contact: "",
    address: "",
    role: "",
    msg: ""
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // You can add fetch/axios POST request here
  };

  // Handle clear/cancel
  const handleCancel = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
      contact: "",
      address: "",
      role: ""
    });
  };

  // Inside your AddUser component
  let [msg, setMsg] = useState("");

  let addUser = () => {
    const { username, email, password, contact, address, role } = formData;

    // Prevent submitting if username is blank or whitespace
    if (
      !username.trim() ||
      !email.trim() ||
      !password.trim() ||
      !contact.trim() ||
      !address.trim() ||
      !role
    ) {
      setMsg("Please fill in all required fields.");
      return;
    }

    UserService.addUser(formData)
      .then((result) => {
        setMsg(result.data.message);
      })
      .catch((err) => {
        setMsg(err.message || "Error occurred");
      });
  };

  // let [msg,setMsg]=useState("");
  // let addUser=()=>{
  //   let promise=UserService.addUser(formData);
  //   promise.then((result)=>{
  //     setMsg(result.data.message);
  //   }).catch((err)=>{
  //     setMsg(err.Message);
  //   });
  // }

  return (
    <>
      <Navbar />
      <div className="Main">
        <Dashsidebar />
        <div className="form-container">
          <h2>Add User</h2>
          <form onSubmit={handleSubmit} className="user-form">
            

            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Contact</label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>

            <div className="button-group">
              <button type="submit" onClick={addUser}>Add User</button>
              <button type="button" onClick={handleCancel}>Cancel</button>
            </div>

            <div className="form-group">
              <label>{msg}</label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUser;
