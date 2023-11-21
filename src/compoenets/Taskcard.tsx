import React, { useEffect, useState } from 'react'
import {TiTickOutline} from 'react-icons/ti'
import {MdDeleteForever} from 'react-icons/md'


const Taskcard = (props:any) => {
  //  const msg = new SpeechSynthesisUtterance();
    const [markComplete, setMarkComplete] = useState(props.Tcomplete ? "text-lime-500" : "text-white");

  useEffect(()=>{
    setMarkComplete(props.Tcomplete ? "text-lime-500" : "text-white");
  },[props.Tcomplete])

  return (
    <div className="h-10 w-80 m-2 border-2 border-Ironman-red rounded-lg text-white flex items-center p-2 justify-between">
    {props.TName}
    <div className="flex">
    <TiTickOutline className={`m-4 active:scale-125 ${markComplete} `} onClick={()=>{props.onComplete(props);}}/> 
    <MdDeleteForever className="m-4 active:scale-125 text-red-700" onClick={()=>{props.onDelete(props.Tid)}}/>
    </div>
    </div>
  )
}

export default Taskcard



  // function ondelete() {
  //   msg.text = "Okay Sir, I Deleted this task";
  //   msg.onend =function() {
  //     console.log("boom boom");
  //   }
  //   window.speechSynthesis.speak(msg);
  //   alert("Task Deleted");
  // }
  // function onComplete() {
  //   if(taskComplete == true){
  //       msg.text = "Okay Sir, I Reopened this task";
  //       msg.onend =function() {
  //         console.log("boom boom");
  //       }
  //       window.speechSynthesis.speak(msg);
        
  //       alert("Task Mark UnCompleted");
  //       settaskComplete(false);

  //   }else{
  //       msg.text = "Congratulations Sir, I Marked this task Completed";
  //       msg.onend =function() {
  //         console.log("boom boom");
  //       }
  //       window.speechSynthesis.speak(msg);
        
  //       alert("Task Mark Completed");
  //       settaskComplete(true);
        
  //   }
    
  
  // }