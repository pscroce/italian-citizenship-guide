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
            <p className="answer">As long as you are not earning income in Italy, you do not need to pay taxes in Italy.</p>
          </div>

          <div className="question__wrapper">
            <p className="question-title">Would I have to serve in the military in Italy?</p>
            <p className="answer">Italy no longer has mandatory military service.</p>
          </div>

          <div className="question__wrapper">
            <p className="question-title">How much does it cost to apply for citizenship?</p>
            <p className="answer">The application itself costs 300 Euros. Finding, translating, certifying, and getting apostilles for your required documents will almost certainly cost more than that but will vary depending on how many documents you will need. It will likely cost at least a couple thousand dollars.</p>
          </div>

          <div className="question__wrapper">
            <p className="question-title">How long does it take to apply?</p>
            <p className="answer">In short, several years. You must apply through the Italian consulate in your jurisdiction (see consulate website to find yours) consulates have varying wait times, usually between 18 and 24 months. Gathering your documents can take a few years depending on how many documents you will need and how easily you are able to attain them. In most cases, it makes sense to book an appointment first then start gathering docuemnts since the wait time for an appointment is so long.</p>
          </div>

          <div className="question__wrapper">
            <p className="question-title">Will I be able to vote in Italy?</p>
            <p className="answer">Yes! Once you receive Italian citizenship, you are a full citizen with all the rights of a citizen, including the right to vote.</p>
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
