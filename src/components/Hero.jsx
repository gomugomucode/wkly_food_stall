import React from 'react';

const Hero = () => {
  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-container" style={heroStyle}>
      <div className="hero-overlay" style={overlayStyle}>
        <h1 style={titleStyle}>Nepali Heritage Fiesta</h1>
        <p style={subtitleStyle}>Taste the Tradition in Every Bite</p>
        <div style={buttonGroupStyle}>
          {/* Updated buttons with onClick events */}
          <button 
            style={primaryButtonStyle} 
            onClick={() => scrollToSection('menu')}
          >
            View Menu
          </button>
          <button 
            style={secondaryButtonStyle} 
            onClick={() => scrollToSection('contact')}
          >
            Find Us This Weekend
          </button>
        </div>
      </div>
    </div>
  );
};

// Inline styles
const heroStyle = {
  height: '80vh',
  backgroundImage: 'url("https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=2070&auto=format&fit=crop")', 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const overlayStyle = {
  backgroundColor: 'rgba(44, 44, 44, 0.6)',
  padding: '3rem',
  borderRadius: '10px',
  textAlign: 'center',
  color: 'var(--off-white)',
};

const titleStyle = {
  fontSize: '3.5rem',
  margin: '0 0 10px 0',
  color: 'var(--warm-gold)',
};

const subtitleStyle = {
  fontSize: '1.5rem',
  marginBottom: '30px',
};

const buttonGroupStyle = {
  display: 'flex',
  gap: '15px',
  justifyContent: 'center',
};

const primaryButtonStyle = {
  padding: '12px 24px',
  fontSize: '1.1rem',
  backgroundColor: 'var(--heritage-red)',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold',
};

const secondaryButtonStyle = {
  ...primaryButtonStyle,
  backgroundColor: 'transparent',
  border: '2px solid var(--warm-gold)',
  color: 'var(--warm-gold)',
};

export default Hero;