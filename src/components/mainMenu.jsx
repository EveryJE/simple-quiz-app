import React,{ useContext } from "react"
import { QuizContext } from "./quizContest"

export  const Menu=()=>{
const {setAppState,setScore}=useContext(QuizContext);
return(
    <div className="menu inColumn">
        <button onClick={ ()=>{setAppState("quiz")
       setScore(0) } }>start quiz</button>
    </div>
)
}