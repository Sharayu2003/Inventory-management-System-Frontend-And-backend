import axios from "axios";

class CategoryService{
  saveCategory(catData){
     let promise=axios.post("http://localhost:3000/api/category/add",catData);
      return promise;
   }
   getCategory(){
      let promise=axios.get("http://localhost:3000/api/category/view");
      return promise;
   }
//    deleteCategory(cid){
//     let promise=axios.delete(`http://localhost:3000/api/category/delete/${cid}`);
//     return promise;
//    }
}
export default new CategoryService();