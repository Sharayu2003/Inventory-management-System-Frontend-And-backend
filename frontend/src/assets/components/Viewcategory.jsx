import { useState, useEffect } from "react";
import Dashsidebar from "./Dashsidebar";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import CategoryService from "../services/CategoryService";

const ViewCategory = () => {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const categoriesPerPage = 5;

  useEffect(() => {
    CategoryService.getCategory()
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); 

  // Pagination logic
  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = categories.slice(indexOfFirstCategory, indexOfLastCategory);
  const totalPages = Math.ceil(categories.length / categoriesPerPage);

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
                <th>Category Name</th>
                <th>Category Description</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {currentCategories.map((category, index) => (
                <tr key={category.category_id || index}>
                  <td>{category.category_id}</td>
                  <td>{category.category_name}</td>
                  <td>{category.category_discription}</td>
                  <td>
                    <NavLink className="nav-link" to="">
                      Delete
                    </NavLink>
                  </td>
                  <td>
                    <NavLink className="nav-link" to="">
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

export default ViewCategory;
