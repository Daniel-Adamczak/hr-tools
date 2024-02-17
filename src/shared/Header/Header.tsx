import React from 'react';
import { Navbar } from './components/Navbar';
import { LanguageSwitcher } from './components/LanguageSwitcher';
// do ostylowania za pomocą Styled Components
export const Header = () => {
  return (
    <header>
      <h1>Hr Tools</h1>
      <Navbar />
      <LanguageSwitcher />
    </header>
  );
};
