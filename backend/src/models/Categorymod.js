let db = require("../../db.js");

exports.createCategory = (category_name, category_discription) => {
    return new Promise((resolve, reject) => {
        db.query("insert into Category values('0',?,?)", [category_name, category_discription], (err, result) => {
            if (err) {
                reject("category not save");
                console.log(err);
            } else {
                resolve("category save");
            }
        });
    });
}

exports.getallcategories = () => {
    return new Promise((resolve, reject) => {
        db.query("select *from Category", (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        })
    })
}

exports.getallcategorybyId = (id) => {
    return new Promise((resolve, reject) => {
        console.log("in getAllCatBy Id ::  ");
        db.query("select *from Category where category_id=?", [id], (err, result) => {
            if (err) {
                console.log("error is "+err);
                reject(err);
            } else {
                console.log("Result is:", result);
                resolve(result);
            }
        });
    });
}




exports.FinalUpdatecat = (category_id,category_name,category_discription) =>{
    return new Promise((resolve,reject) => {
        db.query("update Category set category_name=?,category_discription=? where category_id=?",[category_name,category_discription,category_id],(err,result) => {
            if(err){
                reject(err);
            }else{
                resolve("Succefully updated...!");
            }
        })
    })
}

exports.Deletecat = (category_id) => {
    return new Promise((resolve,reject) => {
        db.query(" delete from category where category_id=?",[category_id],(err,result) => {
            if(err){
                reject(err);
            }else{
                resolve("category deleted...!");
            }
        })
    })
}

exports.searchcat = (category_name) => {
    return new Promise((resolve,reject) =>{
        db.query("select *from Category where category_name like '%"+category_name+"%'",(err,result) =>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}

