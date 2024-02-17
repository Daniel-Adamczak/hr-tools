import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from '../../pages/Homepage/Homepage';
import { EmployeeList } from '../../pages/EmployeeList/EmployeeList';

export const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/employeeList' element={<EmployeeList />} />
      </Routes>
    </main>
  );
};
