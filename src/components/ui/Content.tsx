export  function Content(){ 
    return <div className="h-screen  "> 
              <div className="px-20 "> 
                <h1 className="text-5xl lg:text-7xl text-white font-bold leading-tight "> 
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
              <div className="px-20 flex flex-wrap gap-2"> 
                {["Save Tweets","Store Videos", "Archieve Articles","Organise Links"]
                  .map((feature)=>(
                    <div className="px-2 py-2 text-2xl text-white/90 bg-white/10 backdrop-blur
                     rounded-full border border-white/20 cursor-pointer transition-all duration-500 hover:bg-white/20 hover:scale-105">
                     {feature}
                    </div> 

                  ))
                }
              </div>

    </div>
}