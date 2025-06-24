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
      return <div className="transition-all duration-1000 ease-in-out "> 
            <div className="bg-white rounded-xl border p-8 "> 
                <Input ref={usernameRef}  placeholder={"Enter your username"} field="Username" />
                <Input ref={passwordRef}  placeholder={"Enter your password"} field="Password"/> 
                <div className="flex justify-center pt-4 items-center "> 
                <Button  variant="primary" size="md"  text="Signin" fullwidth={true} loading={false} onClick={signin} /> 
             </div>
            </div>
      </div>
}