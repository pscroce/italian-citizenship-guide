import React, { Component } from 'react';
import Guide from './components/Guide';
import Header from './components/Header';
import Form from './components/Form';
import SectionNarrow from './components/SectionNarrow';

import './App.css';

class App extends Component {

  render() {


    return (
      <div className="App">
        <Header></Header>

        <div className="full-height">
          <SectionNarrow>
            <Form></Form>
          </SectionNarrow>

        </div>

        <footer>Italian Citizenship Guide</footer>
      </div>
    );
  }
}

export default App;
