import React from 'react';
import { EmployeeRow } from './EmployeeTable/EmployeeRow';
import { Employee } from '../EmployeeList';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 2px solid gray;
`;

const Th = styled.th`
  background-color: #006999;
  color: white;
  text-align: left;
  padding: 10px;
`;

const Td = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

interface EmployeeTableProps {
  employees: Employee[];
}

export const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => {
  return (
    <Table>
      <Th>ID</Th>
      <Th>Imię</Th>
      <Th>Nazwisko</Th>
      <Th>Pensja</Th>
      <Th>Status</Th>
      <tbody>
        {employees.map((employee) => (
          <EmployeeRow key={employee.id} employee={employee} />
        ))}
      </tbody>
    </Table>
  );
};
