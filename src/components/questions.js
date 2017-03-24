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
        <div className="modal-container" style={{height: 200}}>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.setState({ show: true})}
        >
          See Results
        </Button>

        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.setState({ show: false})}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
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
