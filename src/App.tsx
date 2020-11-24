import "./App.css";
import Answer from "./components/answer.component";
import DirectionButton from "./components/direction-button.component";
import Header from "./components/header.component";
import Sentence from "./components/sentence.component";

function App() {
  return (
    <>
      <Header />
      <Answer />
      <div>
        <DirectionButton />
        <DirectionButton />
      </div>
      <Sentence />
    </>
  );
}

export default App;
