// src\components\direction-button.component.tsx

import React from "react";
import styled from "styled-components";

// interface CustomButtonProps {
//   label: string;
//   onHandleClick: () => void;
//   isNotRendered?: boolean;
//   isInvalidInput?: boolean;
//   primaryColor: string;
//   secondaryColor: string;
// }

interface CustomButtonProps {
  label: string;
  onHandleClick: () => void;
  isNotRendered?: boolean;
  isInvalidInput?: boolean;
  primaryColor: string;
  secondaryColor: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  isNotRendered,
  label,
  onHandleClick,
  isInvalidInput,
  primaryColor,
  secondaryColor,
}) => {
  if (isNotRendered) return null;
  return (
    <div>
      <button
        data-test="component-direction-button"
        onClick={onHandleClick}
        disabled={isInvalidInput}
      >
        {label}
      </button>
    </div>
  );
};

export default CustomButton;

// const CustomButton: React.FC<CustomButtonProps> = ({
//   label,
//   isNotRendered,
//   onHandleClick,
//   isInvalidInput,
//   primaryColor,
//   secondaryColor,
// }) => {
//   if (isNotRendered) return null;
//   return (
//     <CustomButtonStyled
//       primaryColor={primaryColor}
//       secondaryColor={secondaryColor}
//     >
//       <button
//         data-test="component-direction-button"
//         onClick={onHandleClick}
//         disabled={isInvalidInput}
//       >
//         {label}
//       </button>
//     </CustomButtonStyled>
//   );
// };

// export default CustomButton;

const CustomButtonStyled = styled.div<{
  primaryColor: string;
  secondaryColor: string;
}>`
  button {
    padding: 1rem;
    width: 100%;
    font-weight: 700;
    cursor: pointer;

    color: ${(props) => props.secondaryColor};
    background-color: ${(props) => props.primaryColor};

    :disabled {
      background-color: gray;
      color: lightgray;
      cursor: not-allowed;

      :hover {
        background-color: gray;
        color: black;
        border: none;
      }
    }

    :hover {
      color: black;
      background-color: orange;
    }
  }
`;
