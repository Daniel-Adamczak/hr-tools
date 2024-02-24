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
  &:last-child {
    text-align: center;
  }
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

export const EmployeesTable: React.FC<EmployeeTableProps> = ({ employees }) => {
  const employeesTableContent = employees.map((employee) => (
    <EmployeeRow key={employee.id} employee={employee} />
  ));

  return (
    <Table>
      <thead>
        <tr>
          <Th>ID</Th>
          <Th>First name</Th>
          <Th>Last name</Th>
          <Th>Salary</Th>
          <Th>Status</Th>
          <Th>Details</Th>
        </tr>
      </thead>

      <tbody>{employeesTableContent}</tbody>
    </Table>
  );
};
