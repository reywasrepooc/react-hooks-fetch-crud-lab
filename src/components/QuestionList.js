import React,{ useEffect, useState} from "react"
import QuestionItem from "./QuestionItem"

const QuestionAPI = "http://localhost:4000/questions"

function QuestionList() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch(QuestionAPI)
    .then((r) => r.json())
    .then((questions) => {
      setQuestions(questions)
    })
  }, [])

  const quizItems = questions.map((q) => (
    <QuestionItem 
    key={q.id}
    question={q}
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
