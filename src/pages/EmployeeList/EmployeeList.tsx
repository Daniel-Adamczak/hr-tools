import React, { useState, useEffect } from 'react';
import { SearchBar } from './components/SearchBar';
import { EmployeesTable } from './components/EmployeesTable';
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
  birthDate: string;
  street: string;
  city: string;
  postalCode: string;
  salary: number;
  status: 'Employed' | 'On Leave' | 'Fired';
  phoneNumber: string;
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
  let sectionContents:React.ReactNode;
  if(employees.length>0){
   sectionContents =    
      [<SearchBar />, <EmployeesTable employees={employees} />]      
    }
    else if(employees.length===0){
       sectionContents =   
      <div>No employees found.</div>    
    }
    else if(error)
    {
       sectionContents =   
      <div>There was an error fetching employees data: {error}</div>    
    }

  return <Section>{sectionContents}</Section>;
};
