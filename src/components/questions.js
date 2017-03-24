import React, { Component } from 'react';
import { connect } from 'react-redux';
import Choices from './choices.js';
import { Button, Modal } from 'react-bootstrap';

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

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
    const resultText = this.props.score > 0 ?
      "Unfortunatly based on the results you are an Ass Hole" :
      "You are not an Ass Hole, Congratulations!";
    return (
      <div className="container">
      <form>
        <p>Answer the questions below, then check the results to find out.</p>
        <ul className="list-group">
        {this.renderQuestions()}
        </ul>
        <div className="modal-container" style={{height: 200}}>
          <Button
            bsStyle="primary"
            bsSize="large"
            onClick={() => this.setState({ show: true})}>
            See Results
          </Button>

          <Modal
            show={this.state.show}
            onHide={close}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Header>
              <Modal.Title id="contained-modal-title">Results</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Score: {this.props.score}
              <p>{resultText}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => this.setState({ show: false})}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
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
