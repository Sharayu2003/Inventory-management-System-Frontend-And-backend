let datab=require("../../db.js");

exports.register=(username,email,password,contact,address,role) =>{
    return new Promise((resolve,reject) => {
        datab.query("insert into User values('0',?,?,?,?,?,?)",[username,email,password,contact,address,role],(err,result) => {
            if(err){
                console.log(err);
                reject("not save"+err);
            }else{
                resolve("Registration Succefull...");
            }
        });
    });
}

exports.Viewuser = () =>{
    return new Promise((resolve,reject) => {
        datab.query("select *from User",(err,result) => {
             if(err){
                console.log(err);
                reject("something went wrong"+err);
            }else{
                resolve(result);
            }
        })
    })
}

exports.DeleteUser = (uid) => {
    return new Promise((resolve,reject) => {
        datab.query(" delete from user where uid=?",[uid],(err,result) => {
            if(err){
                reject(err);
            }else{
                resolve("User deleted...!");
            }
        })
    })
}



exports.FinalUpdateUser= (username,email,password,contact,address,role,uid) =>{
    return new Promise((resolve,reject) => {
        
        datab.query("update user set username=?,email=?,password=?,contact=?,address=?,role=? where uid=?",[username,email,password,contact,address,role,uid],(err,result) => {
            if(err){
                reject(err);
            }else{
                // console.log(result);
                resolve("Succefully updated...!");
            }
        })
    })
}

exports.Userlogin =(email,password) =>{
    return new Promise((resolve,reject) =>{
        datab.query("select *from User where email=? and password=?",[email,password],(err,result) =>{
            if(err){
                console.log(err);
               return reject("database error");
            }
            if(result.length == 0){
               return resolve("invalid email and pass");
            }
             const user = result[0];
            resolve({
                message:"login successfull",
                user:{
                    username:user.username,
                    email:user.email
                }
               
            })
        });
    })
}