import "./Option.css";
import { useQuiz } from "../../context/quiz";

function Option({ option, selectOption, answer }) {
  const [quizState, dispach] = useQuiz();

  return (
    <div
      className={`option 
        ${quizState.answerSelected && option === answer ? "correct" : ""} 
        ${quizState.answerSelected && option !== answer ? "wrong" : ""}
        ${quizState.answerSelected === option  && option !== answer ? "selected" : ""}`}
      onClick={() => selectOption()}
    >
      <p>{option}</p>
    </div>
  );
}

export default Option;
