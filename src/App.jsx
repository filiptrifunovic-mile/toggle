import { useEffect, useState } from "react";
import "./App.css";
import data from "./data";
import Question from "./Question";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>questions and answers</h3>
        <section className="info">
          {questions.map((question) => (
            <Question key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
