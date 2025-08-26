let catmod = require("../models/Categorymod");

exports.createCategory = async (req, res) => {
  try {
    const { category_name, category_discription } = req.body;
    if (!category_name) {
      return res.status(422).json({
        errorMsg: "Validation error",
        message: "Category name and description should not be blank"
      });
    }

    await catmod.createCategory(category_name, category_discription);

    res.status(201).json({
      message: "Category added successfully.",
      categoryDetails: { category_name, category_discription }
    });
  } catch (err) {
    console.error(err);
    // Customize error handling as needed
    res.status(500).json({ error: "Failed to create category." });
  }
};



exports.getallcategories = ((req,res) =>{
    let promise = catmod.getallcategories();
     promise.then((result) =>{
        res.send(result);
    }).catch((err) =>{
        res.send(err);
    })
})

exports.getallcategorybyId = ((req,res) => {

    console.log(req.body.category_id+"\t"+"category id from request")
    let id = parseInt(req.body.category_id);
    console.log(id);
    let promise = catmod.getallcategorybyId(id);
    promise.then((result) =>{
        // let p = catmod.getallcategories();
        // p.then((res) => {
            res.send(result);
        // }).catch((err) => {
        //     res.send(err);
        //     // console.log(err);
        // });
    }).catch((err) => res.status(500).json({ error: err.message }));
});

// exports.updateCat = (req, res) => {
//     let promise = catmod.getallcategories();
//     promise.then((result) => {
//         res.json({
//             catList: result,
//             msg: "success",
//             category_id: req.query.category_id,
//             category_name: req.query.category_name,
//             category_discription: req.query.category_discription
//         });
//     }).catch((err) => {
//         res.send(err);
//     });
// };


exports.FinalUpdatecat = (req,res) => {
    const{cid}=req.params;
   category_id = parseInt(cid);

     //console.log(category_id);
    let{category_name,category_discription}=req.body;
    console.log(category_name,category_discription);
    let promise=catmod.FinalUpdatecat(category_id,category_name,category_discription);

    promise.then((result) => {
        res.send({message:result});
    }).catch((err) =>{
        res.send(err);
    });
}

exports.Deletecat = (req,res) => {
    const{cid}=req.params;
    category_id=parseInt(cid);
    let{category_name,category_discription}=req.body;

    let promise=catmod.Deletecat(category_id,category_name,category_discription);

    promise.then((result) => {
        res.send({message:result});
    }).catch((err) => {
        res.send(err);
    })
}

exports.searchcat = (req,res) =>{
    const category_name = req.params.category_name;

    console.log("i am category name",category_name)

    let{category_id,category_discription} = req.body;

    console.log("i am all",category_id,category_name,category_discription);

    let promise = catmod.searchcat(category_name);

    promise.then((result) => {
        res.send({message:result});
    }).catch((err) => {
        res.send(err);
    })
}


