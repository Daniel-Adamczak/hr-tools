import React, { useState, useEffect } from 'react';
import { SearchBar } from './components/SearchBar';
import { EmployeesTable } from './components/EmployeesTable';

import styled from 'styled-components';

const Section = styled.section`
  padding: 20px;
  background-color: #f0f0f0;
`;

export interface Employee {
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
interface queryParameterType {
  name: boolean;
  lastName: boolean;
  phoneNumber: boolean;
}

export const EmployeeList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [employeesToDisplay, setEmployeesToDisplay] = useState<Employee[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [queryParameter, setQueryParameter] = useState<queryParameterType>({
    name: false,
    lastName: false,
    phoneNumber: false,
  });

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

  useEffect(() => {
    let filteredEmployees = employees;

    if (searchQuery.trim().length > 0) {
      filteredEmployees = employees.filter((employee) => {
        return (
          (queryParameter.name &&
            employee.name
              .toLocaleLowerCase()
              .includes(searchQuery.toLocaleLowerCase().trim())) ||
          (queryParameter.lastName &&
            employee.lastName
              .toLocaleLowerCase()
              .includes(searchQuery.toLocaleLowerCase().trim())) ||
          (queryParameter.phoneNumber &&
            employee.phoneNumber.includes(searchQuery.trim()))
        );
      });
    }

    setEmployeesToDisplay(filteredEmployees);
  }, [searchQuery, employees, queryParameter]);

  let sectionContents: React.ReactNode;
  if (employeesToDisplay.length > 0) {
    sectionContents = <EmployeesTable employees={employeesToDisplay} setEmployeesToDisplay={setEmployeesToDisplay}/>;
  } else if (employeesToDisplay.length === 0) {
    sectionContents = <div>No employees found.</div>;
  } else if (error) {
    sectionContents = (
      <div>There was an error fetching employees data: {error}</div>
    );
  }

  return (
    <Section>
      {[
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          queryParameter={queryParameter}
          setQueryParameter={setQueryParameter}
        />,
        sectionContents,
      ]}
    </Section>
  );
};
