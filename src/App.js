import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import React from 'react';
// import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Required for JS components like accordion

import MyBox from './components/Textform';

function App() {
  return (
    <>
      <Navbar title="TextUtils"></Navbar>
      <div className="container my-3">
        <MyBox heading="Enter the text to analyze"/>
      {/* <About></About> */}
      {/* <Footer></Footer> */}
      </div>
      
    </>
  );
}

export default App;
