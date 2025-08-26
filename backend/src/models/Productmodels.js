
let db = require("../../db.js");

//model
exports.createProduct = (product_name, uniquename,quantity,price,created_at,updated_at ,image,category_id) => {
    return new Promise((resolve, reject) => {
        db.query("insert into Products values('0',?,?,?,?,?,?,?,?)", [product_name, uniquename,quantity,price,created_at,updated_at ,image,category_id], (err, result) => {
            if (err) {
                reject("product not save");
                console.log(err);
            } else {
                resolve("product save");
            }
        });
    });
}

exports.getallProducts =() => {
    return new Promise((resolve, reject) => {
        db.query("select *from  Products", (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        })
    })


}


exports.getallproductsbyId = (id) => {
    return new Promise((resolve, reject) => {
        console.log("in getAllprodBy Id ::  ");
        db.query("select *from  Products where product_id=?", [id], (err, result) => {
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

exports.FinalUpdateprod = (product_name,uniquename,quantity,price,created_at,updated_at,image,category_id,product_id) =>{
    return new Promise((resolve,reject) => {
        db.query("update Products set product_name=?,uniquename=?,quantity=?,price=?,created_at=?,updated_at=?,image=?,category_id=? where product_id=?",[product_name,uniquename,quantity,price,created_at,updated_at,image,category_id,product_id],(err,result) => {
            if(err){
                reject(err);
            }else{
                resolve("Succefully updated...!");
            }
        })
    })
}


exports.Deleteprod = (product_id) => {
    return new Promise((resolve,reject) => {
        db.query(" delete from  Products where product_id=?",[product_id],(err,result) => {
            if(err){
                reject(err);
            }else{
                resolve("product deleted...!");
            }
        })
    })
}

exports.searchprod = (product_name) => {
    return new Promise((resolve,reject) =>{
        db.query("select *from  Products where product_name like '%"+product_name+"%'",(err,result) =>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}





