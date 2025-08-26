import { useState, useEffect } from "react";
import Dashsidebar from "./Dashsidebar";
import Navbar from "./Navbar";
import UserService from "../services/UserService";
import "./Viewuser.css";
import { NavLink } from "react-router-dom";

let ViewUser = () => {
  let [users, setUsers] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    if (users.length === 0) {
      UserService.getUser()
        .then((res) => {
          setUsers(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [users.length]);

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <Navbar />
      <div className="Main2">
        <Dashsidebar />
        <div className="table-container">
          <table className="table table-striped mt-4">
            <thead>
              <tr>
                <th>SR No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Role</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((p, index) => (
                <tr key={p.uid || index}>
                  <td>{p.uid}</td>
                  <td>{p.username}</td>
                  <td>{p.email}</td>
                  <td>{p.password}</td>
                  <td>{p.contact}</td>
                  <td>{p.address}</td>
                  <td>{p.role}</td>
                  <td>
                    <NavLink className="nav-link" to={`/deluserbyid/${p.uid}`}>
                          Delete
                    </NavLink>

                  </td>
                  <td>
                    <NavLink className="nav-link" to={`/updateuserbyid/${p.uid}/${p.username}/${p.email}/${p.password}/${p.contact}/${p.address}`}>
                      Edit
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination controls */}
          <div className="pagination">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="page-btn"
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={currentPage === i + 1 ? "page-btn active" : "page-btn"}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="page-btn"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewUser;
