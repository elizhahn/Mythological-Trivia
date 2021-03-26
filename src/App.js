import './App.css';
import React, { Component } from "react";
import Header from "./Header/Header";
import Answer from "./Answer/Answer";
import QuestionCard from "./QuestionCard/QuestionCard";

class App extends Component {
  constructor(){
    super()
      this.state = {
        data: [],
        questions: [],
        currentQuestion: '',
        correctAnswer: '',
        answers: [],
        incorrectAnswers: []
      }
    }

componentDidMount() {
  fetch("https://opentdb.com/api.php?amount=20&category=20&difficulty=medium&type=multiple")
    .then(response => response.json())
    .then(triviaData => {
      const questions = triviaData.results.map(triviaItem => {
        return triviaItem.question
      })
      const answers = [...triviaData.results[0].incorrect_answers, triviaData.results[0].correct_answer]
      this.setState({data: triviaData.results, questions: questions, currentQuestion: questions[0], correctAnswer: triviaData.results[0].correct_answer, answers: answers})
    })
    .catch(error => console.log("error"))
}

onSubmit(answer) {
  
}


render() {
  return (
    <>
     <Header/>
     <main className="container">
        {!this.state.data && <p>Loading...</p>}
        <QuestionCard questionInfo={this.state} onSubmit={this.onSubmit}/> 
        <Answer/>
     </main>
    </>
  )
}
}

export default App;
