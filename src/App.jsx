import React from 'react';
import Hero from './components/Hero';
import Menu from './components/Menu'; // Import the new Menu
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Menu /> {/* Render the Menu below the Hero */}
    </div>
  );
}

export default App;