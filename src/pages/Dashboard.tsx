import  {  useEffect, useState } from 'react'
import { Button } from '../components/ui/Button'
import Plus from '../icons/Plus'
import Share from '../icons/Share'
import { Card } from '../components/ui/Card'
import { CreateContentModel } from '../components/ui/CreateContentModel'
import Sidebar from '../components/ui/Sidebar'
import { useContent } from '../hooks/useContent'
import { BACKEND_URL } from '../config'
import axios from 'axios'
import { SidebarToggle } from '../icons/SidebarToggle'
// import { useNavigate } from 'react-router-dom'


const useMediaQuery=(query)=>{ 
  const [matches,setMatches]=useState(false); 
  
  useEffect(()=>{ 
     const media=window.matchMedia(query); 
     if(media.matches!==matches){ 
      setMatches(media.matches); 
     } 
     const listener=()=> setMatches(media.matches); 
     media.addListener(listener); 
     return ()=>media.removeListener(listener); 
  },[matches,query]);
  return matches; 
}; 

const Dashboard = () => { 
  const [modelopen,setmodelopen]=useState(false); 
  const contents=useContent();  
  // const navigate=useNavigate(); 
  const [sidebaropen,setsidebaropen]=useState(true); 

  // const [sidebaropen,setsidebaropen]=
  const isDesktop=useMediaQuery("(min-width:768px)"); 
  useEffect(()=>{ 
       if(isDesktop == false){ 
        setsidebaropen(false); 
       } 
       else{ 
        setsidebaropen(true); 
       }
  },[isDesktop]); 
  return <div className='flex '> 
    <Sidebar sidebaropen={sidebaropen} setsidebaropen={setsidebaropen} />
    <div className={ `transition-all duration-1000 p-4  min-h-screen w-screen bg-gray-200 border-2 ${sidebaropen ? 'ml-72' : 'ml-0'} ` }> 
      { !sidebaropen && <div> 
        <span className='cursor-pointer ' onClick={()=>{ 
                    setsidebaropen(!sidebaropen);
                  }}> 
                     <SidebarToggle/> 
                  </span>
        </div>}
    <CreateContentModel open={modelopen} onClose={()=>{setmodelopen(false) ;}}/>
     <div className='flex justify-end  gap-4 '>
      
      <Button variant="primary" size="md" text="Add content" startIcon={<Plus size="md" />} onClick={()=>{setmodelopen(true)}}/>
      <Button variant="secondary" size="sm" text="Share Brain" startIcon={<Share size="md"/>} onClick={async ()=>{ 
          const response=await axios.post(BACKEND_URL+"/api/v1/brain/share",{ 
            share:true },{ 
              headers:{ 
                token:localStorage.getItem("token")
              }
          }) 
          const shareurl=response.data.link; 
          alert(shareurl);
      }}  /> 
          </div> 
     <div>  
      <div className='flex gap-4 flex-wrap justify-center'>  
         {contents.map(({type,link,title,_id})=>
        <Card type={type} title={title} link={link} id={_id}/> 
        ) }
        {/* <Card type="twitter"  title="tweet" link="https://x.com/kirat_tw/status/1929805164963061811" />
        <Card type="youtube"  title="Video" link="https://www.youtube.com/watch?v=dRXq81Om2a4" /> */}
        </div>
     </div>   
    </div>  
  </div>
}

export default Dashboard