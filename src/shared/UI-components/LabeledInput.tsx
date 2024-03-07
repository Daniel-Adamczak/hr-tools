import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  padding: 15px;
 

  display: flex;
  justify-content:space-between;
  margin: 5px;
 
`;
const Span = styled.span`
  padding: 5px;
  min-width: fit-content;
`;

interface InputProps {
  label: string;
  value?: string | number;
  isReadOnly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type:'text'|'checkbox'|'date'|'tel';
  checked?:boolean;
  onClick?: (event?: React.MouseEvent<HTMLInputElement>) => void;
  name?:string;
}

export const LabeledInput: React.FC<InputProps> = ({
  label,
  value,
  isReadOnly,
  onChange,
  type,
  checked,
  onClick,
  name
}) => {
  return (
    <Label >
      <Span>{label}</Span>
      <input
      
        type={type}
        value={value}
        readOnly={isReadOnly}
        onChange={onChange}
        checked={checked}
        onClick={onClick}
        name={name}
      />
    </Label>
  );
};
