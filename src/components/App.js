import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";


const QuestionAPI = "http://localhost:4000/questions"


function App() {
  const [page, setPage] = useState("List")
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch(QuestionAPI)
    .then(r => r.json())
    .then(data => setQuestions(data))
  }, [])

  const deleteQuestion = (id) => {
    
    const updatedQuestionsList = questions.filter(question => question.id !== id)
    fetch(`${QuestionAPI}/${id}`, {
      method: "DELETE"
    })
    .then(setQuestions(updatedQuestionsList))
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm setQuestions={setQuestions} questions={questions}/> : <QuestionList setQuestions={setQuestions} questions={questions} deleteQuestion={deleteQuestion} />}
    </main>
  );
}

export default App;
