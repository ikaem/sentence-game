// src\components\answer.component.tsx

interface AnswerProps {
  isNotRendered: boolean;
  question: string;
  answer: string;
  onHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Answer: React.FC<AnswerProps> = ({
  isNotRendered,
  question,
  answer,
  onHandleChange,
}) => {
  const formattedQuestion = question[0]
    .toUpperCase()
    .concat(question.slice(1))
    .concat("?");
  if (isNotRendered) return null;
  return (
    <section data-test="component-answer">
      <h2>Answer questions to create your sentence</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="answer">{formattedQuestion}</label>
        <input
          type="text"
          id="answer"
          name="answer"
          value={answer}
          onChange={onHandleChange}
          placeholder={"Please provide an answer"}
          required
        />
      </form>
    </section>
  );
};

export default Answer;
