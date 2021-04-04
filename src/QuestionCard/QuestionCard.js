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
            <li className="answer-choice"><span className="letter">A: </span>  {questionInfo.answers["a"]}</li> 
            <li className="answer-choice"><span className="letter">B: </span>  {questionInfo.answers["b"]}</li> 
            <li className="answer-choice"><span className="letter">C: </span>  {questionInfo.answers["c"]}</li> 
            <li className="answer-choice"><span className="letter">D: </span>  {questionInfo.answers["d"]}</li> 
           </ul>
      </article>
    )
  }
}

export default QuestionCard; 
