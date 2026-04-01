import React from 'react';
import './Hero.css'; // Importing the new CSS file

const Hero = () => {
  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-container">
      <div className="hero-overlay">
        <h1 className="hero-title">Nepali Heritage Fiesta</h1>
        <p className="hero-subtitle">Taste the Tradition in Every Bite</p>
        
        <div className="hero-button-group">
          <button 
            className="btn-primary" 
            onClick={() => scrollToSection('menu')}
          >
            View Menu
          </button>
          <button 
            className="btn-secondary" 
            onClick={() => scrollToSection('contact')}
          >
            Find Us This Weekend
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;