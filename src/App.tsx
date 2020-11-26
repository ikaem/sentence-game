// src\App.tsx

import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Answer from "./components/answer.component";
import DirectionButton from "./components/direction-button.component";
import Header from "./components/header.component";
import Sentence from "./components/sentence.component";

import { RootStateType } from "./store/index";
import assembleSentence from "./helpers/assemble-sentence";
import { setAnswerAction, ANSWER_TYPE } from "./store/actions/questions.actions";

const App = () => {
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const [isQuestionsOver, setIsQuestionsOver] = React.useState(false);
  const [answerValue, setAnswerValue] = React.useState("");

  const { question, answer } = useSelector((state: RootStateType) => {
    return state.questions[questionIndex];
  });
  const sentence = useSelector((state: RootStateType) => {
    return assembleSentence(state.questions);
  });

  React.useEffect(() => {
    setAnswerValue(answer);
  }, [questionIndex]);

  const dispatch = useDispatch();

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setAnswerValue(value);
  };

  const handleIncrementQuestion = () => {
    dispatch(
      setAnswerAction(question.toUpperCase() as ANSWER_TYPE, answerValue)
    );

    if (questionIndex >= 3) {
      setIsQuestionsOver(true);
      setAnswerValue("");
    } else {
      setQuestionIndex((prevState) => prevState + 1);
    }
  };

  const handleDecrementQuestion = () => {
    if (questionIndex <= 3) setIsQuestionsOver(false);
    if (questionIndex <= 0) return;
    setQuestionIndex((prevState) => prevState - 1);
  };
  return (
    <div data-test="component-app">
      <p data-test="test-paragraph">{question}</p>
      <Header />
      <Answer
        question={question}
        answer={answerValue}
        isNotRendered={isQuestionsOver}
        onHandleChange={handleAnswerChange}
      />
      <div>
        <DirectionButton
          label={"Go Back"}
          isNotRendered={questionIndex <= 0}
          onNavigateQuestions={handleDecrementQuestion}
        />
        <DirectionButton
          label={"Next Question"}
          isNotRendered={isQuestionsOver}
          isInvalidInput={!answerValue}
          onNavigateQuestions={handleIncrementQuestion}
        />
      </div>
      <Sentence sentence={sentence} isNotComplete={!isQuestionsOver} />
    </div>
  );
};

export default App;
