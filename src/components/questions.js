import React, { Component } from 'react';
import { connect } from 'react-redux';
import Choices from './choices.js';

class Questions extends Component {
  renderQuestions() {
    return this.props.questions.map((question, index) => {
      return (
        <li
          key={index}>
          {question.question}
          <Choices choices={question.choices}/>
        </li>
      );
    })
  }

  render() {
    //console.log(this.props.questions);
    return (
      <form>
        <ul>
        {this.renderQuestions()}
        </ul>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    questions: state.questions
  }
}

export default connect(mapStateToProps)(Questions);
