import React, { useState } from "react";
import logo from '/logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";

function App() {
  const [currentForm, setCurrentForm] = useState('Login');
  const toggleForm = (FormName) => {
    setCurrentForm(FormName);

  }
  return (
    
    <div className="App">
      {
        currentForm === "Login" ? <Login.Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}  />
      }
     
    </div>
  );
}

export default App;
