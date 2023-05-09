import React, {useState} from "react";
import { Quiz } from './components/Quiz';
import { Menu } from "./components/mainMenu";
import { FinishQuiz } from "./components/finishQuiz";
import { QuizContext } from './components/quizContest';
function App(){

  
 const [appState,setAppState] = useState("menu");
 const [score,setScore] = useState(0);
 const [attempts,setAttempts]=useState(0);
    return(
      <div className="appOreintation">
      <div className="appbg"></div>
        <h1 className="title inColumn">Quiz - App </h1>
<QuizContext.Provider
value={{appState,setAppState,score,setScore,attempts,setAttempts}}>
{appState==="menu" && <Menu/>}
{appState==="quiz" && <Quiz/>}
{appState==="finish" && <FinishQuiz/>}
</QuizContext.Provider>
      </div>
    )
  }

export default App;
