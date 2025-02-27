 import './App.css';
 import { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import React from 'react';
import TextForm from './components/Textform'
// import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Required for JS components like accordion


function App() {
    const [mode, setMode] = useState('light');

    const toggleMode = ()=>{
      if (mode === 'light'){
       setMode('dark');
       document.body.style.backgroundColor = '#042743';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
     }
    }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
      <div className="container my-3">
        <TextForm heading="Enter the text to Analyze below" mode={mode}/>
      </div>
    </>
  );
}

export default App;
