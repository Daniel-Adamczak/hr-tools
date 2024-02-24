import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LabeledInput } from '../../shared/UI-components/LabeledInput';
import { useParams } from 'react-router-dom';

const Section = styled.section`
  padding: 20px;
  background-color: #f0f0f0;
`;
const EmployeeDetailsContainer = styled.div`
  background: #d5d5d5;
  width: fit-content;
  margin: auto;
  padding: 15px;
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

export const EmployeeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [employeeData, setEmployeeData] = useState<Employee>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch(`http://localhost:3000/employees/${id}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data: Employee = await response.json();
        setEmployeeData(data);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchEmployee();
  }, []);
  let employeeDetailsContent: React.ReactNode;
  if (employeeData) {
    const labeledEmployeeInputs = Object.keys(employeeData).map((key) => {
      return (
        <LabeledInput
          key={key}
          label={key}
          value={employeeData[key as keyof Employee]}
          isReadOnly={true}
        />
      );
    });
    employeeDetailsContent = labeledEmployeeInputs;
  } else if (error) {
    employeeDetailsContent = (
      <div>There was an error while fetching employee data: {error}</div>
    );
  } else {
    employeeDetailsContent = <div>Loading data...</div>;
  }
  return (
    <Section>
      <EmployeeDetailsContainer>
        {employeeDetailsContent}
      </EmployeeDetailsContainer>
    </Section>
  );
};
