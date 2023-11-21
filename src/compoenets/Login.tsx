import React,{useEffect, useState} from 'react'
import { database } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {useNavigate} from "react-router-dom";


export const Login = () => {
  const routeto = useNavigate();
  const [bordercolor, setBorderColor] = useState("border-indigo-600");
  const [shawdowColor, setshawdowColor] = useState("null");
  const [isShown, setIsShown] = useState(false);
  const [ran, setran] = useState(2);
  const msg = new SpeechSynthesisUtterance();
  const [buttonED, setbuttonED] = useState(false);
  const [data, setData] = useState({
    email:"",
    password:""
  });
  const {email, password} = data;

  var shadowrandom = ["shadow-md","shadow-lg", "shadow-xl", "shadow-2xl"];

  function rangenarator(){
    setran(Math.floor(Math.random()*4));
    console.log(ran);
  }
 
  useEffect(()=>{
    isShown?setBorderColor("border-Ironman-gold"):setBorderColor("border-indigo-600");
    isShown?setshawdowColor(shadowrandom[ran] +" shadow-Ironman-gold"):setshawdowColor("");    
  })
  
  const logedin = () => {
    setbuttonED(true);
    var ranvaluegen = setInterval(rangenarator, 1000);

    signInWithEmailAndPassword(database,email,password).then(
            user => {
              console.log(user)
              msg.text = "Hi Tony Stark! This is Jarvis. Welcome, I am Assembling the Tasks for the project";
              msg.onend =function() {
                clearInterval(ranvaluegen);
                console.log("boom boom");
                setbuttonED(false);
                routeto('/home');
              }
              window.speechSynthesis.speak(msg);
            }
    ).catch(err =>{ 
      console.log(err) 
      msg.text = "Your are tring breach the system!!! I have raised the Alert";
      msg.onend =function() {
        clearInterval(ranvaluegen);
        console.log("boom boom");
        setbuttonED(false);
      }
      window.speechSynthesis.speak(msg);
    
    }
  )}

  
  const changeHandler= (e:any) =>{
    setData({...data,[e.target.name]:e.target.value})
  }

  return (
    <div className="w-full h-screen bg-Iron-man-bg-color flex justify-center items-center flex-col">
      <form id="heroborder" autoComplete='off' className={`w-80 h-2/3 bg-Iron-man-bg-color rounded-xl border-4 ${bordercolor} flex flex-col items-center p-5 duration-300`}>
        <img src='https://pbs.twimg.com/profile_images/1439953850471911426/s4pE9SYa_400x400.jpg' className={`h-24 w-24 rounded-full m-5 duration-100 ${shawdowColor} `}></img>
        <div className="flex flex-col m-3 w-10/12">
          <label className="text-Ironman-gold">Username</label>
          <input type='email' name='email' value={email} autoComplete='off' onChange={changeHandler} className="rounded-sm h-8 bg-transparent text-white border-b-2 border-b-indigo-600 focus:outline-none"></input>
        </div>
        <div className="flex flex-col m-3 w-10/12">
          <label className="text-Ironman-gold">Password</label>
          <input type='password' name='password' value={password} autoComplete='off'onChange={changeHandler} className="rounded-sm h-8 bg-transparent text-white border-b-2 border-b-indigo-600 focus:outline-none"></input>
        </div>
        <button className="pointer m-3 bg-indigo-600 w-10/12 rounded-sm text-white h-10 relative overflow-hidden z-10 before:beforestyles before:bg-Ironman-red hover:before:w-full hover:text-Ironman-gold active:translate-y-1"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)} onClick={logedin}  disabled={buttonED}>Login</button>
      </form>
      <p className="text-white p-3">@Stark co ltd - JARVIS</p>
    </div>
  )
}
