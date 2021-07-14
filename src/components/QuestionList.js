import React from "react"
import QuestionItem from "./QuestionItem"


function QuestionList({ questions, deleteQuestion, setQuestions }) {
 
  const quizItems = questions.map(question => (
    <QuestionItem 
    key={question.id}
    questions={questions}
    question={question}
    deleteQuestion={deleteQuestion}
    setQuestions={setQuestions}
    />
  ))

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul> {quizItems} </ul>
    </section>
  );
}

export default QuestionList;
