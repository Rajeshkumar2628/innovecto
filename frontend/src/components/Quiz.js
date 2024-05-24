import React, { useState, useEffect } from "react";
import questions from "./QuizQues";
// import './style.css'


function shuffle(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default function QuizQuestions() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questionText, setQuestionText] = useState("");
  const [choices, setChoices] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const[choice,setChoice]=useState('')

  const startQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowNextButton(false);
    showQuestion(0);
  };

  const showQuestion = (index) => {
    resetState();
    let currentQuestion = questions[index];
    let questionNumber = index + 1;
    setQuestionText(`${questionNumber}. ${currentQuestion.question}`);
    const shuffledChoices = shuffle(currentQuestion.choices);
    setChoices(shuffledChoices);
    setCorrectAnswer(currentQuestion.choices.findIndex((choice) => choice.answer === true));
  };  

  const resetState = () => {
    setChoices([]);
    setCorrectAnswer(null);
    setSelectedAnswer(null);
  };

  const selectChoice = (isCorrect, index) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    setSelectedAnswer(index);
    setShowNextButton(true);
  };

  const handleNextButton = () => {
    setShowNextButton(false);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

    if (currentQuestionIndex < questions.length - 1) {
      showQuestion(currentQuestionIndex + 1);
    } else {
      // If it's the last question, show the score
      showScore();
      if(score>7){
        setChoice('You are good in java coding you can select Java Stack Developer')
      } else if(score>5){
        setChoice('You are good in java coding you can select python Stack Developer')
      } else{
        setChoice('You can select Digital Marketing')
      }
      console.log({choice});
    }
  };

  const showScore = () => {
    resetState();
    setQuestionText(`You scored ${score} out of ${questions.length}! \n ${choice}`);
  };

  const showPreference=()=>{
    if(score>7){
      setChoice('You are good in java coding you can select Java Stack Developer')
    } else if(score>5){
      setChoice('You are good in java coding you can select python Stack Developer')
    } else{
      setChoice('You can select Digital Marketing')
    }
  }

  useEffect(() => {
    startQuiz();
  }, []);

  return (
    <div className="app">
      <h1>Simple Quiz</h1>
      <div className="quiz">
        <h2 id="question">{questionText}</h2>
        <div id="answer-buttons">
          {choices.map((choice, index) => (
            <button
              key={index}
              className={`btn ${selectedAnswer === index ? (choice.answer ? "correct bg-success" : "incorrect bg-danger") : ""}`}
              onClick={() => selectChoice(choice.answer, index)}
              aria-label={choice.text}
              disabled={selectedAnswer !== null}
            >
              {choice.text}
            </button>
          ))}
        </div>
        { showNextButton && (
          <button id="next-button" onClick={handleNextButton}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}