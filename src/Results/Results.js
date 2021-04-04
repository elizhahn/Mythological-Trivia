import React from "react"
import ReactDOM from "react-dom"
import "./Results.css";

const Results = (props) => {
  const numIncorrect = props.incorrectAnswers.length
  const percentCorrect = (((props.numQuestions - numIncorrect) / props.numQuestions) * 100).toFixed(1)
  return ReactDOM.createPortal(
    (<div className="modal-overlay">
    <section className="modal-content">
      <h1>Here are your results</h1>
      <p>You missed {props.incorrectAnswers.length}</p>
      <p>{percentCorrect}% correct!</p>
      <button onClick={() => props.startGame(props.triviaData)}>Try Again</button>
    </section>
    </div>
    ), document.querySelector("#modal")
  )
}

export default Results