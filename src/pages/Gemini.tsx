import { useState } from "react";
import { API_KEY, API_LINK } from "../config";
import Answers from "../components/ui/Answers";
import { Brain, Loader, Loader2 } from "lucide-react";
import Close from "../icons/Close";
import { Gemini_icon } from "../icons/Gemini_icon";
import { Paper_plane } from "../icons/Paper_plane";

export function Gemini(){ 
    const [question,setquestion]=useState(""); 
    const [isLoading,setLoading]=useState(false); 
    const [result,setresult]=useState<any[]>([]);  
    async function send_prompt(){  
         setLoading(true);
        try{
        const URL=API_LINK;
        let payload={"contents": [
      {
        "parts": [
          {
            "text": `${question}`
          }
        ]
      }
    ]}
        let response=await fetch(URL+"?key="+API_KEY,{ 
          method:"POST",
          body:JSON.stringify(payload)
        })
       const data = await response.json();
       let data_string = data?.candidates?.[0]?.content?.parts?.[0]?.text;
       data_string=data_string.split("* "); 
       data_string=data_string.map((item)=>item.trim());
    //console.log("AI response:", data_string);
    setresult([...result,{type:'q',text:question},{type:'a',text:data_string}]);
        setquestion(""); 
    }catch(err){ 
     
    }finally{ 
        setLoading(false); 
    } }
    // console.log(result);
    const handlekeypress=(e:React.KeyboardEvent)=>{ 
       if(e.key==='Enter' && !isLoading){ 
         send_prompt(); 
       }
    };
    return <div className="grid grid-cols-5 h-screen text-center bg-zinc-900"> 
          <div className="col-span-1 bg-zinc-800"> 
            <div className="flex justify-center mt-5">   
              <div> 
                <Brain className="w-10 h-10 text-white "/>
              </div>
              <div> 
                <h1 className="text-4xl bg-gradient-to-r from-yellow-300 via-orange-300 to-rose-400 
                bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient "> 
                  Second Brain
                </h1>
              </div>
              </div>
              <div className="flex justify-center"> 
                <Close/>
              </div>
             <div className="text-4xl text-blue-600 font-bold text-center flex justify-center">
              Gemini
              <div className="m-2"> 
                 <Gemini_icon/> 
              </div>
   
             
            </div>
          </div>
          <div className="col-span-4 p-10 h-full overflow-scroll justify-center">
              <div className="flex justify-center"> 
                <h1 className="text-5xl text-blue-700"> 
                  Hello {localStorage.getItem("username")}
                </h1>
                <Gemini_icon/>
              </div>
             <div className="container h-110 "> 
              <div className="text-zinc-300"> 
                 <ul> 
                 {result && result.map((item,index)=>(
                   <div key={index+Math.random()} className={item.type=='q'? "flex justify-end":"" } > 
                  { item.type=='q' ? <li key={index+Math.random()}  className="text-left p-1 border-8 bg-zinc-700 border-zinc-700 rounded-tl-2xl  rounded-bl-2xl  rounded-br-2xl  w-fit "> 
                      <Answers  ans={item.text} index={index} total_result={1} type={item.type}/>
                    </li> : item.text.map((ansItem,ansIndex)=>(
                      <li key={ansIndex+Math.random()}  className="text-left p-1"> 
                      <Answers  ans={ansItem} index={ansIndex} total_result={item.length} type={item.type}/>
                    </li>
                    )) }
                    </div> 
                  ))
                } 
                </ul>
                   { 
                    isLoading && (
                      <div className="flex items-center justify-start text-zinc-400"> 
                        <Loader className="animate-spin mr-2 h-4 w-4 "/>
                        <span> Gemini is thinking ...</span>
                        </div>
                    )
                   }
              </div>

             </div>  
                <div className="bg-zinc-800 w-1/2 p-1 pr-5 text-zinc m-auto rounded-full border border-zinc-700 flex h-16 fixed bottom-4 "> 
                  <input onChange={e=>{ 
                    setquestion(e.target.value); 
                  }} 
                  value={question}
                  onKeyPress={handlekeypress}
                  className="w-full bg-inherit rounded-full px-3 outline-none text-zinc-200" type="text" placeholder={ isLoading ? "AI is thinking..." : "Ask me anything"}/>
                   
                  <button onClick={send_prompt} className="bg-black text-white rounded-md px-4 py-2 cursor-pointer ">
                     {isLoading ?(<div><Loader2 className="animate-spin mr-2 h-2 w-2"/> Wait </div> ):(
                      <Paper_plane/>
                     ) }
                  </button>

                </div>

          </div>
    </div>
}