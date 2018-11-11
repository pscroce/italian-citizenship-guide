import React, { Component } from 'react';
import Guide from './components/Guide';
import Header from './components/Header';
import Form from './components/Form';
import './App.css';

class App extends Component {

  render() {


    return (
      <div className="App">
        <Header></Header>
        <body>

          <Form></Form>

          <Guide></Guide>

        </body>
        <footer>Italian Citizenship Guide</footer>
      </div>
    );
  }
}

export default App;
