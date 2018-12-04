import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import SectionNarrow from '../layout/SectionNarrow';

function Faq() {
  return (
    <div className="full-height__wrapper">
      <Header></Header>

      <div className="full-height">
        <SectionNarrow>

          <div className="question__wrapper">
            <p className="question-title">Would I have to give up my current citizenship(s)?</p>
            <p className="answer">Citizens of the USA, Australia, UK, Canada, and many other countries have agreements in place allowing dual citizenship. </p>
          </div>

          <div className="question__wrapper">
            <p className="question-title">Would I have to pay taxes in Italy?</p>
            <p className="answer"></p>
          </div>

          <div className="question__wrapper">
            <p className="question-title">Would I have to serve in the military in Italy?</p>
            <p className="answer"></p>
          </div>

          <div className="question__wrapper">
            <p className="question-title">How much does it cost to apply for citizenship?</p>
            <p className="answer"></p>
          </div>

          <div className="question__wrapper">
            <p className="question-title">How long does it take to apply?</p>
            <p className="answer"></p>
          </div>

          <div className="question__wrapper">
            <p className="question-title">Will I be able to vote in Italy?</p>
            <p className="answer"></p>
          </div>

          <div className="question__wrapper">
            <p className="question-title"></p>
            <p className="answer"></p>
          </div>


        </SectionNarrow>

      </div>
      <Footer></Footer>
    </div>
  )
}
export default Faq;
