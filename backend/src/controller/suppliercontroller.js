let suppmod=require("../models/suppliermodel.js");

exports.createSuppliers = ((req,res) => {
   // let Category_id = parseInt(req.query.category_id);
    //let Product_id = parseInt(req.query.product_id);
    let {supplier_name,company_name,contact,email,address,GSTNO} = req.body;
    console.log(supplier_name,company_name,contact,email,address,GSTNO);
    let promise = suppmod.createSuppliers(supplier_name,company_name,contact,email,address,GSTNO);
    promise.then((result) => {
        //console.log(result);
        res.send(result);
    }).catch((err) => {
        res.send(err);
    })
})

exports.getAllSupplier=((req,res)=>{
   let promise=suppmod.getAllSupplier();
   promise.then((result)=>{
      res.send(result);
   }).catch((err)=>{
      res.send(err);
   })

})

exports.getallsupplierbyId = ((req,res) => {

    let {id} = req.params;
    //console.log(id);
    let promise = suppmod.getallsupplierbyId(id);
    promise.then((result) =>{
            res.send(result);
        
    }).catch((err) => {
        console.log(err);
    });
});

exports.FinalUpdatesupp = (req,res) => {
    const{sid}=req.params;
    //console.log("I am pid",pid);
   
    var {supplier_name,company_name,contact,email,address,GSTNO,supplier_id}=req.body;
    // console.log(" i sending model",product_name, uniquename,quantity,price,created_at,updated_at ,image,category_id);
    // console.log("I am product_id",product_id);
    let promise=suppmod.FinalUpdatesupp(supplier_name,company_name,contact,email,address,GSTNO,supplier_id);

    promise.then((result) => {
        res.send({message:result});
    }).catch((err) =>{
        res.send(err);
        console.log(err);
    });
}

exports.searchsupp = (req,res) =>{
 let supplie_name = req.params.supplier_name;


    let{supplier_id,supplier_name,uniquename,quantity,price,created_at,updated_at ,image,category_id} = req.body;

    // console.log("i am all",product_id, uniquename,quantity,price,created_at,updated_at ,image,category_id);

    let promise = suppmod.searchsupp(supplie_name);

    promise.then((result) => {
        res.send({message:result});
    }).catch((err) => {
        res.send(err);
    })
}

exports.Deletesupp = (req,res) => {
    const{sid}=req.params;
    let supplier_id=parseInt(sid);

    // let{product_name, uniquename,quantity,price,created_at,updated_at ,image,category_id}=req.body;

    let promise=suppmod.Deletesupp(supplier_id);

    promise.then((result) => {
        res.send({message:result});
    }).catch((err) => {
        res.send(err);
    })
}
