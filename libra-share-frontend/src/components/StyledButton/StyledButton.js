import React from 'react';
import { Button } from 'react-bootstrap';
import './StyledButton.css';

const StyledButton = ({ variant, onClick, disabled, children }) => {
  return (
    <Button
      size="sm"
      onClick={onClick}
      disabled={disabled}
      className="styled-btn"
    >
      {children}
    </Button>
  );
};

export default StyledButton;
