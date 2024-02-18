import React from 'react';
import { EmployeeRow } from './EmployeeTable/EmployeeRow';
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

interface Employee {
  id: string;
  name: string;
  lastName: string;
  birthDate: string;
  street: string;
  city: string;
  postalCode: string;
  salary: number;
  status: 'Employed' | 'On Leave' | 'Fired';
  phoneNumber: string;
}

interface EmployeeTableProps {
  employees: Employee[];
}

export const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => {
  const employeesTableContent = employees.map((employee) => (
    <EmployeeRow key={employee.id} employee={employee} />
  ));

  return (
    <Table>
      <Th>ID</Th>
      <Th>Imię</Th>
      <Th>Nazwisko</Th>
      <Th>Pensja</Th>
      <Th>Status</Th>
      <tbody>{employeesTableContent}</tbody>
    </Table>
  );
};
