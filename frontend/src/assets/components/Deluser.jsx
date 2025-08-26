import React, { useEffect ,useState} from "react"
import ReactDom from "react-dom"
import { useParams,useNavigate } from "react-router-dom"
import UserService from "../services/UserService";

let Deluser=()=>{
    let  {uid}=useParams();
    let[msg,setMsg]=useState("");
    let navigate=useNavigate();

    useEffect(()=>{
        let promise=UserService.deluser(uid);
        promise.then((res)=>{
            setMsg(res.data.message);
        }).catch((err)=>{
            console.log(err.data);
            setMsg("catch"+err.message);
        })
    })
    return<>
    {msg=="Record Deleted"? navigate("/Viewuser"):"Record not deleted something went wrong"};
    
    </>
}

export default Deluser;