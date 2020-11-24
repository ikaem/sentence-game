// src\components\sentence.component.tsx

interface SentenceProps {
  sentence: string;
  isNotComplete?: boolean;
}

const Sentence: React.FC<SentenceProps> = ({ sentence, isNotComplete }) => {
  return (
    <section data-test="component-sentence">
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
    </section>
  );
};

export default Sentence;
