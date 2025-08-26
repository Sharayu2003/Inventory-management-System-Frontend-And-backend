let db=require("../../db.js");

exports.createCustomers=(customer_name,email,contact,company_name,address,GSTNO)=>{
    return new Promise((resolve,reject)=>{
        db.query("insert into Customers values ('0',?,?,?,?,?,?)",[customer_name,email,contact,company_name,address,GSTNO],(err,result)=>{
            if(err){
                reject ("customers not save");
            }
            else{
                resolve ("customers save successfully");
            }

        });
    });
}

exports.getAllCustomers=()=>{
    return new Promise((resolve,reject)=>{
        db.query("select *from Customers",(err,result)=>{
            if(err){
                reject("something wrong");
            }else{
                resolve("success");
            }
        });
    });
}

exports.getallcustomerybyId= (id) => {
    return new Promise((resolve, reject) => {
        console.log("in getAllCatBy Id ::  ");
        db.query("select *from Customers where customer_id=?", [id], (err, result) => {
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

exports.FinalUpdatecust = (customer_name,email,contact,company_name,address,GSTNO,customer_id) =>{
    return new Promise((resolve,reject) => {
        db.query("update Customers set customer_name=?,email=?,contact=?,company_name=?,address=?,GSTNO=? where customer_id=?",[customer_name,email,contact,company_name,address,GSTNO,customer_id],(err,result) => {
            if(err){
                reject(err);
            }else{
                resolve({result});
            }
        })
    })
}

exports.deleteCust = (customer_id) => {
    return new Promise((resolve,reject) => {
        db.query(" delete from  Customers where customer_id=?",[customer_id],(err,result) => {
            if(err){
                reject(err);
            }else{
                resolve("Customer deleted...!");
            }
        })
    })
}

exports.searchcust = (customer_name) => {
    return new Promise((resolve,reject) =>{
        db.query("select *from Customers where customer_name like '%"+customer_name+"%'",(err,result) =>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}

