import React from 'react';
import Header from '../layout/Header';
import GuideSteps from '../layout/GuideSteps';
import SectionNarrow from '../layout/SectionNarrow';

function Guide() {
  return (
    <div className="full-height__wrapper">
      <Header></Header>

      <div className="full-height">
        <SectionNarrow>
          <GuideSteps></GuideSteps>
        </SectionNarrow>

      </div>

      <footer>Italian Citizenship Guide</footer>
    </div>
  )
}
export default Guide;
