import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  padding: 10px;
  gap: 5px;
  display: flex;
  margin: auto;
  border-bottom:2px solid
`;
const Span = styled.span`
  padding: 10px;
  gap: 5px;
  display: flex;
  width: 150px;
`;

interface InputProps {
  title: string;
  value: string | number;
  isReadOnly: boolean;
  onChange?: () => string;
}

export const Input: React.FC<InputProps> = ({
  title,
  value,
  isReadOnly,
  onChange,
}) => {
  return (
    <Label htmlFor=''>
      <Span>{title}</Span>
      <input
        type='text'
        value={value}
        readOnly={isReadOnly}
        onChange={onChange}
      />
    </Label>
  );
};
