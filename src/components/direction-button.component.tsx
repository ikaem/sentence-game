// src\components\direction-button.component.tsx

import React from "react";

interface DirectionButtonProps {
  label: string;
  isNotRendered: boolean;
  onNavigateQuestions: () => void;
  isInvalidInput?: boolean;
}

const DirectionButton: React.FC<DirectionButtonProps> = ({
  label,
  isNotRendered,
  onNavigateQuestions,
  isInvalidInput,
}) => {
  if (isNotRendered) return null;
  return (
    <button
      data-test="component-direction-button"
      onClick={onNavigateQuestions}
      disabled={isInvalidInput}
    >
      {label}
    </button>
  );
};

export default DirectionButton;
