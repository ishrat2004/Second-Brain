import { useEffect, useRef } from "react";
import Share from "../../icons/Share";
interface Cardprops{ 
    title:string,
    link:string, 
    type:"twitter" | "youtube",
}
export function Card({title,link,type}:Cardprops){  
  const twitterRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (type === "twitter") {
      // Dynamically load widgets.js if not already present
      if (!(window as any).twttr) {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.onload = () => {
          (window as any).twttr?.widgets?.load(twitterRef.current);
        };
        document.body.appendChild(script);
      } else {
        (window as any).twttr.widgets.load(twitterRef.current);
      }
    }
  }, [type, link]);
    return <div> 
    <div className="p-4 bg-white rounded-md shadow-md max-w-72 border-gray-200 border min-h-48"> 
       <div className="flex justify-between"> 
            <div className="flex items-center text-md font-semibold"> 
              <div className="text-gray-500 pr-2 hover:text-purple-500 cursor-pointer"> 
                <Share size="md"/>    
              </div>
              {title}
            </div>  
            <div className="flex gap-2 items-center"> 
                    <div className="text-purple-500 hover:text-purple-600 cursor-pointer" > 
                        <a href={link} target={"_blank"} > 
                        <Share size="md" />
                        </a>
                    </div>
                <div> 
               <Share size="md" />
               </div>
            </div>
       </div> 
       <div className="pt-8"> 
        {type==="youtube" &&  <iframe className="w-full" src={link.replace("watch","embed").replace("?v=","/") } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>   }
       </div> 
       <div>  
        {type==="twitter" && (
          <blockquote className="twitter-tweet">
            <a href={link.replace("x.com", "twitter.com")}>Loading tweet...</a>
          </blockquote>
        ) }
       </div>
    </div> 
    </div>
}