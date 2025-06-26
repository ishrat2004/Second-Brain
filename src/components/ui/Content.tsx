import {  Sparkles } from "lucide-react";
import { ContentItems } from "../../config";
import { useEffect, useState } from "react";

export  function Content(){ 
  const [isVisible, setIsVisible] = useState(false);

  useEffect(()=>{ 
      setIsVisible(true); 
  },[])
    return <div className={ `px-4 sm:px-20 translate-all duration-500 ${isVisible? 'translate-x-0 opacity-100': '-translate-x-16 opacity-0'} `}  > 
              <div className=""> 
                <h1 className="text-3xl lg:text-7xl text-white font-bold leading-tight "> 
                    Your Digital
                <div className="h-20 bg-yellow text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 block"> 
                    Memory Palace
                </div>
                </h1> 
                <p className="text-2xl text-white/80 mt-8 mb-8 leading-relaxed"> 
                  Capture, organize, and rediscover your favorite tweets, videos, articles and ideas.
                  Transform scattered information into connected knowledge.
                </p>
              </div> 
              <div className=" flex flex-wrap gap-4 mt-6 mb-6 justify-center sm:justify-start"> 
                {["Save Tweets","Store Videos", "Archieve Articles","Organise Links"]
                  .map((feature)=>(
                    <div className="px-2 py-2 text-3xl sm:text-2xl text-white/90 bg-white/10 backdrop-blur
                     rounded-full border border-white/20 cursor-pointer transition-all duration-500 hover:bg-white/20 hover:scale-105">
                     {feature}
                    </div> 

                  ))
                }
              </div> 
              <div> 
                 <h3 className="text-3xl font-semibold text-white/90 mb-10 flex items-center"> 
                  <Sparkles className="w-7 h-7 text-yellow-300 mr-3" /> 
                  See What you can save
                 </h3> 
                 <div className="grid grid-cols-2 gap-4"> 
              {ContentItems.map((item, index) => {
                const Icon = item.icon;
                return<div className={`rounded-xl bg-white/10 backdrop-blur-md p-4 border
                  border-white/10 hover:bg-white/20 translation-all duration-500 hover:scale-100 
                  hover:-translate-y-1  
                   ${isVisible ? 'translate-y-0 opacity-100 ' : 'translate-y-8 opacity-0'} `}
                    style={{
                      transitionDelay:`${1200 + index*100 }ms`, 
                      animation:`float ${3+index*0.5}s ease-in-out infinite `,
                      animationDelay:`${index*0.5}s`
                    }}
                  > 
                      <div className="flex items-start space-x-3 "> 
                        <div className={` ${item.color} rounded-lg p-2 shrink-0 `}> 
                          <Icon className="w-8 h-8 text-white"/>
                        </div>
                        <div className="min-w-0">  
                          <p className="text-white/90 text-2xl">{item.type}</p>
                          <p className="text-white/70 text-xl leading-relaxed truncate">{item.content} </p>
                          </div>
                      </div> 

                  </div>
                     
                
              })}
                 </div>
              </div>

    </div>
}