// Assuming Employee is imported or defined in this file
import React from 'react';
import { Employee } from '../../EmployeeList';
import styled from 'styled-components';

const Tr = styled.tr`
  background-color: #009879;
  color: white;
  text-align: left;
  padding: 10px;
  &:nth-child(odd) {
    background-color: #22ba9a;
  }
`;
const Td = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

interface EmployeeRowProps {
  employee: Employee;
}

export const EmployeeRow: React.FC<EmployeeRowProps> = ({ employee }) => {
  return (
    <Tr>
      <Td>{employee.id}</Td>
      <Td>{employee.name}</Td>
      <Td>{employee.lastName}</Td>
      <Td>{employee.salary}</Td>
      <Td>{employee.status}</Td>
    </Tr>
  );
};
