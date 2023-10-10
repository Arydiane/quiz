import "./GameOver.css";
import { useQuiz } from "../../context/quiz";
import WellDone from "../../assets/img/welldone.svg";

function GameOver() {
  const [quizState, dispach] = useQuiz();

  return (
    <section id="gameover">
      <h2>Fim de Jogo!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length}{" "}
        perguntas.
      </p>
      <img src={WellDone} alt="Fim do Quiz" />
      <button onClick={() => dispach({ type: "NEW_GAME" })}>Reiniciar</button>
    </section>
  );
}

export default GameOver;
