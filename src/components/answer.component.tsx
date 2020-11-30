// src\components\answer.component.tsx

import styled from "styled-components";

// interface AnswerProps {
//   isNotRendered: boolean;
//   question: string;
//   answer: string;
//   onHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }

interface AnswerProps {
  isNotRendered: boolean;
}

const Answer: React.FC<AnswerProps> = ({ isNotRendered }) => {
  if (isNotRendered) return null;
  return <div data-test="component-answer"></div>;
};

// const Answer: React.FC<AnswerProps> = ({
//   isNotRendered,
//   question,
//   answer,
//   onHandleChange,
// }) => {
//   if (isNotRendered) return null;
//   return (
//     <AnswerStyled>
//       <div data-test="component-answer">
//         <h2>Answer questions to create your sentence</h2>
//         <form onSubmit={(e) => e.preventDefault()}>
//           <label htmlFor="answer">{question}</label>
//           <input
//             type="text"
//             id="answer"
//             name="answer"
//             value={answer}
//             onChange={onHandleChange}
//             placeholder={"An answer, please..."}
//             required
//           />
//         </form>
//       </div>
//     </AnswerStyled>
//   );
// };

export default Answer;

const AnswerStyled = styled.section`
  margin: 1rem 0;
  h2 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  form {
    padding: 1rem 0;
    display: flex;
    flex-direction: column;

    label {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    input {
      border: 1px solid lightgray;
      font: inherit;
      font-size: 1.5rem;
      padding: 1rem;
    }
  }
`;
