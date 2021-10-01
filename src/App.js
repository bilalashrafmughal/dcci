import './App.css';
import React from 'react'
import Router from './Router'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
          <Router />
      </BrowserRouter>      
    </div>
  );
}

export default App;
