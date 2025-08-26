let db=require("../../db.js");

exports.createPurchase=(invoiceNo,purchaseDate,totalAmount,paymentMode,gstInvoice,supplier_id,product_id)=>{
    return new Promise((resolve,reject)=>{
        db.query("insert into Purchase values ('0',?,?,?,?,?,?,?)",[invoiceNo,purchaseDate,totalAmount,paymentMode,gstInvoice,supplier_id,product_id],(err,result)=>{
               if(err){
                reject("purchase data not save");
               } 
               else{
                resolve("purchase data save");
               }
        });
    });
}

exports.getAllPurchase=()=>{
    return new Promise((resolve,reject)=>{
        db.query("select * from Purchase",(err,result)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        })
    })
}

exports.getPurchaseById=(id)=>{
    return new Promise((resolve,reject)=>{
        db.query("select * from Purchase where Purchase_id=?",[id],(err,result)=>{
           if(err){
            reject(err);
           } 
           else{
            resolve(result);
           }
        })
    })
}

exports.UpdatPurchase= (invoiceNo,purchaseDate,totalAmount,paymentMode,gstInvoice,supplier_id,product_id,purchase_id) =>{
    return new Promise((resolve,reject) => {
        db.query("update Purchase set invoiceNo=?,purchaseDate=?,totalAmount=?,paymentMode=?,gstInvoice=?,supplier_id=?,product_id=? where purchase_id=?",[invoiceNo,purchaseDate,totalAmount,paymentMode,gstInvoice,supplier_id,product_id,purchase_id],(err,result) => {
             //console.log("Affected:", result.affectedRows, "Changed:", result.changedRows);
            if(err){
               
                reject(err);
            }else{
                resolve({result});
            }
        })
    })

}

exports.Deletepurchase=(purchase_id)=>{
     return new Promise((resolve,reject) => {
        db.query(" delete from  Purchase where purchase_id=?",[purchase_id],(err,result) => {
            if(err){
                reject(err);
            }else{
                resolve("purchase deleted...!");
            }
        })
    })

}

exports.searchpurchaseByInvoice = (invoiceNo) => {
    return new Promise((resolve,reject) =>{
        db.query("select *from  Purchase where invoiceNo like '%"+invoiceNo+"%'",(err,result) =>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}


