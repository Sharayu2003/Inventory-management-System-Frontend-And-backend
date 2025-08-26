import ReactDom from "react-dom";
import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Dashsidebar from "./Dashsidebar";
import CategoryService from "../services/CategoryService";
import "./Addcategory.css";

const Addcategory = () => {
    
 const [cat, setCat] = useState({
   category_id:"",
    category_name:"",
    category_discription:""
    
 });


 let[msg,setMsg]=useState("");

 let saveCategory=(e)=>{
    e.preventDefault(); 
    let promise=CategoryService.saveCategory(cat);
    console.log(cat);
    promise.then((result)=>{
       setMsg("Category is added");
    }).catch((err)=>{
       setMsg("Category is not added");
    })
 }

   return (
 <>
<Navbar />
<div className="layout-container">
<Dashsidebar />
<div className="category-form-wrapper">
<form className="category-form">
 <h2>Add Category</h2>

 <div className="field">
 <label>Category Name</label>
 <input type="text" name="product_name" onChange={(e)=>setCat(prev=>{return{...prev,category_name:e.target.value}})}
value={cat.category_name}/>
</div>
<div className="field">
<label>Category Description</label>
<input type="text" name="uniquename" onChange={(e)=>setCat(prev=>{return{...prev,category_discription:e.target.value}})}
value={cat.category_discription} />
</div>
 <div className="button-row">
<button type="submit" onClick={saveCategory}>Save Category</button>
<button type="button" className="clear-btn">Clear</button></div>
<label>
   {msg}
</label>
</form>
</div>
</div>
</>
);
};

export default Addcategory;