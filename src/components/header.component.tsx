import React from "react";

interface HeaderProps {
  onStartNewSentence: () => void;
}

const Header: React.FC<HeaderProps> = ({ onStartNewSentence }) => {
  return (
    <header>
      <h1>Sentence Builder</h1>
      <button onClick={onStartNewSentence}>New Sentence</button>
    </header>
  );
};

export default Header;
