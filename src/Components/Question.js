import he from "he";

export default function Question(props) {
  const choices = props.allAnswers.map((choice) => {
    const styles = { background: choice.isHeld ? "lightblue" : "" };
    //console.log(choice.styless)
    return (
      <div
        style={!props.finished ? styles : choice.styless}
        className="choice"
        onClick={() => props.updateHeld(props.id, choice.id)}
        key={choice.id}
      >
        {choice.value}
      </div>
    );
  });
  ///console.log(choices)
  return (
    <div className="question">
      <h2>{he.decode(props.question)}</h2>
      <div className="choices">{choices}</div>
    </div>
  );
}
