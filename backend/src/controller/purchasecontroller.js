let purmodel = require("../models/purchasemodel");

exports.createPurchase = ((req, res) => {
    let { invoiceNo, purchaseDate, totalAmount, paymentMode, gstInvoice, supplier_id, product_id } = req.body;
    let promise = purmodel.createPurchase(invoiceNo, purchaseDate, totalAmount, paymentMode, gstInvoice, supplier_id, product_id);
    promise.then((result) => {
        res.send(result);
    }).catch((err) => {
        res.send(err);
    })

})

exports.getAllPurchase = ((req, res) => {
    let promise = purmodel.getAllPurchase();
    promise.then((result) => {
        res.send(result);
    }).catch((err) => {
        res.send(err);
    })
})

exports.getPurchaseById = ((req, res) => {
    let { id } = req.params;

    let promise = purmodel.getPurchaseById(id);
    promise.then((result) => {
        res.send(result);
    }).catch((err) => {
        res.send(err);
    })
})

exports.UpdatPurchase = (req, res) => {

    let { invoiceNo, purchaseDate, totalAmount, paymentMode, gstInvoice, supplier_id, product_id, purchase_id } = req.body;
    
    let promise = purmodel.UpdatPurchase(invoiceNo, purchaseDate, totalAmount, paymentMode, gstInvoice, supplier_id, product_id, purchase_id);
        
    promise.then((result) => {
         // console.log("Affected:", result.affectedRows, "Changed:", result.changedRows);
        console.log(result);
        res.send({ message: result });
    }).catch((err) => {
        res.send(err);
    });
}

exports.Deletepurchase = (req,res) => {
    const{pid}=req.params;
    let purchase_id=parseInt(pid);

    // let{product_name, uniquename,quantity,price,created_at,updated_at ,image,category_id}=req.body;

    let promise=purmodel.Deletepurchase(purchase_id);

    promise.then((result) => {
        res.send({message:result});
    }).catch((err) => {
        res.send(err);
    })
}

exports.searchpurchaseByInvoice= (req,res) =>{
    const invoiceNo = req.params.invoiceNo;


    let{ purchaseDate, totalAmount, paymentMode, gstInvoice, supplier_id, product_id } = req.body;

   
    let promise = purmodel.searchpurchaseByInvoice(invoiceNo);

    promise.then((result) => {
        res.send({message:result});
    }).catch((err) => {
        res.send(err);
    })
}