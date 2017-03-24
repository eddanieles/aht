import React, { Component } from 'react';

class Choices extends Component {
  handleChange(choice) {
    console.log(choice.score);
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

export default Choices;
