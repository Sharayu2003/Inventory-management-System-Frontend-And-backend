let custmod=require("../models/customermodel");

exports.createCustomers = ((req,res) => {
   
    let {customer_name,email,contact,company_name,address,GSTNO} = req.body;
    let promise = custmod.createCustomers(customer_name,email,contact,company_name,address,GSTNO);
    promise.then((result) => {
        console.log(result);
        res.send(result);
    }).catch((err) => {
        res.send(err);
    })
})

exports.getAllCustomers=((req,res)=>{
    let promise=custmod.getAllCustomers();
    promise.then((result)=>{
        res.send(result);
    }).catch((err)=>{
        res.send(err);
    })
 })

 
 exports.getallcustomerybyId=((req,res) => {
     let {id}=req.params;
     let promise = custmod.getallcustomerybyId(id);
     promise.then((result) =>{
             res.send(result);
     }).catch((err) => {
         console.log(err);
     });
 });

 exports.FinalUpdatecust= (req,res) => {
     //const cid=req.params.cid;
   /* customer_id = parseInt(cid);*/

     let{customer_name,email,contact,company_name,address,GSTNO,customer_id}=req.body;
     
     let promise=custmod.FinalUpdatecust(customer_name,email,contact,company_name,address,GSTNO,customer_id);

     promise.then((result) => {
        console.log(result);
         res.send({message:result});
     }).catch((err) =>{
         res.send(err);
     });
 }

 exports.deleteCust = (req,res) => {
     const{cid}=req.params;
     let customer_id=parseInt(cid);
     let promise=custmod.deleteCust(customer_id);
     promise.then((result) => {
         res.send({message:result});
     }).catch((err) => {
         res.send(err);
     })
 }
 
 exports.searchcust = (req,res) =>{
     const customer_name = req.params.customer_name;
     let{customer_id,email,contact,company_name,address,GSTNO} = req.body;
     let promise = custmod.searchcust(customer_name);
     promise.then((result) => {
         res.send({message:result});
     }).catch((err) => {
         res.send(err);
     })
 }