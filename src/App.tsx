import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './shared/Header/Header';
import { Main } from './shared/Main/Main';
import { Footer } from './shared/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
// trzeba ostylowac za pomocą styled components
function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
