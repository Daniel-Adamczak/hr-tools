import React, { SetStateAction } from 'react';
import styled from 'styled-components';

const SortBtn = styled.button`
  padding: 4px;
  border: none;
  margin: 0 2px;
  font-size: 1.3rem;
  font-weight: bold;
  background: inherit;
  &:hover {
    text-shadow: 0px 0px 5px;
    color: #55bb55;
    transform: scale(1.3);
  }
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

interface SortButtonsProps {
  employees: Employee[];
  setEmployeesToDisplay: (value: Employee[]) => void;
  sortBy: 'id' | 'name' | 'lastName' | 'salary' | 'status';
}

export const SortButtons: React.FC<SortButtonsProps> = ({
  employees,
  setEmployeesToDisplay,
  sortBy,
}) => {
  const HandleSortEmployees = (ifAscending: boolean) => {
    const sortedEmployees = [...employees].sort((a, b) => {
      let result = 0;
      if (sortBy === 'salary' || sortBy === 'id') {
        result = Number(a[sortBy]) - Number(b[sortBy]);
      } else {
        result = a[sortBy].toString().localeCompare(b[sortBy].toString());
      }
      return ifAscending ? result : -result;
    });
    setEmployeesToDisplay(sortedEmployees);
  };
  return (
    <>
      <SortBtn onClick={() => HandleSortEmployees(true)}>↑</SortBtn>
      <SortBtn onClick={() => HandleSortEmployees(false)}>↓</SortBtn>
    </>
  );
};
