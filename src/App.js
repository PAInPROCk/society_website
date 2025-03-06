 import './App.css';
 import { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import React from 'react';
import TextForm from './components/Textform'
// import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Required for JS components like accordion
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
    const [mode, setMode] = useState('light');
    const[alert, setAlert] = useState(null);

    const showAlert= (message,type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }
    const toggleMode = ()=>{
      if (mode === 'light'){
       setMode('dark');
       document.body.style.backgroundColor = '#042743';
       showAlert("Dark mode has been enabled","success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
     }
    }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}/>
      
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode}/>
        {/* <About/> */}
      </div>
      </Router>
    </>
  );
}

export default App;
