import { useRef } from "react";
import { Button } from "../components/ui/Button";
import Input from "../components/ui/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function Signup({changestate}:{changestate?:()=>void }){  
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
      return <div className="transition-all duration-1000 ease-in-out">
            <div className="bg-white rounded-xl border  p-8 "> 
                <Input ref={usernameRef} placeholder={"Enter your username"} field="Username"/>
                <Input ref={passwordRef} placeholder={"Enter your password"} field="Password"/> 
                <Input placeholder={"First Name"} field="First Name"/> 
                <Input placeholder={"Last Name"} field="Last Name"/>
                <div className="flex justify-center pt-4 items-center "> 
                <Button  variant="primary" size="md"  text="Create Account" fullwidth={true} loading={false} onClick={signup} /> 
             </div>
            </div>
      </div>
}