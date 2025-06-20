import type { ReactElement } from "react";

export interface ButtonProps{ 
    variant:"primary" | "secondary" ;
    size:"sm" | "md" | "lg"; 
    text:string; 
    startIcon?:ReactElement; 
    endIcon?:ReactElement; 
    onClick?:()=>void; 
}

const variantStyles = { 
    "primary":"bg-purple-600 text-white", 
    "secondary":"bg-purple-300 text-purple-600"
} 
const sizestyles={ 
    "sm":"py-1 px-2 rounded-sm", 
    "md":"py-2 px-4 rounded-md", 
    "lg":"py-4 px-6 rounded-lg"
}
const defaultstyles="rounded-md p-4 flex"

export const Button=(props:ButtonProps)=>{ 
      return <button className={`${variantStyles[props.variant]} ${defaultstyles}  ${sizestyles[props.size]}`} > 
           <div className="flex items-center ">  
            {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}
            {props.text} 
            {props.endIcon} 
            </div> 
      </button>
}