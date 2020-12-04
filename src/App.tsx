// src\App.tsx

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Answer from "./components/answer.component";
import CustomButton from "./components/custom-button.component";
import Header from "./components/header.component";
import Sentence from "./components/sentence.component";
import Layout from "./components/layout.component";

import { RootStateType } from "./store/index";
import assembleSentence from "./helpers/assemble-sentence";
import formatQuestion from "./helpers/format-question";
import colors from "./constants/colors";
import {
  setAnswerAction,
  newSentenceAction,
  ANSWER_TYPE,
} from "./store/actions/questions.actions";

const App = () => {
  const question = useSelector(
    (state: RootStateType) => state.questions[0].question
  );
  return (
    <div data-test="component-app">
      <span data-test="test-span">{formatQuestion(question)}</span>
    </div>
  );
};

// const App = () => {
//   const [questionIndex, setQuestionIndex] = React.useState(0);
//   const [isQuestionsOver, setIsQuestionsOver] = React.useState(false);
//   const [answerValue, setAnswerValue] = React.useState("");

//   const { question, answer } = useSelector((state: RootStateType) => {
//     return state.questions[questionIndex];
//   });
//   const sentence = useSelector((state: RootStateType) => {
//     return assembleSentence(state.questions);
//   });

//   React.useEffect(() => {
//     setAnswerValue(answer);
//   }, [questionIndex, answer]);

//   const dispatch = useDispatch();

//   const handleNewSentence = () => {
//     dispatch(newSentenceAction());
//     setQuestionIndex(0);
//     setIsQuestionsOver(false);
//     setAnswerValue("");
//   };

//   const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { value } = event.target;
//     setAnswerValue(value);
//   };

//   const handleIncrementQuestion = () => {
//     dispatch(
//       setAnswerAction(question.toUpperCase() as ANSWER_TYPE, answerValue)
//     );

//     if (questionIndex >= 3) {
//       setIsQuestionsOver(true);
//       setAnswerValue("");
//     } else {
//       setQuestionIndex((prevState) => prevState + 1);
//     }
//   };

//   const handleDecrementQuestion = () => {
//     if (questionIndex <= 0) return;
//     if (isQuestionsOver && questionIndex >= 3) return setIsQuestionsOver(false);

//     setIsQuestionsOver(false);
//     setQuestionIndex((prevState) => prevState - 1);
//   };
//   return (
//     <Layout>
//       <AppStyled>
//         <div data-test="component-app">
//           <Header
//             onStartNewSentence={handleNewSentence}
//             label={"New Sentence"}
//             primaryColor={colors.red}
//             secondaryColor={"white"}
//           />
//           <Answer
//             question={formatQuestion(question)}
//             answer={answerValue}
//             isNotRendered={isQuestionsOver}
//             onHandleChange={handleAnswerChange}
//           />
//           <div className="actions-container">
//             <CustomButton
//               label={"Next Question"}
//               isNotRendered={isQuestionsOver}
//               isInvalidInput={!answerValue}
//               onHandleClick={handleIncrementQuestion}
//               primaryColor={colors.purple}
//               secondaryColor={"white"}
//             />
//             <CustomButton
//               label={"Go Back"}
//               isNotRendered={questionIndex <= 0}
//               onHandleClick={handleDecrementQuestion}
//               primaryColor={colors.lightGray}
//               secondaryColor={colors.purple}
//             />
//           </div>
//           <Sentence sentence={sentence} isNotComplete={!isQuestionsOver} />
//         </div>
//       </AppStyled>
//     </Layout>
//   );
// };

export default App;

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
  max-width: 800px;

  margin: 0 auto;
  padding: 2rem;

  .actions-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;

    div:first-child {
      margin-bottom: 0.5rem;
    }
  }

  @media (min-width: 40rem) {
    padding: 2rem 6rem;
  }
`;
