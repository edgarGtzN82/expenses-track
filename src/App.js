import React from 'react';
import './App.css';
import Navigation from '../src/Layout/Navigation/Navigation';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Auth';


function App() {
  
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
