import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import MainLayout from './Components/MainLayout'
import "antd/dist/antd.css";
import CPUBar from './Components/CPUBar';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/telemetria">
        <MainLayout/>
      </Route>
      <Route path="/pruebas">
        <h1>Estas son las pruebas</h1>
        <CPUBar/>
      </Route>


      </Switch>

    </Router>
    
    
  
  );
}

export default App;
