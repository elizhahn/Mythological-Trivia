import React, { Component } from "react";
import "./QuestionCard.css";

const QuestionCard = ({ questionInfo }) => {
  if(Object.keys(questionInfo.answers).length === 0 ) {
    return <h1>Loading...</h1>
  } else {
  
    return (
      <article className="question-container">
          <h1 className="question">{questionInfo.currentQuestion}</h1>
          <ul className="answers">
            <li className="answer-choice">A: {questionInfo.answers["a"]}</li> 
            <li className="answer-choice">B: {questionInfo.answers["b"]}</li> 
            <li className="answer-choice">C: {questionInfo.answers["c"]}</li> 
            <li className="answer-choice">D: {questionInfo.answers["d"]}</li> 
           </ul>
      </article>
    )
  }
}

export default QuestionCard; 
