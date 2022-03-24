import React from 'react';
import { ReactDOM } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './css/styles_tick.css';

import Main from './components/Main';
import Header from './components/Header';
import Menu from './components/Menu';
import Modal from './components/Modal';
import OutSector from './components/OutSector';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />



    </div>
  );
}

export default App;
