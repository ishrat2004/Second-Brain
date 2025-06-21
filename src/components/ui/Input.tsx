import React from 'react'
interface InputProps{ 
    placeholder:string;
    ref?:any;
}
const Input = ({placeholder,ref}:InputProps ) => {
  return (
    <div>
        <input type="text" className="px-4 py-2 rounded-md w-full border m-2" placeholder={placeholder} ref={ref} />
    </div>
  )
}

export default Input