import './App.css';
import React, { Component } from "react";
import Header from "./Header/Header";
import Answer from "./Answer/Answer";
import QuestionCard from "./QuestionCard/QuestionCard";
import Results from "./Results/Results";

class App extends Component {
  constructor(){
    super()
      this.state = {
        data: [],
        questions: [],
        currentQuestion: '',
        correctAnswer: '',
        answers: {},
        incorrectAnswers: [],
        gameOver: false,
      }
    }

componentDidMount() {
  fetch("https://opentdb.com/api.php?amount=20&category=20&difficulty=medium&type=multiple")
    .then(response => response.json())
    .then(data => {
     const triviaData = data.results;
     console.log(triviaData)
     this.startGame(triviaData); 
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

startGame = (triviaData) => {
  console.log(triviaData)
  const questions = triviaData.map(triviaItem => {
    return triviaItem.question
  })
  const keys = ["a", "b", "c", "d"]
  const answers = [...triviaData[0].incorrect_answers, triviaData[0].correct_answer]
  const answerKey = keys.reduce((answerList, key, i) => {
    answerList[key] = answers[i]
    return answerList
  }, {})
  this.setState({data: triviaData, questions: questions, currentQuestion: questions[0], correctAnswer: triviaData[0].correct_answer, answers: answerKey, gameOver: false})
}

onSubmit = (answer) => {
  const questionIndex = this.state.questions.indexOf(this.state.currentQuestion)
  if(this.state.questions[questionIndex + 1] === undefined) {
    this.setState({gameOver: true})
    return
  }
  const question = this.generateNewQuestion(questionIndex)
  if(this.state.answers[answer] === this.state.correctAnswer) {
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
        {this.state.gameOver && <Results startGame={this.startGame} numQuestions={this.state.questions.length} incorrectAnswers={this.state.incorrectAnswers} triviaData={this.state.data}/>}
     </main>
    </>
  )
}
}

export default App;
