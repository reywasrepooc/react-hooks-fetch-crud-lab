import React from "react"
import QuestionItem from "./QuestionItem"


function QuestionList({questions, setQuestions, deleteQuestion}) {

  // const QuestionAPI = "http://localhost:4000/questions"
  

  // const updateAnswer = (id, correctIndex) => {
  //   fetch(`${QuestionAPI}/${id}`, {
  //     method: "PATCH",
  //     headers: {"Content-Type" : " application/json" },
  //     body: JSON.stringify (correctIndex)
  //   })
   
  //   .then((response) => response.json())
  //   .then((deleteQuestId) => {
  //     deleteQuestion = questions.map((q) => {
  //     if (q.id === deleteQuestId)
  //     return deleteQuestId
  //     return q
  //    }) 
  //   setQuestions(deleteQuestion)
  //   })
  // }
 
  const quizItems = questions.map(q => (
    <QuestionItem 
    key={q.id}
    question={q}
    deleteQuestion={deleteQuestion}
    // onAnswerChange={updateAnswer}
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
