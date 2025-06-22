import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function useContent(){ 
  function refresh(){ 
         axios.get(BACKEND_URL+"/api/v1/content",{ 
            headers:{ 
                "token":localStorage.getItem("token")
            }
         })
         .then((response)=>{ 
            setcontents(response.data.content)
         }) 
  }
    const [contents,setcontents]=useState([]); 
    useEffect(()=>{ 
         refresh(); 
         let refresh_interval=setInterval(()=>{ 
           refresh(); 
         },2*1000); 
         return ()=>{ 
            clearInterval(refresh_interval); 
         }
    },[])  
    return contents;
    
}