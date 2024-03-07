import React, { useState } from 'react';
import styled from 'styled-components';
import { LabeledInput } from '../../shared/UI-components/LabeledInput';
import { v4 as uuidv4 } from 'uuid';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const Section = styled.section`
  padding: 20px;
  background-color: #f0f0f0;
`;
const EmployeeFormContainer = styled.div`
  background: #d5d5d5;
  width: fit-content;
  margin: auto;
  padding: 15px;
`;
interface validateMessagesType {
  name: string;
  lastName: string;
  birthDate: string;
  street: string;
  city: string;
  postalCode: string;
  salary: string;
  phoneNumber: string;
}

export interface Employee {
  id: string;
  name: string;
  lastName: string;
  birthDate: string;
  street: string;
  city: string;
  postalCode: string;
  salary: number;
  status: string;
  phoneNumber: string;
}

export const AddNewEmployee = () => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const navigate = useNavigate();
  const [validateMessages, setValidateMessages] = useState({
    name: '',
    lastName: '',
    birthDate: '',
    street: '',
    city: '',
    postalCode: '',
    salary: '',
    phoneNumber: '',
  });
  const [employee, setEmployee] = useState({
    id: uuidv4(),
    name: '',
    lastName: '',
    birthDate: '',
    street: '',
    city: '',
    postalCode: '',
    salary: 0,
    status: 'Employed',
    phoneNumber: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmployee((prevState) => {
      const updatedState = { ...prevState, [name]: value };
      validateEmployee(updatedState, name);
      return updatedState;
    });
  };
  const postNewEmployee = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsValid(() => {
      if (
        Object.keys(validateMessages).filter((field) => field === '').length ===
        0
      ) {
        return true;
      }
      return false;
    });
    if (isValid) {
      try {
        const response = await fetch('http://localhost:3000/employees', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(employee),
        });

        const data = await response.json();
        console.log(data);
      } catch (error: any) {
        alert(error.message);
      }
      navigate('/');

      alert('New Employee added');
    } else {
      alert('Please fill all fields  correctly before submitting the form.');
    }
  };
  const formBodyContent = Object.keys(employee).map((key) => {
    if (
      key !== 'id' &&
      key !== 'status' &&
      key !== 'birthDate' &&
      key !== 'phoneNumber'
    ) {
      return [
        <LabeledInput
          key={key}
          name={key}
          label={key.charAt(0).toLocaleUpperCase() + key.slice(1)}
          value={employee[key as keyof Employee]}
          onChange={handleInputChange}
          type={'text'}
        />,
        <span>{validateMessages[key as keyof validateMessagesType]}</span>,
      ];
    } else if (key === 'birthDate') {
      return (
        <LabeledInput
          key={key}
          name={key}
          label={key.charAt(0).toLocaleUpperCase() + key.slice(1)}
          value={employee[key as keyof Employee]}
          onChange={handleInputChange}
          type={'date'}
        />
      );
    } else if (key === 'phoneNumber') {
      return (
        <LabeledInput
          key={key}
          name={key}
          label={key.charAt(0).toLocaleUpperCase() + key.slice(1)}
          value={employee[key as keyof Employee]}
          onChange={handleInputChange}
          type={'tel'}
        />
      );
    }
  });
  const validateEmployee = (employee: Employee, name: any) => {
    if (name === 'name') {
      const regex = /^[a-zA-Z]{3,}$/;
      if (!employee.name.match(regex)) {
        setValidateMessages((prevState) => {
          const updatedState = {
            ...prevState,
            [name]:
              'Name must have at least 3 characters and include only letters',
          };
          return updatedState;
        });
      } else {
        setValidateMessages((prevState) => {
          const updatedState = { ...prevState, [name]: '' };
          return updatedState;
        });
      }
    }
    if (name === 'lastName') {
      const regex = /^[a-zA-Z]{3,}$/;
      if (!employee.lastName.match(regex)) {
        setValidateMessages((prevState) => {
          const updatedState = {
            ...prevState,
            [name]:
              'Last name must have at least 3 characters and include only letters',
          };
          return updatedState;
        });
      } else {
        setValidateMessages((prevState) => {
          const updatedState = { ...prevState, [name]: '' };
          return updatedState;
        });
      }
    }
    if (name === 'birthDate') {
      const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
      if (!employee.birthDate.match(regex)) {
        setValidateMessages((prevState) => {
          const updatedState = {
            ...prevState,
            [name]: 'birth date should be in format YYYY-MM-DD',
          };
          return updatedState;
        });
      } else {
        setValidateMessages((prevState) => {
          const updatedState = { ...prevState, [name]: '' };
          return updatedState;
        });
      }
    }
    if (name === 'street') {
      const regex = /^[A-Za-z]+(?:\s[A-Za-z]+){0,2}$/;
      if (!employee.street.match(regex)) {
        setValidateMessages((prevState) => {
          const updatedState = {
            ...prevState,
            [name]: 'Street should consist only of letters- max 3 words',
          };
          return updatedState;
        });
      } else {
        setValidateMessages((prevState) => {
          const updatedState = { ...prevState, [name]: '' };
          return updatedState;
        });
      }
    }
    if (name === 'city') {
      const regex = /^[A-Za-z]+(?:\s[A-Za-z]+){0,1}$/;
      if (!employee.city.match(regex)) {
        setValidateMessages((prevState) => {
          const updatedState = {
            ...prevState,
            [name]: 'City should consist only of letters- max 2 words',
          };
          return updatedState;
        });
      } else {
        setValidateMessages((prevState) => {
          const updatedState = { ...prevState, [name]: '' };
          return updatedState;
        });
      }
    }
    if (name === 'postalCode') {
      const regex = /^\d{2}-\d{3}$/;
      if (!employee.postalCode.match(regex)) {
        setValidateMessages((prevState) => {
          const updatedState = {
            ...prevState,
            [name]: 'Postal code should have 00-000 format',
          };
          return updatedState;
        });
      } else {
        setValidateMessages((prevState) => {
          const updatedState = { ...prevState, [name]: '' };
          return updatedState;
        });
      }
    }
    if (name === 'salary') {
      const regex =/[1-9][0-9]{2,3}/;
      if (regex.test(employee.salary.toString())||Number(employee.salary) < 100 || Number(employee.salary) > 9999) {
        setValidateMessages((prevState) => {
          const updatedState = {
            ...prevState,
            [name]:
              'Salary accepts only numbers and should have value between 100 to 9999',
          };
          return updatedState;
        });
      } else {
        setValidateMessages((prevState) => {
          const updatedState = { ...prevState, [name]: '' };
          return updatedState;
        });
      }
    }
    if (name === 'phoneNumber') {
      const regex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

      if (!regex.test(employee.phoneNumber.toString())) {
        setValidateMessages((prevState) => {
          const updatedState = {
            ...prevState,
            [name]: 'Number must contain numbers and optionally  +,- signs.',
          };
          return updatedState;
        });
      } else {
        setValidateMessages((prevState) => {
          const updatedState = { ...prevState, [name]: '' };
          return updatedState;
        });
      }
    }
  };

  return (
    <Section>
      <EmployeeFormContainer>
        <form onSubmit={postNewEmployee}>
          {formBodyContent}
          <button type='submit'>Add Employee</button>
        </form>
      </EmployeeFormContainer>
    </Section>
  );
};
