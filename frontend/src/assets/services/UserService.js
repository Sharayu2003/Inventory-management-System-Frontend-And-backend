import axios from "axios";

class UserService{

    addUser(userData){
    let promise=axios.post("http://localhost:3000/reg", userData,{ headers: { "Content-Type": "application/json" } });
     

    return promise;
    }

    getUser(){
        let promise=axios.get("http://localhost:3000/Viewuser");
        return promise;
    }

    deluser(uid) {
  let promise = axios.delete(`http://localhost:3000/api/user/delete/${uid}`);
  return promise;
}

updateUser(user){
    let promise=axios.put(`http://localhost:3000/api/user/update/${user.uid}`,user);
    return promise;

}

    
}
export default new UserService();