let db=require("../../db.js");


exports.createSuppliers=(supplier_name,company_name,contact,email,address,GSTNO)=>{
     return new Promise((resolve,reject)=>{
        db.query("insert into Supplier values('0',?,?,?,?,?,?)", [supplier_name,company_name,contact,email,address,GSTNO], (err, result) => {
            if (err) {
                reject("Supplier not save");
                console.log(err);
            } else {
                resolve("Supplier save"+result);
            }
        });
    });
}

exports.getAllSupplier=()=>{
    return new Promise((resolve,reject)=>{
        db.query("select*from Supplier",(err,result)=>{
           if(err){
            reject(err);
           }else{
            resolve(result);
           }
          });
        });
    }

exports.getallsupplierbyId = (id) => {
    return new Promise((resolve, reject) => {
        console.log("in getAllsuppBy Id ::  ");
        db.query("select *from  Supplier where supplier_id=?", [id], (err, result) => {
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

exports.FinalUpdatesupp = (supplier_name,company_name,contact,email,address,GSTNO,supplier_id) =>{
    return new Promise((resolve,reject) => {
        
        db.query("update Supplier set supplier_name=?,company_name=?,contact=?,email=?,address=?,GSTNO=? where supplier_id=?",[supplier_name,company_name,contact,email,address,GSTNO,supplier_id],(err,result) => {
            if(err){
                reject(err);
            }else{
                resolve("Succefully updated...!");
            }
        })
    })
}

exports.searchsupp = (supplier_name) => {
    return new Promise((resolve,reject) =>{
        db.query("select *from  Supplier where supplier_name like '%"+supplier_name+"%'",(err,result) =>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}

exports.Deletesupp = (supplier_id) => {
    return new Promise((resolve,reject) => {
        db.query(" delete from Supplier where supplier_id=?",[supplier_id],(err,result) => {
            if(err){
                reject(err);
            }else{
                resolve("supplier deleted...!");
            }
        })
    })
}