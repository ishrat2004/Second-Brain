import React from 'react'
import SidebarCompo from './SidebarCompo'
import Twitter from '../../icons/Twitter'
import { Youtube } from '../../icons/Youtube'
import Second_Brain from '../../icons/Second_Brain'

const Sidebar = () => {
  return (
    <div className='h-screen w-72 bg-white border-r left-0 top-0 fixed pl-6 '>  
       <div className='flex text-2xl pt-4 items-center gap-2'> 
            <div className='pr-2 text-purple-500'> 
               <Second_Brain/>
            </div>
            Second Brain
        </div> 
    <div className='pt-4  '>
        <SidebarCompo text="Tweets" icon={<Twitter /> }/>
        <SidebarCompo text="Youtube" icon={<Youtube /> }/>
     </div>

    </div>
  )
}

export default Sidebar