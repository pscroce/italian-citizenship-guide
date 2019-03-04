import React from 'react';

import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Form from '../layout/Form';
import SectionNarrow from '../layout/SectionNarrow';
import '../../../src/App.css';

import ReactGA from 'react-ga';



function Home() {
  ReactGA.initialize('UA-135538744-1');
  ReactGA.pageview('/');
  return (
    <div className="full-height__wrapper">
      <Header></Header>

      <div className="full-height">
        <SectionNarrow>
          <Form></Form>
        </SectionNarrow>

      </div>
      <Footer></Footer>

    </div>
  )
}
export default Home;
