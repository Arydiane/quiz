import styles from "./Welcome.css";
import Quiz from "../../assets/img/quiz.svg";

const Welcome = () => {
  return (
    <section id={styles.welcome}>
      <h2>Seja bem-vindo!</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button>Iniciar</button>
      <img src={Quiz} alt="Início do quiz" />
    </section>
  );
};

export default Welcome;
