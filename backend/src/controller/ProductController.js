
let prodmod=require("../models/Productmodels.js");

//controller
exports.createProduct = ((req,res) => {
   
    let {product_name, uniquename,quantity,price,created_at,updated_at ,image,category_id} = req.body;
    let promise = prodmod.createProduct(product_name, uniquename,quantity,price,created_at,updated_at ,image,category_id);
    promise.then((result) => {
        console.log(result);
        res.send(result);
    }).catch((err) => {
        res.send(err);
    })
})


exports.getallProducts = ((req,res) =>{
    let promise = prodmod.getallProducts();
     promise.then((result) =>{
        res.send(result);
    }).catch((err) =>{
        res.send(err);
    })
})

exports.getallproductsbyId = ((req,res) => {

    let {id} = req.params;
    //console.log(id);
    let promise = prodmod.getallproductsbyId(id);
    promise.then((result) =>{
            res.send(result);
        
    }).catch((err) => {
        console.log(err);
    });
});


exports.FinalUpdateprod = (req,res) => {
   // const{pid}=req.params;
  // product_id = parseInt(pid);

     //console.log(category_id);
    let{product_name,uniquename,quantity,price,created_at,updated_at ,image,category_id,product_id}=req.body;
    //console.log(product_name, uniquename,quantity,price,created_at,updated_at ,image,category_id);
    let promise=prodmod.FinalUpdateprod(product_name,uniquename,quantity,price,created_at,updated_at,image,category_id,product_id);
//console.log(product_name);
    promise.then((result) => {
        res.send({message:result});
    }).catch((err) =>{
        res.send(err);
    });
}


exports.Deleteprod = (req,res) => {
    const{pid}=req.params;
    let product_id=parseInt(pid);

    // let{product_name, uniquename,quantity,price,created_at,updated_at ,image,category_id}=req.body;

    let promise=prodmod.Deleteprod(product_id);

    promise.then((result) => {
        res.send({message:result});
    }).catch((err) => {
        res.send(err);
    })
}


exports.searchprod = (req,res) =>{
    const product_name = req.params.product_name;


    let{product_id,uniquename,quantity,price,created_at,updated_at ,image,category_id} = req.body;

    // console.log("i am all",product_id, uniquename,quantity,price,created_at,updated_at ,image,category_id);

    let promise = prodmod.searchprod(product_name);

    promise.then((result) => {
        res.send({message:result});
    }).catch((err) => {
        res.send(err);
    })
}







