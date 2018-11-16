import React from 'react';

import Header from '../layout/Header';
import Form from '../layout/Form';
import SectionNarrow from '../layout/SectionNarrow';
import '../../../src/App.css';


function Home() {
  return (
    <div className="full-height__wrapper">
      <Header></Header>

      <div className="full-height">
        <SectionNarrow>
          <Form></Form>
        </SectionNarrow>

      </div>


      <footer>Italian Citizenship Guide</footer>
    </div>
  )
}
export default Home;
