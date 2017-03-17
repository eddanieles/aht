import React, { Component } from 'react';

class Choices extends Component {
  render() {
    const choices = this.props.choices.map((choice, index) => {
      //console.log(choice);
      return (
        <p key={index}>
          <input type="checkbox" />
          {choice}
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
