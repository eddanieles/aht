import React, { Component } from 'react';
import { connect } from 'react-redux';
import Choices from './choices';
import Results from './results';

class Questions extends Component {

  renderQuestions() {
    return this.props.questions.map((question, index) => {
      return (
        <div  key={index} className="row">
          <li className="list-group-item col-md-8 col-md-offset-2">
            {question.question}
            <Choices choices={question.choices}/>
          </li>
        </div>
      );
    })
  }

  render() {
    //console.log(this.props.questions);
    return (
      <div className="container">
      <form>
        <p>Answer the questions below, then check the results to find out.</p>
        <ul className="list-group">
        {this.renderQuestions()}
        </ul>
        <Results score={this.props.score} />
      </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    questions: state.questions,
    score: state.score
  }
}

export default connect(mapStateToProps)(Questions);
