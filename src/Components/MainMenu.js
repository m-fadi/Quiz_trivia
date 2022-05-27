import { useContext } from "react";
import { QuizContext } from "../utils/Context.js";

export default function MainMenu() {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <button className="start-btn" onClick={() => setGameState("quiz")}>
      Start Quiz
    </button>
  );
}
