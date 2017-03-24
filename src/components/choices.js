import React, { Component } from 'react';
import { updateScore } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Choices extends Component {
  handleChange(choice) {
    console.log(choice.score);
    this.props.updateScore(this.props.score + choice.score)
  }

  render() {
    const choices = this.props.choices.map((choice, index) => {
      //console.log(choice);
      return (
        <p key={index}>
          <input type="checkbox" value={index} onChange={this.handleChange.bind(this, choice)} />
          {choice.choice}
        </p>
      )
    });

    return (
      <div>
        {choices}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    score: state.score
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateScore: updateScore }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Choices);
