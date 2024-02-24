import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  padding: 10px;
  gap: 5px;
  display: flex;
  margin: auto;
  border-bottom: 2px solid;
`;
const Span = styled.span`
  padding: 10px;
  gap: 5px;
  display: flex;
  width: 150px;
`;

interface InputProps {
  label: string;
  value: string | number;
  isReadOnly: boolean;
  onChange?: () => string;
}

export const LabeledInput: React.FC<InputProps> = ({
  label,
  value,
  isReadOnly,
  onChange,
}) => {
  return (
    <Label htmlFor=''>
      <Span>{label}</Span>
      <input
        type='text'
        value={value}
        readOnly={isReadOnly}
        onChange={onChange}
      />
    </Label>
  );
};
