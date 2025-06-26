import { useEffect, useState } from "react"
import { Signup } from "../../pages/Signup";
import { Signin } from "../../pages/Signin";

export function Redirect() { 
  const [user_state, setUserState] = useState("signup");
  const [isvisible,setisvisible]=useState(false); 
  useEffect(()=>{ 
      setisvisible(true); 
  },[])
  return <div className={`bg-[#f5f8ff] rounded-3xl border  items-start justify-center p-6  translate-all
        duration-1000 ${isvisible?'translate-x-0' : 'translate-x-20' }   `}> 
       <div className="rounded-lg bg-yellow grid grid-cols-4  mt-2 shadow-md"> 
            <div className={`col-span-2 flex justify-center items-center text-2xl font-semibold rounded-2xl py-4 cursor-pointer transition-all duration-300 ease-in-out
                ${user_state === "signup"? "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-white shadow-lg": "bg-white text-gray-700"}`} onClick={() => setUserState("signup")}>
            Signup
            </div> 
            <div className={`col-span-2 flex justify-center items-center text-2xl font-semibold rounded-2xl py-4 cursor-pointer transition-all duration-300 ease-in-out ${user_state === "signin" ? "bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400 text-white shadow-lg" : "bg-white text-gray-700"} `}
            onClick={() => setUserState("signin")}>
            Signin
            </div>

       </div> 
        <div> 
            { user_state==="signup" ?
            <Signup />
           : <Signin/> }
        </div> 
    </div>
}
