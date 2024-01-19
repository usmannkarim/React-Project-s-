import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(function () {
    getQuestions();
  }, []);

  function getQuestions() {
    fetch("https://the-trivia-api.com/v2/questions")
      .then((res) => res.json())
      .then((res) => { 
        return res.map(function(item) {
          item.options = [...item.incorrectAnswers, item.correctAnswer];
          item.options = shuffle(item.options);
        });
      });
  }

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  function next() {
    if (selectedOption === null) {
      alert('Please select an option before moving to the next question');
      return;
    }
    if (selectedOption === questions[currentIndex].correctAnswer) {
      setScore(score + 2);
    }
    setSelectedOption(null);
    setCurrentIndex(currentIndex + 1);
  }
  

  function restart() {
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
  }

  if (!questions.length) {
    return <div>Loading...</div>;
  }

  const quizEnded = currentIndex === questions.length;
  const currentQuestion = questions[currentIndex];

  return (
    <div className="App">
      <div className="App-header">
        {!quizEnded ? (
          <div className="questions" key={currentIndex}>
            <h2>
              Q{currentIndex + 1}) {currentQuestion.question.text}
            </h2>
            {currentQuestion.options.map(function (item, index) {
              return (
                <div key={index}>
                  <input
                    name={`q${currentIndex}`}
                    type="radio"
                    value={item}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  {item}
                </div>
              );
            })}
            <button onClick={next}>Next</button>
          </div>
        ) : (
          <div className="result">
            <h2>Result :</h2>
            <h3>{score}/20</h3>
            <button onClick={restart}>Restart</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
