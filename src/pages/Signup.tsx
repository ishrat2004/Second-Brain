import { useRef } from "react";
import { Button } from "../components/ui/Button";
import Input from "../components/ui/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function Signup(){  
      const usernameRef=useRef<any>(null); 
      const passwordRef=useRef<any>(null);
      const navigate=useNavigate(); 
      async function signup(){ 
            const username=usernameRef.current?.value; 
            const password=passwordRef.current?.value; /// checking if value is existing or not with the help of ? 
            console.log("check from signup")
            console.log(username);
            console.log(password); 
            console.log(usernameRef.current?.value);
            console.log(passwordRef.current?.value);
            await axios.post(BACKEND_URL + "/api/v1/signup",{ 
                    username:username,
                    password:password  
            } )
            alert("Signup Successful");
            navigate("/signin"); 
      }
      return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center "> 
            <div className="bg-white rounded-xl border min-w-48 p-8 "> 
                <Input ref={usernameRef} placeholder={"username"} />
                <Input ref={passwordRef} placeholder={"password"} /> 
                <div className="flex justify-center pt-4 items-center "> 
                <Button  variant="primary" size="md"  text="Signup" fullwidth={true} loading={false} onClick={signup} /> 
             </div>
            </div>
      </div>
}