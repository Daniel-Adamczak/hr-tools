import React, { useState, useEffect } from 'react';
import { SearchBar } from './components/SearchBar';
import { EmployeeTable } from './components/EmployeeTable';
import { PaginationControl } from './components/PaginationControl';

import styled from 'styled-components';

const Section = styled.section`
  padding: 20px;
  background-color: #f0f0f0;
`;

export interface Employee {
  id: string;
  name: string;
  lastName: string;
  salary: number;
  status: string;
}

export const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('http://localhost:3000/employees');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data: Employee[] = await response.json();
        setEmployees(data);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <Section>
      {employees.length > 0 ? (
        <>
          <SearchBar />
          <EmployeeTable employees={employees} />
          <PaginationControl />
        </>
      ) : (
        <div>No employees found</div>
      )}
    </Section>
  );
};
