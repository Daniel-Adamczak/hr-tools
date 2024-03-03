import React, { SetStateAction } from 'react';
import { EmployeeRow } from './EmployeeTable/EmployeeRow';
import styled from 'styled-components';
import { SortButtons } from './SortButtons';

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
  setEmployeesToDisplay:(value: Employee[]) => void;
}

export const EmployeesTable: React.FC<EmployeeTableProps> = ({ employees,setEmployeesToDisplay }) => {
  const employeesTableContent = employees.map((employee) => (
    <EmployeeRow key={employee.id} employee={employee} />
  ));

 

  return (
    <Table>
      <thead>
        <tr>
          <Th>
            ID <SortButtons employees={employees} setEmployeesToDisplay={setEmployeesToDisplay} sortBy='id'/>
          </Th>
          <Th>First name <SortButtons employees={employees} setEmployeesToDisplay={setEmployeesToDisplay} sortBy='name'/></Th>
          <Th>Last name <SortButtons employees={employees} setEmployeesToDisplay={setEmployeesToDisplay} sortBy='lastName'/></Th>
          <Th>Salary <SortButtons employees={employees} setEmployeesToDisplay={setEmployeesToDisplay} sortBy='salary'/></Th>
          <Th>Status <SortButtons employees={employees} setEmployeesToDisplay={setEmployeesToDisplay} sortBy='status'/></Th>
          <Th>Details</Th>
        </tr>
      </thead>

      <tbody>{employeesTableContent}</tbody>
    </Table>
  );
};
