import { useContext } from "react";
import { QuizContext } from "../utils/Context.js";

export default function MainMenu() {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div className="main-menu">
      <h3>Quizzical</h3>
      <p> A Quiz of 10 Questions</p>
    <button className="start-btn" onClick={() => setGameState("quiz")}>
      Start Quiz
    </button>
    </div>
  );
}
