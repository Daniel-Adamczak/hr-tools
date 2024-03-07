// Assuming Employee is imported or defined in this file
import React from 'react';
import { Employee } from '../../EmployeeList';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Tr = styled.tr`
  background-color: #009879;
  color:#ececec;
  font-weight:semibold;
 max-width:90vw;
 margin:auto;
  padding: 5px;
  &:nth-child(odd) {
    background-color: #22ba9a;
  }
`;
const Td = styled.td`
  padding: 5px;
  border-bottom: 1px solid #ddd;
  text-align: center;
`;

interface EmployeeRowProps {
  employee: Employee;
}

export const EmployeeRow: React.FC<EmployeeRowProps> = ({ employee }) => {
  return (
    <Tr>
      
      <Td>{employee.name}</Td>
      <Td>{employee.lastName}</Td>
      {window.innerWidth>=600 &&[<Td>{employee.salary}</Td>,
      <Td>{employee.status}</Td>,
      <Td>{employee.id}</Td>]}
      <Td>
        <Link to={`/${employee.id}`}>Show</Link>
      </Td>
    </Tr>
  );
};
