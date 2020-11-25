// src\App.tsx

import React from "react";
import { useSelector } from "react-redux";

import Answer from "./components/answer.component";
import DirectionButton from "./components/direction-button.component";
import Header from "./components/header.component";
import Sentence from "./components/sentence.component";

import { RootStateType } from "./store/index";

const App = () => {
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const { question, answer } = useSelector((state: RootStateType) => {
    return state.questions[questionIndex];
  });
  return (
    <div data-test="component-app">
      <p data-test="test-paragraph">{question}</p>
      <Header />
      <Answer
        question={"what"}
        answer={""}
        isNotRendered={false}
        onHandleChange={() => {}}
      />
      <div>
        <DirectionButton
          label={"Next Question"}
          isNotRendered={false}
          isInvalidInput={false}
          onNavigateQuestions={() => {}}
        />
        <DirectionButton
          label={"Go Back"}
          isNotRendered={false}
          onNavigateQuestions={() => {}}
        />
      </div>
      <Sentence sentence={"What is where"} isNotComplete={true} />
    </div>
  );
};

export default App;
