import React, { Component } from "react";
import "./QuestionCard.css";

const QuestionCard = ({ questionInfo }) => {
  const answers = questionInfo.answers.sort();
  console.log(answers)
  return (
    <article className="question-container">
        <h1 className="question">{questionInfo.currentQuestion}</h1>
        <ul className="answers">
          <li className="answer-choice">A: {answers[0]}</li> 
          <li className="answer-choice">B: {answers[1]}</li> 
          <li className="answer-choice">C: {answers[2]}</li> 
          <li className="answer-choice">D: {answers[3]}</li> 
         </ul>
    </article>
  )
}

export default QuestionCard; 
