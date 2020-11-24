import React from "react";
import DirectionButton from "./direction-button.component";

const Answer = () => {
  return (
    <section data-test="component-answer">
      <h2>Answer questions to create your sentence</h2>
      <form>
        <label htmlFor="answer">Who</label>
        <input type="text" id="answer" name="answer" />
      </form>
    </section>
  );
};

export default Answer;
