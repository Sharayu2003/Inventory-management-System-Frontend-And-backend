import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Dashsidebar from "./Dashsidebar";
import UserService from "../services/UserService"; // ✅ Make sure this is imported

let Updateuser = () => {
  let { uid, username, email, password, contact, address } = useParams();

  let [user, setUser] = useState({
    uid: uid,
    username: username,
    email: email,
    password: password,
    contact: contact,
    address: address
  });

  let [msg, setMsg] = useState("");

  let updateUserInfo = (e) => {
    e.preventDefault(); 
    let promise = UserService.updateUser(user);
    promise.then((result) => {
      setMsg(result.data.message);
    }).catch((err) => {
      setMsg("Error: " + err.message);
    });
  };

  return (
    <>
      <Navbar />
      <div className="Main">
        <Dashsidebar />
        <div className="form-container">
          <h2>Update User</h2>
          <form className="user-form" onSubmit={updateUserInfo}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={(e) => setUser(prev => ({ ...prev, username: e.target.value }))}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={(e) => setUser(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={(e) => setUser(prev => ({ ...prev, password: e.target.value }))}
              />
            </div>

            <div className="form-group">
              <label>Contact</label>
              <input
                type="text"
                name="contact"
                value={user.contact}
                onChange={(e) => setUser(prev => ({ ...prev, contact: e.target.value }))}
              />
            </div>

            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={user.address}
                onChange={(e) => setUser(prev => ({ ...prev, address: e.target.value }))}
              />
            </div>

            <div className="button-group">
              <button type="submit">Update User</button>
              <button type="button">Cancel</button>
            </div>

            <div className="button-group">
              <h3>{msg}</h3>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Updateuser;
