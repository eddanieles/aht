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
        <p key={index} className="row">
          <span className="input-group-addon">
            <input type="checkbox" onChange={this.handleChange.bind(this, choice)} />
            {choice.choice}
          </span>
        </p>
      )
    });

    return (
      <div class="col-lg-6">
        <div className="input-group">
          {choices}
        </div>
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
