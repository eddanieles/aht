import React, { Component } from 'react';
import { connect } from 'react-redux';

class Questions extends Component {
  renderQuestions() {
    return this.props.questions.map((question, index) => {
      return (
        <li
          key={index}>
          {question.question}
          {question.choices.map((choice, index) => {
            //console.log(choice);
            return <p key={index}><input type="checkbox" />{choice}</p>
          })}
        </li>
      );
    })
  }

  render() {
    //console.log(this.props.questions);
    return (
      <div>
        <ul>
        {this.renderQuestions()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    questions: state.questions
  }
}

export default connect(mapStateToProps)(Questions);
