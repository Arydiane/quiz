import { useEffect } from "react";
import Welcome from "./components/Welcome";
import { useQuiz } from "./context/quiz";
import Question from "./components/Question";
import "./App.css";

function App() {
  const [quizState, dispatch] = useQuiz();

  useEffect(() => {
    //embaralhar as perguntas
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []);

  return (
    <div className="App">
      <h1>Quiz de programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
    </div>
  );
}

export default App;
