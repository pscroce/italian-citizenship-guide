import React from 'react';

function QuestionWrapper(props) {
  return (
    <div className="question__wrapper">
      <h2 className="no-margin-bottom">{props.questionCopy}</h2>
      <p className="description">{props.descriptionCopy}</p>
      <div className="question">
      {props.children}
      </div>
    </div>

  )
}
export default QuestionWrapper;

// import QuestionWrapper from './QuestionWrapper';
