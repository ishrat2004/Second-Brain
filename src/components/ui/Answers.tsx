import { useEffect, useState } from "react";
import { check, replaceHeadingStars } from "../../Check";

interface AnswerProps{
    ans?:string;
    index?:number;
    total_result?:number;
    type?:any
}
const Answers = (props:AnswerProps)=>{
    const [heading,setheading]=useState(false); 
    const [new_ans,setnewans]=useState(props.ans); 
 
     
  useEffect(()=>{ 
        // let str:string=props.ans ?? ""; 
        // console.log(str+ check(str));
        // if(check(str)){ 
        //   setheading(true); 
        //   setnewans(replaceHeadingStars(str)); 
        //   console.log("new str is " + new_ans);
        // } 
        
        // props.ans?console.log(props.ans+" "+check(props.ans)):console.log("no ans");
       // console.log(props.index); 
        if(props.ans){ 
          if(check(props.ans)){ 
            //console.log(props.ans+" "+check(props.ans));
            setheading(true)
            setnewans(replaceHeadingStars(props.ans));
            //console.log("new str is " + new_ans);
            
          } 
          else{ 
           // console.log(props.ans+" "+check(props.ans));
            
          }
        }
  },[])
  return (
    <div>
       {props.index==0 && props.total_result && props.total_result>1 ? <span className="pt-2 text-xl block text-white"> {new_ans}</span>: (heading ? <span className={ "pt-2 text-lg block text-white"  }>{new_ans} </span>: <span className={ props.type=='q'? "pl-1":"pl-5" }>{new_ans} </span>)  }

    </div>
  )
}

export default Answers