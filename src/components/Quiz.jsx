
import React,{useState,useContext} from 'react'
import { Quetions } from "./questionList";
import { QuizContext } from './quizContest';
import "../index.css"
export const Quiz=()=>{
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [optionChosen,setOptionChosen]=useState("");
    const {setAppState,score,setScore,attempts,setAttempts}=useContext(QuizContext);
    return(
<div className='quiz inColumn'>
    <h1 style={{textAlign:'center'}}>{Quetions[currentQuestion].prompt}</h1>
    <div className='options inColumn'>
 <button onClick={()=>{setOptionChosen("A")}}>{Quetions[currentQuestion].optionA}</button>
    <button onClick={()=>{setOptionChosen("B")}}>{Quetions[currentQuestion].optionB}</button>
    <button onClick={()=>{setOptionChosen("C")}}>{Quetions[currentQuestion].optionC}</button>
    <button onClick={()=>{setOptionChosen("D")}}>{Quetions[currentQuestion].optionD}</button>
    </div>
   {currentQuestion===Quetions.length-1 ? (
    <button onClick={()=>{
        if(optionChosen===Quetions[currentQuestion].ans){
            setScore(score+1)
        }
         setAppState("finish")
         setAttempts(attempts +1)
    }}>Finish Quiz</button>
   ) :(
    <button onClick={()=>{
        if(optionChosen===Quetions[currentQuestion].ans){
            setScore(score+1)
        }
         setCurrentQuestion(currentQuestion+1)
    }}>Next Question</button>
   )}
 </div>
    );
}