import React from 'react'
interface InputProps{ 
    placeholder:string;
    ref?:any;
    field?:string;
}
const Input = ({placeholder,ref,field}:InputProps ) => {
  return (
    <div>
        <h1 className='text-3xl font-semibold '>{field}</h1>
        <input type="text" className="px-4 py-2 rounded-md w-full border m-2 text-3xl " placeholder={placeholder} ref={ref} />
    </div>
  )
}

export default Input