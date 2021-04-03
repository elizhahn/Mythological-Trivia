import React, { Component } from "react";
import "./Answer.css";

class Answer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answer: '',
      isCorrect: false,
      invalid: false,
    }
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value})
   
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const validAnswers = ["a", "b", "c", "d", "A", "B", "C", "D"]
    if(validAnswers.includes(this.state.answer)) {
      this.setState({answer: "", invalid: false})
      this.props.onSubmit(this.state.answer); 
   } else {
     this.setState({invalid: true})
   }
  }

  render() { 
    console.log(this.state)
    return (
      <form className="answer-container" onSubmit={this.handleSubmit}>
         {this.state.invalid && <p>Please choose A, B, C, or D</p>}
        <label>Your Answer</label>
        <input className="answer-input" type="text" value={this.state.answer} name="answer" onChange={this.handleChange}/>
        <button type="submit" className="answer-button">Check Answer</button>
      </form>
    )
  }
  
}

export default Answer; 