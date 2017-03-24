import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      show: false
    }
  }

  render() {
    console.log(this.state.show);
    const resultText = this.props.score > 0 ?
      "Unfortunatly based on the results you are an Ass Hole" :
      "You are not an Ass Hole, Congratulations!";
    return (
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
            {/* Score: {this.props.score} */}
            <p>{resultText}</p>
            {this.props.score > 0 ? <i className="glyphicon glyphicon-thumbs-down"></i> : <i className="glyphicon glyphicon-thumbs-up"></i>}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.setState({ show: false})}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
