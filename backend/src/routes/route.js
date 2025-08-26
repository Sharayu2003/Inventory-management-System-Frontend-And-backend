let express = require("express");
let usercont=require("../controller/UserCont.js");
let catecont=require("../controller/Categorycontroller.js");
let prodcont=require("../controller/ProductController.js");
let suppcont=require("../controller/suppliercontroller.js");
let custcont=require("../controller/customercontroller.js");
let purcont=require("../controller/purchasecontroller.js");
let salecont=require("../controller/salescontroller.js");
const{verifytoken,isAdmin}=require("../middleware/authmiddleware.js");

let router = express.Router();
//user
router.post("/reg",usercont.register);
router.get("/Viewuser",usercont.Viewuser);
router.delete("/api/user/delete/:userid", usercont.DeleteUser);
router.put("/api/user/update/:userid",usercont.FinalUpdateUser);


router.post("/",usercont.Userlogin);


//category
router.post("/api/category/add",catecont.createCategory);
router.get("/api/category/view",catecont.getallcategories);
router.get("/api/category/:id",verifytoken,catecont.getallcategorybyId);
router.put("/api/category/update/:cid",verifytoken,isAdmin,catecont.FinalUpdatecat);
router.delete("/api/category/delete/:cid",verifytoken,isAdmin,catecont.Deletecat);
router.get("/api/category/search/:category_name",verifytoken,catecont.searchcat);


//product
router.post("/api/product/add",verifytoken,isAdmin,prodcont.createProduct);
router.get("/api/product/view",prodcont.getallProducts);
router.get("/api/product/:id",prodcont.getallproductsbyId);
router.put("/api/product/update",prodcont.FinalUpdateprod);
router.delete("/api/product/delete/:pid",verifytoken,prodcont.Deleteprod);
router.get("/api/product/search/:product_name",prodcont.searchprod);

//supplier
router.post("/api/supplier/add",verifytoken,suppcont.createSuppliers);
router.get("/api/supplier/view",suppcont.getAllSupplier);
router.get("/api/supplier/:id",suppcont.getallsupplierbyId);
router.put("/api/supplier/update",suppcont.FinalUpdatesupp);
router.get("/api/supplier/search/:search_name",verifytoken,suppcont.searchsupp);
router.delete("/api/supplier/delete/:sid",suppcont.Deletesupp);


//customer
router.post("/api/customer/add",verifytoken,custcont.createCustomers);
router.get("/api/customer/view",custcont.getAllCustomers);
router.get("/api/customer/:id",custcont.getallcustomerybyId);
router.put("/api/customer/update",verifytoken,custcont.FinalUpdatecust);
router.delete("/api/customer/delete:cid",verifytoken,custcont.deleteCust);
router.get("/api/customer/search/:customer_name",custcont.searchcust);


//purchase
router.post("/api/purchase/add",purcont.createPurchase);
router.get("/api/purchase/view",purcont.getAllPurchase);
router.get("/api/purchase/:id",purcont.getPurchaseById);
router.put("/api/purchase/update",purcont.UpdatPurchase);
router.delete("/api/purchase/delete/:pid",purcont.Deletepurchase);
router.get("/api/purchase/search/:invoiceNo",purcont.searchpurchaseByInvoice);

//salees
router.post("/api/sales/add",salecont.createSale);
router.get("/api/sales/view",salecont.getAllSale);
router.get("/api/sales/:sale_id",salecont.SaleById);
router.put("/api/sales/update/:sale_id",salecont.Updatesale);
router.delete("/api/sales/delete/:sid",salecont.DeleteSale);
  
module.exports = router;