import { createContext, useContext } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = { name: "Quiz" };
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export const useQuiz = () => {
  return useContext(QuizContext)
}