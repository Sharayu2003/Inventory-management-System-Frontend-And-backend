let salemodel = require("../models/salemodel.js");

exports.createSale= ((req,res) => {
   
    let {invoiceNo, salesDate, totalAmount, paymentMode, gstInvoice, customer_id, product_id} = req.body;
    let promise = salemodel.createSale(invoiceNo, salesDate, totalAmount, paymentMode, gstInvoice, customer_id, product_id);
    promise.then((result) => {
        console.log(result);
        res.send(result);
    }).catch((err) => {
        res.send(err);
    })
})

exports.createSale = ((req, res) => {
    let { invoiceNo, salesDate, totalAmount, paymentMode, gstInvoice, customer_id, product_id } = req.body;
    
    let promise = salemodel.createSale(invoiceNo, salesDate, totalAmount, paymentMode, gstInvoice, customer_id, product_id);
    // console.log(invoiceNo, salesDate, totalAmount, paymentMode, gstInvoice, customer_id, product_id);
    promise.then((result) => {
        console.log(result);
        res.send(result);
    }).catch((err) => {
        res.send(err);
    })

})

exports.getAllSale = ((req, res) => {
    let promise = salemodel.getAllSale();
    promise.then((result) => {
        res.send(result);
    }).catch((err) => {
        res.send(err);
    })
})

exports.SaleById = ((req,res) =>{
    let {sale_id}=req.params;
    console.log(sale_id);
    // let{invoiceNo, salesDate,totalAmount, paymenMode , gstInvoice , customer_id ,  product_id }=req.body;
    let promise=salemodel.SaleById(sale_id);
    promise.then((result)=>{
        res.send(result);
        console.log(result);
    }).catch((err)=>{
        res.send(err);
    })
});


exports.Updatesale = (req,res) =>{
    let {sale_id}=req.params;
    sale_id=parseInt(sale_id);

    let{invoiceNo, salesDate,totalAmount, paymenMode , gstInvoice , customer_id ,  product_id }=req.body;
    console.log(invoiceNo, salesDate,totalAmount, paymenMode , gstInvoice , customer_id ,  product_id );
    let promise=salemodel.Updatesale(sale_id, invoiceNo, salesDate,totalAmount, paymenMode , gstInvoice , customer_id ,  product_id );
    promise.then((result)=>{
        res.send(result);
    }).catch((err)=>{
        res.send(err);
    })

}


exports.DeleteSale=((req,res)=>{
    const {sid}=req.params;
    let sale_id=parseInt(sid);

    let promise=salemodel.DeleteSale(sale_id);
    promise.then((result)=>{
        res.send({message:result});
    }).catch((err)=>{
        res.send(err);
    })



})

