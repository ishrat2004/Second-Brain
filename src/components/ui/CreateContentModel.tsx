import Close from "../../icons/close";
import { Button } from "./Button";
import Input from "./Input";


export function CreateContentModel({open,onClose}){ 
      return<div> 
      { open && <div className="w-full h-full bg-slate-200 fixed top-0 left-0 opacity-60 flex justify-center"> 
           <div className="flex flex-col justify-center"> 
               <span className="bg-white rounded p-4 opacity-100"> 
                 <div className="flex justify-end " > 
                       <div onClick={onClose} className="cursor-pointer"> 
                         <Close/> 
                       </div>
                 </div>
                 <div> 
                    <Input placeholder={"text"}/> 
                    <Input placeholder={"Link"}/>
                 </div> 
                 <div className="flex justify-center"> 
                    <Button variant="primary" text="Submit"  size="md" />
                 </div>
               </span>
            </div>
         
         </div>}
      </div>
}