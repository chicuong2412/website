import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import LoginProvider from './context/LoginProvider';
import MainNavigation from './utils/Navigation';

export default function App() {
  return (

    <LoginProvider>
      <MainNavigation></MainNavigation>
    </LoginProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);