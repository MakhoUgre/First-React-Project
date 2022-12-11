import { useState } from "react";
import './Styles/Timer.css'


const Timer = ()=> {
    const [timer, setTimer] = useState(0);

    const startTimer = ()=> {
        window.myTimer = setInterval(()=> {
            setTimer((timer)=>timer + 1); 
        }, 1000);
    };
    const stopTimer = ()=>{
        clearInterval(window.myTimer);
    };
    const resetTimer = ()=> {
        clearInterval(window.myTimer);
        setTimer(0);
    };

    const [show, setShow] = useState(true);
    return(
        <dir className='Timer'>
             {show ? <h1>Timer</h1> : null }
           
            <button onClick={()=> setShow((show)=> !show)} className="butt"> Show / Hide </button>
            <br />
            <br />
            
            <span>{Math.trunc(timer / 60 )} mins</span>
            <span>{timer % 60 } secs</span>
            <div>
                <button onClick={startTimer} >Start</button>
                <button onClick={stopTimer} >Stop</button>
                <button onClick={resetTimer} >Reset</button>
                
            </div>
        </dir>
            
    )  
}



      
 export default Timer