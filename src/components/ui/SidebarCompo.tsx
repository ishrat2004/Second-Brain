import React, { type ReactElement } from 'react'

const SidebarCompo = ({text,icon}:{ 
    text:string,
    icon:ReactElement
}) => {
  return <div>
      <div className='flex text-gray-700 py-2'>  
        <div className='pr-2  '> 
        {icon}
        </div>
        <div className='text-lg '> 
          {text}
        </div>  
      </div>
    </div>
  
}

export default SidebarCompo