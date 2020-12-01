// src\components\sentence.component.tsx

import styled from "styled-components";

// interface SentenceProps {
//   sentence: string;
//   isNotComplete: boolean;
// }

interface SentenceProps {
  sentence: string;
  isNotComplete: boolean;
}

// const Sentence: React.FC<SentenceProps> = ({ sentence, isNotComplete }) => {
//   return (
//     <section data-test="component-sentence">
//       <h2>Your sentence:</h2>
//       <p>
//         <span data-test="sentence-span">{sentence}</span>
//         {isNotComplete && <span data-test="elipsis-span">...</span>}
//       </p>
//     </section>
//   );
// };

const Sentence: React.FC<SentenceProps> = ({ sentence, isNotComplete }) => {
  return (
    <SentenceStyled data-test="component-sentence">
      <h2>Your sentence:</h2>
      <p>
        <span className="sentence-actual" data-test="sentence-span">
          {sentence}
        </span>
        {isNotComplete && (
          <span className="sentence" data-test="elipsis-span">
            ...
          </span>
        )}
      </p>
    </SentenceStyled>
  );
};

export default Sentence;

const SentenceStyled = styled.section`
  margin-top: 3rem;
  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
    text-decoration: underline;
  }

  p {
    font-size: 3rem;
    color: var(--purple);
    font-weight: 700;
    line-height: 150%;
  }
`;
