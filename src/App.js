import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SignupForm from "./components/SignupForm/SignupForm";

import logo from './logo.svg';
import './assets/css/App.css';
import './assets/css/index.css';

function App() {
  return (
    <div className="App">    
      <SignupForm />
    </div>
  );
}

export default App;
