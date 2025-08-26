let usermodel=require("../models/UserModel");
let jwt=require("jsonwebtoken");
 

exports.register = ((req,res) => {
    let {username,email,password,contact,address,role} = req.body;
    if(!username){
      res.status(422).json({
        erroMsg:"Validation Erro",
        message:"User name should not blank"
      })
    }
    else{
        let result = usermodel.register(username,email,password,contact,address,role);
        result.then((r)=>{
          res.status(201).json({
            message:"User added Successfully",
            UserDetails:{username,email,password,contact,address,role}
          })
        }).catch((e)=>{
          res.send("Failed");
        })
    }

});

exports.Viewuser = ((req,res) => {
    let result = usermodel.Viewuser();
    result.then((r) =>{
      res.send(r);
    }).catch((err) =>{
      res.send(err);
    })
})


exports.DeleteUser = (req,res) => {
    const{userid}=req.params;
    let uid=parseInt(userid);

    // let{product_name, uniquename,quantity,price,created_at,updated_at ,image,category_id}=req.body;

    let promise=usermodel.DeleteUser(uid);

    promise.then((r) => {
        return res.status(200).json({"message":"Record Deleted"});
    }).catch((err) => {
       return res.status(404).json({"message":"Record not found"});
    })
}


exports.FinalUpdateUser = (req,res) => {
    const{userid}=req.params;
    var {username,email,password,contact,address,role}=req.body;
    
    let promise=usermodel.FinalUpdateUser(username,email,password,contact,address,role,userid);

    promise.then((result) => {
        res.send({message:result});
    }).catch((err) =>{
        res.send(err);
        console.log(err);
    });
}


exports.Userlogin = (req, res) => {
  const { email, password } = req.body;

  usermodel.Userlogin(email, password)
    .then((result) => {
      const { user, message } = result;  
      if (!user) {
        return res.status(400).send({ message: "User not found" });
      }

      try {
        const token = jwt.sign(
          { id: user.id, email: user.email, role: user.role },
          process.env.JWT_SECRET,
          { expiresIn: "15m" }   
        );

        res.send({ message, token, user });
      } catch (tokenError) {
        console.error("JWT generation failed:", tokenError);
        res.status(500).send({ error: "Token generation failed" });
      }
    })
    .catch((err) => {
      console.error("Login error:", err);
      res.status(500).send({ error: err.message || err });
    });
};

