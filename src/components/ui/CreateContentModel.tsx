
import { useRef, useState } from "react";
import Close from "../../icons/Close";
import { Button } from "./Button";
import Input from "./Input";
import { BACKEND_URL } from "../../config";
import axios from "axios";

export const ContentType = {
  Youtube: "youtube",
  Twitter: "twitter",
} as const;

export type ContentType = (typeof ContentType)[keyof typeof ContentType];

export function CreateContentModel({open,onClose}){ 
     const titleref=useRef<any>(null); 
     const linkref=useRef<any>(null); 
     const [type,setType]=useState<ContentType>(ContentType.Youtube);
     async function addcontent(){ 
          const title=titleref.current?.value;
          const link=linkref.current?.value; 
          await axios.post(BACKEND_URL + "/api/v1/content",{ 
              title:title,
              link:link,
              type:type
          },{ 
            headers:{ 
               "token":localStorage.getItem("token")
            }
          }) 
          console.log(title,link);
          onClose();  
      }
      return<div> 
      { open && <div>  
            <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center"> 

            </div>
            <div className="w-screen h-screen  fixed top-0 left-0 opacity-95 flex justify-center"> 
             <div className="flex flex-col justify-center"> 
               <span className="bg-white rounded-md p-4 opacity-100"> 
                 <div className="flex justify-end " > 
                       <div onClick={onClose} className="cursor-pointer"> 
                         <Close/> 
                       </div>
                 </div>
                  <div className="text-2xl"> 
                     <Input ref={titleref} placeholder={"Text"}/> 
                     <Input ref={linkref} placeholder={"Link"}/>
                  </div> 
                  <div className="flex justify-center text-2xl font-semibold"> 
                     <h1> Type </h1>
                  </div>
                        <div className="flex justify-center gap-2 m-2 ">  
                           <div> 
                              <Button text="Youtube" variant={type===ContentType.Youtube?"primary":"secondary"} onClick={()=>setType(ContentType.Youtube)} size="md" /> 
                           </div>
                           <div> 
                              <Button text="Twitter" variant={type===ContentType.Twitter?"primary":"secondary"}   onClick={()=>setType(ContentType.Twitter)} size="md" />
                           </div>      
                      </div>
                 <div className="flex justify-center"> 
                    <Button variant="primary" text="Submit"  size="md" onClick={addcontent}/>
                 </div>
               </span>
            </div>
         
           </div> 
        </div> }
      </div>
}