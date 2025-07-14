
import SidebarCompo from './SidebarCompo'
import Twitter from '../../icons/Twitter_dash'
import { Youtube } from '../../icons/Youtube_dash'
import { Button } from './Button'
import {  useNavigate } from 'react-router-dom'
import { Brain } from 'lucide-react'
import { Gemini_icon } from '../../icons/Gemini_icon'

const Sidebar = () => { 
  const navigate=useNavigate(); 
   function logout(){ 
      localStorage.removeItem("token"); 
      navigate("/"); 
   }
  return (
    <div className='h-screen w-72 bg-white border-r left-0 top-0 fixed pl-6 '>  
       <div className='flex text-2xl pt-4 items-center gap-2'> 
            <div className='pr-2 text-purple-500'> 
               <Brain  className='w-10 h-10 text-black'/>
            </div>
            <h1 className='text-3xl bg-gradient-to-r from-yellow-300 via-orange-300 to-rose-400
            bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient '> 
            Second Brain
           </h1>
           </div> 
       <div className='flex justify-center text-gray-700 text-2xl'> 
         Hello {localStorage.getItem("username")} !
         </div>     
     <div className='pt-4  '>
        <SidebarCompo text="Tweets" icon={<Twitter /> }/>
        <SidebarCompo text="Youtube" icon={<Youtube /> }/>
     </div>
     <div className='top-0 left-0 flex justify-center gap-2 p-4 '>
       <Button text="Logout" variant="primary" size="lg" onClick={logout}/> 
     </div>
    </div>
  )
}

export default Sidebar