import React from 'react';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Menu from './components/Menu';
import Footer from './components/Footer'; // Import the new Footer
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <OurStory />
      <Menu />
      <Footer /> {/* Add the Footer at the bottom */}
    </div>
  );
}

export default App;