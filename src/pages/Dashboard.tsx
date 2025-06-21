import React, { useState } from 'react'
import { Button } from '../components/ui/Button'
import Plus from '../icons/Plus'
import Share from '../icons/Share'
import { Card } from '../components/ui/Card'
import { CreateContentModel } from '../components/ui/CreateContentModel'
import Sidebar from '../components/ui/Sidebar'

const Dashboard = () => { 
  const [modelopen,setmodelopen]=useState(false); 
  return <div> 
    <Sidebar/>
    <div className='p-4 ml-72 min-h-screen bg-gray-200 border-2 '> 
    <CreateContentModel open={modelopen} onClose={()=>{setmodelopen(false)}}/>
     <div className='flex justify-end  gap-4 '>
      <Button variant="primary" size="md" text="Add content" startIcon={<Plus size="md" />} onClick={()=>{setmodelopen(true)}}/>
      <Button variant="secondary" size="sm" text="Share Brain" startIcon={<Share size="md"/>  }/> 
          </div> 
     <div>  
      <div className='flex gap-4'> 
        <Card type="twitter"  title="tweet" link="https://x.com/kirat_tw/status/1929805164963061811" />
        <Card type="youtube"  title="Video" link="https://www.youtube.com/watch?v=dRXq81Om2a4" />
        </div>
     </div>   
    </div>  
  </div>
}

export default Dashboard