import type { ReactElement } from "react";

export interface ButtonProps{ 
    variant:"primary" | "secondary" ;
    size:"sm" | "md" | "lg"; 
    text:string; 
    startIcon?:ReactElement; 
    endIcon?:ReactElement; 
    onClick?:()=>void; 
    fullwidth?:boolean;
    loading?:boolean;
}

const variantStyles = { 
    "primary":"bg-purple-600 text-white", 
    "secondary":"bg-purple-200 text-purple-500"
} 
const sizestyles={ 
    "sm":"py-1 px-2 rounded-sm", 
    "md":"py-2 px-4 rounded-md", 
    "lg":"py-4 px-6 rounded-lg"
}
const defaultstyles="rounded-md px-4 py-4 "
const fullwidthstyles="w-full flex justify-center "
export const Button=(props:ButtonProps)=>{ 
      return <button className={`${variantStyles[props.variant]} ${defaultstyles}  ${sizestyles[props.size]} ${props.fullwidth ? fullwidthstyles : ""} ${props.loading ? "opacity-45 ":""}   
    ` } disabled={props.loading} onClick={props.onClick}> 
           <div className="flex items-center ">  
            {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null} 
            <div className="text-2xl ">
            {props.text} 
            </div>
            {props.endIcon} 
            </div> 
      </button>
} 