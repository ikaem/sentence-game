// src\components\header.component.tsx

import styled from "styled-components";

import CustomButton from "./custom-button.component";

interface HeaderProps {
  onStartNewSentence: () => void;
  label: string;
  primaryColor: string;
  secondaryColor: string;
}

const Header: React.FC<HeaderProps> = ({
  onStartNewSentence,
  label,
  primaryColor,
  secondaryColor,
}) => {
  return (
    <HeaderStyled>
      <div>
        <h1>Sentence Builder</h1>
        <CustomButton
          label={label}
          onHandleClick={onStartNewSentence}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
      </div>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  padding-bottom: 3rem;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: 2rem;
    font-weight: 400;
  }
`;
