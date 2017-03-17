import React, { Component } from 'react';

import Header from './components/header';
import Questions from './components/questions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Questions />
      </div>
    );
  }
}

export default App;
