import { useQuiz } from "../../context/quiz";
import "./PickCategory.css";
import Category from "../../assets/img/category.svg";

const PickCategory = () => {
  const [quizState, dispach] = useQuiz();

  function chooseCategoryAndReorderQuestions(category) {
    dispach({ type: "START_GAME", payload: category });
    dispach({ type: "REORDER_QUESTIONS" });
  }

  return (
    <div id="category">
      <h2>Escolha uma categoria</h2>
      <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
      {quizState.questions.map((question) => (
        <button onClick={() => chooseCategoryAndReorderQuestions(question.category)} key={question.idCategory}>
          {question.category}
        </button>
      ))}
      <img src={Category} alt="Categoria do Quiz" />
    </div>
  );
};

export default PickCategory;
