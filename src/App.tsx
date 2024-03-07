import './App.css';
import { Header } from './shared/Header/Header';
import { Footer } from './shared/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EmployeeList } from './pages/EmployeeList/EmployeeList';
import { EmployeeDetails } from './pages/EmployeeDetails/EmployeeDetails';
import { AddNewEmployee } from './pages/AddNewEmployee/AddNewEmployee';

function App() {
  
  
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<EmployeeList />} />
          <Route path='/:id' element={<EmployeeDetails  />} />
          <Route path='/add-new-employee' element={<AddNewEmployee  />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
