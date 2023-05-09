import {useContext} from 'react';
import { QuizContext } from './quizContest';

export const FinishQuiz=()=>{
  const {setAppState,score,attempts}=useContext(QuizContext);

return(
  <div className="finish inColumn">
    <h2>{attempts}{attempts===1 ?"st" :attempts===2?"nd":attempts===3?"rd" :"th"} attempt You scored {score}</h2>
    <button onClick={()=>{setAppState("menu")}}>Restart</button>
  </div>  
);
}