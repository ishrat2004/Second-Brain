import React, { type ReactElement } from 'react'

const SidebarCompo = ({text,icon}:{ 
    text:string,
    icon:ReactElement
}) => {
  return <div>
      <div className='transition-all duration-300 flex text-gray-700 py-2 pl-4 cursor-pointer hover:bg-gray-200 rounded-md max-w-48'>  
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