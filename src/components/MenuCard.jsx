import React from 'react';
import './MenuCard.css';

const MenuCard = ({ item }) => {
  return (
    <div className="menu-card">
      <img src={item.image} alt={item.name} className="menu-card-image" />
      <div className="menu-card-content">
        <div className="menu-card-header">
          <h3 className="menu-card-title">{item.name}</h3>

          {/* This has been updated to use the fixed item.price */}
          <span className="menu-card-price">NPR {item.price}</span>

        </div>
        <p className="menu-card-description">{item.description}</p>
        <div className="menu-card-variations">
          <strong>Options:</strong> {item.variations}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;