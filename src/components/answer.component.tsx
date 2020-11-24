// src\components\answer.component.tsx

interface AnswerProps {
  isNotRendered?: boolean;
  question: string;
  answer: string;
}

const Answer: React.FC<AnswerProps> = ({ isNotRendered, question, answer }) => {
  const formattedQuestion = question[0]
    .toUpperCase()
    .concat(question.slice(1))
    .concat("?");
  if (isNotRendered) return null;
  return (
    <section data-test="component-answer">
      <h2>Answer questions to create your sentence</h2>
      <form>
        <label htmlFor="answer">{formattedQuestion}</label>
        <input type="text" id="answer" name="answer" value={answer} />
      </form>
    </section>
  );
};

export default Answer;
