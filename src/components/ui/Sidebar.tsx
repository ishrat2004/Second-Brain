
import SidebarCompo from './SidebarCompo'
import Twitter from '../../icons/Twitter_dash'
import { Youtube } from '../../icons/Youtube_dash'
import Second_Brain from '../../icons/Second_Brain'
import { Button } from './Button'
import {  useNavigate } from 'react-router-dom'

const Sidebar = () => { 
  const navigate=useNavigate(); 
   function logout(){ 
      localStorage.removeItem("token"); 
      navigate("/signin"); 
   }
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
     <div className='top-0 left-0 flex justify-center gap-2 p-4 '>
       <Button text="Logout" variant="primary" size="lg" onClick={logout}/> 
     </div>
    </div>
  )
}

export default Sidebar