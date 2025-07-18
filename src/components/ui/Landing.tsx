// import { MotionConfig } from "framer-motion";
// import Second_Brain from "../../icons/Second_Brain";
import { useEffect, useState } from "react";
import { Content } from "./Content";
import { Redirect } from "./Redirect";
import { Brain } from "lucide-react";

export function Landing(){ 
    const [isvisible,setisvisible]=useState(false); 
    useEffect(()=>{ 
      setisvisible(true);
    },[]) 
    return <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-400 relative overflow-hidden">
            <div className={`gap-2 flex justify-center mt-3 translate-all duration-500 ${isvisible?'translate-y-0' :'-translate-y-10' } ` } > 
                <div className="m-2"> 
                    <Brain className="w-20 h-20 text-white animate-gradient"/>
                </div> 
                <div className="text-7xl"> 
                    <h1 className="text-5xl pt-4 md:text-7xl font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-rose-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
                    Second Brain
                    </h1>

                </div>
            </div> 
            <div className="grid grid-cols-1 md:grid-cols-12  h-full mt-2 "> 
                <div className="md:mb-0 rounded-md md:col-span-6">   
                  <Content/>
                </div>
                <div className="h-full  rounded-3xl  flex items-center px-20 md:col-span-6 md:w-full md:block "> 
                  <Redirect/>
                </div>
            </div>    
    </div>
}