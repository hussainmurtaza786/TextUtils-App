import Alert from './Alert';
import './App.css';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';
import About from './Component/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
}
  from "react-router-dom"




function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }


  const removeBodyCLasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-light')


  }

  const toggleMode=(cls) => {
    removeBodyCLasses();
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      document.body.style.color = 'white'
      // showAlert("Dark Mode is on", "success")
      // document.title = 'TextUtils-Dark Mode'
      document.body.classList.add('bg-'+cls)
      console.log(cls)
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      // showAlert("light Mode is on","success")
      // document.title ='TextUtils-Light Mode'


    }
  }
  return (
    <>
      <Router>

        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <switch>
            <Routes>
              <Route exact path="/about" element={<About mode={mode} />} />
              <Route exact path='/' element={<Textform showAlert={showAlert} heading="Write Your Note Here" mode={mode} />} />
            </Routes>



          </switch>
        </div>
      </Router>

    </>
  );
}

export default App;
