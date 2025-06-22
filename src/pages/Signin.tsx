import { useRef } from "react";
import { Button } from "../components/ui/Button";
import Input from "../components/ui/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
    
export function Signin(){ 
      const usernameRef=useRef<any>(null); 
      const passwordRef=useRef<any>(null); 
      const navigate=useNavigate(); 
      async function signin(){ 
               const username=usernameRef.current?.value; 
               const password=passwordRef.current?.value; /// checking if value is existing or not with the help of ? 
               console.log("check from signup")
               console.log(username);
               console.log(password); 
               console.log(usernameRef.current?.value);
               console.log(passwordRef.current?.value);
               const response=await axios.post(BACKEND_URL + "/api/v1/signin",{ 
                       username:username,
                       password:password  
               } ) 
               const token=response.data.token;
               console.log("token"+ token); 
               localStorage.setItem("token",token); 
               alert("Signin Successful");
               navigate("/dashboard"); 
         }
      return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center "> 
            <div className="bg-white rounded-xl border min-w-48 p-8 "> 
                <Input ref={usernameRef} placeholder={"username"} />
                <Input ref={passwordRef} placeholder={"password"} /> 
                <div className="flex justify-center pt-4 items-center "> 
                <Button  variant="primary" size="md"  text="Signin" fullwidth={true} loading={false} onClick={signin} /> 
             </div>
            </div>
      </div>
}