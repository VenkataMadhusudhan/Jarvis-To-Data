import React,{useEffect, useState} from 'react'
import Taskcard from './Taskcard'
import {useNavigate} from "react-router-dom";
import Tasks from "../Tasks.json";
import {GrAdd} from 'react-icons/gr';



const Home = () => {
  
  const msg = new SpeechSynthesisUtterance();
  const toroot = useNavigate();
  const [TaskList, setTaskList] = useState(Tasks);
  const [popup, setpopup] = useState("-z-50");
  const [newTaskPLUS, setnewTaskPLUS] = useState("");
  const [CategoryPLUS, setCategoryPLUS] = useState("");

  console.log("TaskList:",TaskList);

  function addTask() {
    console.log("RENDERED");
    msg.text = "Are we Working on a New Project Sir?";
    msg.onend =function() {
      console.log("boom boom");
    }
    window.speechSynthesis.speak(msg);

    setpopup("z-50");
  };

  function Plusbutton(e:any) {
    e.preventDefault();

    msg.text = "Okay Boss! I have added" + newTaskPLUS +",to Task List";
    msg.onend =function() {
      console.log("boom boom");
    }
    window.speechSynthesis.speak(msg);

    console.log(e.target.value);
    setpopup("-z-50");
    var newtask = {
      "id":TaskList.length + 1,
      "Task":newTaskPLUS,
      "complete":false,
      "type":CategoryPLUS
  }
  setTaskList([...TaskList, newtask]);

  }

  function onComplete (value:any){
    // var changetasklist = TaskList;
    // changetasklist[value.Tid-1].complete = !TaskList[value.Tid-1].complete;
    // setTaskList(changetasklist);
    // console.log("changetasklist", TaskList);
    msg.text = "Congratulations Boss! I have Marked Task Completed.";
    msg.onend =function() {
      console.log("boom boom");
    }
    window.speechSynthesis.speak(msg);
    setTaskList((prevTaskList) => {
      const updatedTaskList = [...prevTaskList];
      updatedTaskList[value.Tid-1].complete =!updatedTaskList[value.Tid -1].complete;
      return updatedTaskList;
    })
  }

  const onDelete = (value:any)=>{
    msg.text = "Okay Boss! I have Deleted this Task.";
    msg.onend =function() {
      console.log("boom boom");
    }
    window.speechSynthesis.speak(msg);
    alert("Deleting Task"+ value);
    console.log(TaskList);
    setTaskList(TaskList.filter((item) => item.id !== value));
    console.log("DELETED " + value);
  }

  async function LogOut() {
    msg.text = "Signing Out";
    msg.onend =function() {
      console.log("boom boom");
    }
    window.speechSynthesis.speak(msg);
    toroot("/");
  }

  useEffect(()=>{
    console.log("RENDERED");
    msg.text = "Hi Tony Stark! I have arranged Todo and Completed Tasks for you.";
    msg.onend =function() {
      console.log("boom boom");
    }
    window.speechSynthesis.speak(msg);
  },[]);


  return (
    <div className='w-full h-screen bg-Iron-man-bg-color flex justify-top items-center flex-col'>
        <div className='w-4/5 h-32 mt-10 rounded-lg border-indigo-600 border-4 bg-transparent flex justify-around items-center'>
            <div className='logojarvis' onClick={LogOut}></div> 
            <div>
            <h2 className="text-Ironman-gold text-2xl">Task List</h2>
            <p className="text-white">Mark project list - powered by Jarvis</p>
            </div>
        </div>

        <button className='jarvispattern mt-10 border-4 border-jarvis-glow rotate active:logoadd' onClick={addTask}>
        </button>

        <div className={`w-full h-screen bg-opacity-30 bg-slate-200 absolute flex justify-center items-center ${popup} `}>
          <form className='h-48 w-96 bg-Ironman-gold rounded-2xl border-4 border-Ironman-red flex flex-col p-6'>
            <label className=" font-bold m-1">Enter Task</label>
            <input type="text" value={newTaskPLUS} onChange={(event:any) => setnewTaskPLUS(event.target.value)} placeholder='Task' className=" m-1 p-2 h-8"></input>
            <label className=" font-bold m-1  ">Select Category</label>
            <div>
            <input type="radio" name="category" value="professional" className="scale-125 m-2" onClick={(event:any) => setCategoryPLUS(event.target.value)}></input>
            <label>Professional</label>
            </div>
           <div>
           <input type="radio" name="category" value="personal" className="scale-125 m-2" onClick={() => setCategoryPLUS("personal")}></input>
            <label>Personal</label>
           </div>
            <button onClick={Plusbutton} className='font-bold bg-Ironman-gold border-4 border-Ironman-red rounded-full p-2 cursor-pointer w-10 top-[320px] left-[750px] absolute hover:scale-110 active:translate-y-2'><GrAdd></GrAdd></button>
          </form>
        </div>

        <div className=' absolute top-48 left-32 bg-transparent h-96 w-96 text-center justify-start items-center flex flex-col'>
              <h5 className=' text-Ironman-gold'>Professional Task List</h5>
              {TaskList.map((item)=>{
                  console.log("MAP called")
                  if(item.type === "professional"){
                    return <Taskcard key = {item.id} TName = {item.Task} Tcomplete = {item.complete} Tid = {item.id}  onComplete={onComplete} onDelete={onDelete}/>
                  }
                
              })}
        </div>

        <div className="absolute top-48 right-32 bg-transparent h-96 w-96 text-center justify-start items-center flex flex-col">
                <h5 className=' text-Ironman-gold'>Personal Task List</h5>
                {TaskList.map((item)=>{
                  if(item.type === "personal"){
                    return <Taskcard key = {item.id} TName = {item.Task} Tcomplete = {item.complete} Tid = {item.id} onComplete={onComplete} onDelete={onDelete}/>
                  }
              })}
        </div>
        <p className='text-white m-4 text-sm'>Click on Jarvis to add Task @by Iron Man</p> 
    </div>
  )
}

export default Home