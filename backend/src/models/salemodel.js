let db=require("../../db.js");

exports.createSale=(invoiceNo, salesDate, totalAmount, paymentMode, gstInvoice, customer_id, product_id )=>{
    return new Promise((resolve,reject)=>{
        db.query("insert into sales values ('0',?,?,?,?,?,?,?)",[invoiceNo, salesDate, totalAmount, paymentMode, gstInvoice, customer_id, product_id ],(err,result)=>{
               if(err){
                reject("sales data not save");
               } 
               else{
                resolve("sale data save");
               }
        });
    });
}

exports.getAllSale=()=>{
    return new Promise((resolve,reject)=>{
        db.query("select * from sales",(err,result)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        })
    })
}

exports.SaleById = (sale_id) =>{
    return new Promise((resolve,reject)=>{
        db.query("select *from sales where sale_id=?",[sale_id],(err,result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
    })
}


exports.Updatesale = (sale_id, invoiceNo, salesDate,totalAmount, paymenMode , gstInvoice , customer_id ,  product_id ) =>{
    return new Promise((resolve,reject)=>{
            // let{invoiceNo, salesDate,totalAmount, paymenMode , gstInvoice , customer_id ,  product_id }=req.body;
        db.query("update sales set invoiceNo=?,salesDate=?,totalAmount=?,paymenMode=?,gstInvoice=?,customer_id=?,product_id=? where sale_id=?",[invoiceNo,salesDate,totalAmount,paymenMode,gstInvoice,customer_id,product_id,sale_id],(err,result)=>{
            if(err){
                reject(err);
            }else{
                resolve("succesfully updated....!");
            }
        });
    })    
}
exports.DeleteSale=(sale_id)=>{
    return new Promise((resolve,reject)=>{
        db.query("delete from sales where sale_id=?",[sale_id],(err,result)=>{
            if(err){
                reject(err);
            }
            else{
                resolve("Deleted successfully!!!",result);
            }
        })
    })

}

