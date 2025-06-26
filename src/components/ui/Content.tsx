export  function Content(){ 
    return <div className="  "> 
              <div className="px-20 "> 
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
              <div className="px-4 sm:px-20  flex flex-wrap gap-4 mt-6 justify-center sm:justify-start"> 
                {["Save Tweets","Store Videos", "Archieve Articles","Organise Links"]
                  .map((feature)=>(
                    <div className="px-2 py-2 text-3xl sm:text-2xl text-white/90 bg-white/10 backdrop-blur
                     rounded-full border border-white/20 cursor-pointer transition-all duration-500 hover:bg-white/20 hover:scale-105">
                     {feature}
                    </div> 

                  ))
                }
              </div>

    </div>
}