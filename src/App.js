import React from 'react';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Card />
    </div>
  )
}

export default App;
