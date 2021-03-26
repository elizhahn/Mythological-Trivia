import React, { Component } from "react";
import "./Answer.css";

class Answer extends Component {
  constructor() {
    super()
    this.state = {
      answer: '',
    }
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value})
  }

  handleSubmit = (event) => {
    
  }

  render() {
    console.log(this.state); 
    return (
      <form className="answer-container" onSubmit={this.handleSubmit}>
        <label>Your Answer</label>
        <input className="answer-input" type="text" value={this.state.answer} name="answer" onChange={this.handleChange}/>
        <button type="submit" className="answer-button">Check Answer</button>
      </form>
    )
  }
  
}

export default Answer; 