import React from "react";
import { useQuiz } from "../../context/quiz";
import "./Question.css";
import Option from "../Option";

function Question() {
  const [quizState, dispatch] = useQuiz();

  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
    dispatch({ type: "CHECK_ANSWER", 
    payload: {answer: currentQuestion.answer, option }
  })
  }

  return (
    <section id="question">
      <p>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option) => (
          <Option key={option} option={option} answer={currentQuestion.answer} selectOption={() => onSelectOption(option)} />
        ))}
      </div>
      {quizState.answerSelected && (
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
          Continuar
        </button>
      )}
    </section>
  );
}

export default Question;
