import { useEffect, useRef } from "react";
import Share from "../../icons/Share";
import { Delete } from "../../icons/Delete";
import { BACKEND_URL } from "../../config";
import axios from "axios";
import { useContent } from "../../hooks/useContent";
import { Youtube } from "../../icons/Youtube";
import Twitter from "../../icons/Twitter";
interface Cardprops{ 
    title:string,
    link:string, 
    type:"twitter" | "youtube",
    id:string
}
export function Card({title,link,type,id}:Cardprops){  
  const twitterRef = useRef<HTMLDivElement>(null);
  const contents=useContent(); 
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
    async function delete_content(){ 
       console.log(BACKEND_URL+"/api/v1/content/"+id);
       await axios.delete(BACKEND_URL+"/api/v1/content/"+id,{ 
        headers:{ 
          token:localStorage.getItem("token")
        }
       }) 
      
    }
    return <div> 
    <div className="p-4 bg-white rounded-md shadow-md max-w-72 border-gray-200 border min-h-48 m-2"> 
       <div className="flex justify-between"> 
            <div className="flex items-center text-md font-semibold"> 
              <div className="text-gray-500 pr-2 hover:text-purple-500 cursor-pointer"> 
                {type==="youtube" && <Youtube/> }
                {type==="twitter" && <Twitter/> }
              </div>
              <div className="text-xl font-semibold"> 
              {title}
              </div>
            </div>  
            <div className="flex gap-2 items-center"> 
                    <div className="text-black hover:text-purple-600 cursor-pointer" > 
                        <a href={link} target={"_blank"} > 
                        <Share size="md" />
                        </a>
                    </div>
                    <div className="text-black hover:text-purple-600 cursor-pointer" onClick={delete_content}> 
                    <Delete size={"md"} />                
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