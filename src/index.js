import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginProvider from './context/LoginProvider';
import MainNavigation from './utils/Navigation';
import Wrapper from './component/Wrapper/Wrapper';

export default function App() {
  return (
    <Wrapper>
      <LoginProvider>
        <MainNavigation></MainNavigation>
      </LoginProvider>
    </Wrapper>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);