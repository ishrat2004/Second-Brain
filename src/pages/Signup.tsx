import { useRef, useState } from "react";
import { Button } from "../components/ui/Button";
import Input from "../components/ui/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
//import { useNavigate } from "react-router-dom";
export function Signup({state_function}){  
      const usernameRef=useRef<any>(null); 
      const passwordRef=useRef<any>(null);
      //const navigate=useNavigate(); 
      const [valid,setvalid]=useState(true); 
      async function signup(){ 
            const username=usernameRef.current?.value; 
            const password=passwordRef.current?.value; /// checking if value is existing or not with the help of ? 
            console.log("before"); 
            alert("Our backend is down,it will be up in 50 sec"); 
            try{ 
            await axios.post(BACKEND_URL + "/api/v1/signup",{ 
                    username:username,
                    password:password  
            } ) 
            // navigate("/signin");
            state_function(); 
            }catch(e:any){ 
                if(e.response && e.response.status===500){ 
                  setvalid(false); 
                }
            } 
       
      }
      return <div className="transition-all duration-1000 ease-in-out">
            <div className="bg-white rounded-xl border  p-8 "> 
                <Input ref={usernameRef} placeholder={"Enter your username"} field="Username"/>
                <Input ref={passwordRef} placeholder={"Enter your password"} field="Password"/> 
                <Input placeholder={"First Name"} field="First Name"/> 
                <Input placeholder={"Last Name"} field="Last Name"/>
                {valid===false?
                <div> 
                <h1 className="text-red-500 text-xl text-center ">
                  UserName Already Exists </h1> 
                  </div> :null } 
                <div className="flex justify-center pt-4 items-center ">  
                <Button  variant="primary" size="md"  text="Create Account" fullwidth={true} loading={false} onClick={signup} />
               
             </div>
            </div>
      </div>
}