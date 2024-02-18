import './App.css';
import { Header } from './shared/Header/Header';
import { Footer } from './shared/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EmployeeList } from './pages/EmployeeList/EmployeeList';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<EmployeeList />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
