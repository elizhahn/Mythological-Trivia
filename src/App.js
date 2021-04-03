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
        answers: {},
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
      const keys = ["a", "b", "c", "d"]
      const answers = [...triviaData.results[0].incorrect_answers, triviaData.results[0].correct_answer]
      const answerKey = keys.reduce((answerList, key, i) => {
        answerList[key] = answers[i]
        return answerList
      }, {})
      this.setState({data: triviaData.results, questions: questions, currentQuestion: questions[0], correctAnswer: triviaData.results[0].correct_answer, answers: answerKey})
    })
    .catch(error => console.log("error"))
}

generateNewQuestion = (index) => {
  const newQuestion = this.state.questions[index + 1];
  const newCorrectAnswer = this.state.data[index + 1].correct_answer;
  const keys = ["a", "b", "c", "d"]
  const answers = [...this.state.data[index + 1].incorrect_answers, this.state.data[index + 1].correct_answer]
  const answerKey = keys.reduce((answerList, key, i) => {
    answerList[key] = answers[i]
    return answerList
  }, {})

  return {question: newQuestion, correctAnswer: newCorrectAnswer, answers: answerKey}
}



onSubmit = (answer) => {
  const questionIndex = this.state.questions.indexOf(this.state.currentQuestion)
  const question = this.generateNewQuestion(questionIndex)
  console.log(this.state)
  if(this.state.answers[answer] === this.state.correctAnswer) {
    console.log("test")
    this.setState({currentQuestion: question.question, correctAnswer: question.correctAnswer, answers: question.answers})
} else {
    this.setState({currentQuestion: question.question, correctAnswer: question.correctAnswer, answers: question.answers, incorrectAnswers: [...this.state.incorrectAnswers, answer]})
  }
  
}

render() { 
  console.log(this.state)
  return (
    <>
     <Header/>
     <main className="container">
        {!this.state.data && <p>Loading...</p>}
        <QuestionCard questionInfo={this.state} onSubmit={this.onSubmit}/> 
        <Answer onSubmit={this.onSubmit}/>
     </main>
    </>
  )
}
}

export default App;
