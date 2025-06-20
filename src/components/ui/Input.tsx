import React from 'react'

const Input = ({placeholder,onChange}) => {
  return (
    <div>
        <input type="text" className="px-4 py-2 rounded-md w-full" placeholder={placeholder} onChange={onChange}/>
    </div>
  )
}

export default Input