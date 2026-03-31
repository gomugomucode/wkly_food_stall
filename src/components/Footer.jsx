import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer-section">
      <div className="footer-container">
        {/* Brand Column */}
        <div className="footer-column brand-column">
          <h2 className="footer-title">Nepali Heritage Fiesta</h2>
          <p className="footer-description">
            Reviving Nepal's rich food heritage. Giving you healthy, cultural, and tasty alternatives every weekend.
          </p>
        </div>

        {/* Location & Hours Column */}
        <div className="footer-column">
          <h3 className="footer-heading">Visit Our Stall</h3>
          <ul className="footer-list">
            <li><strong>Location:</strong> Traffic Chowk, Butwal</li>
            <li><strong>Days:</strong> Friday to Sunday</li>
            <li><strong>Hours:</strong> 4:00 PM - 10:00 PM</li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-column">
          <h3 className="footer-heading">Get in Touch</h3>
          <ul className="footer-list">
            <li><strong>Phone:</strong> +977 9767606302</li>
            <li><strong>Email:</strong> baralanupam111@gmail.com</li>
          </ul>
          <div className="social-links">
            {/* These can be replaced with actual icon components like react-icons later */}
            <a href="#" className="social-button">TikTok</a>
            <a href="#" className="social-button">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nepali Heritage Fiesta. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;