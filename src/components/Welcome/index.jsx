import "./Welcome.css";
import Quiz from "../../assets/img/quiz.svg";
import { useQuiz } from "../../context/quiz";

const Welcome = () => {

  const [quizState, dispatch] = useQuiz()

  return (
    <section id="welcome">
      <h2>Seja bem-vindo!</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
      <img src={Quiz} alt="Início do quiz" />
    </section>
  );
};

export default Welcome;
