import React from 'react';
import MenuCard from './MenuCard';
import './Menu.css';

const menuItems = [

  {
    id: 1,
    name: 'Yomari',
    description: 'Sweet rice dumplings steamed to perfection.',
    variations: 'Chaku, Khuwa, Chocolate',
    price: '59',
    image: '/yomari.png' // Matches public/yomari.png
  },
  {
    id: 2,
    name: 'Bhakka',
    description: 'Fluffy, traditional steamed rice cakes.',
    variations: 'Plain, Cheese, Spicy',
    price: '49',
    image: '/bhakka.jpg' // Matches public/bhakka.jpg
  },
  {
    id: 3,
    name: 'Dhikiri',
    description: 'Steamed rice flour rolls with savory filling.',
    variations: 'Savory Spice Mix',
    price: '59', // Fixed price
    image: '/dhikri.jpg' 
  },
  {
    id: 4,
    name: 'Chatamari',
    description: 'Thin, crispy rice crepes topped with fresh ingredients.',
    variations: 'Egg, Meat or Veg topping',
    price: '69',
    image: '/chaatamari.jpg' // Matches public/chaatamari.jpg
  },
  {
    id: 5,
    name: 'Bagiya',
    description: 'Terai-style steamed rice flour cakes.',
    variations: 'Sweet & Savory',
    price: '59',
    image: '/baagiya.jpg' // Matches public/baagiya.jpg
  },
  // Add others similarly...

  
  
  {
    id: 6,
    name: 'Bara',
    description: 'Crispy, savory lentil patties pan-fried until golden.',
    variations: 'Black gram, green gram & mixed',
    price: '79', // Fixed price
    image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=600' // Fried patty style
  }
];

const Menu = () => {
  return (
    <section className="menu-section">
      <div className="menu-container">
        <h2 className="section-title">Our Heritage Menu</h2>
        <p className="section-subtitle">Authentic recipes passed down through generations</p>
        
        <div className="menu-grid">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        <div className="combo-banner">
          <div className="combo-content">
            <h3>The Fiesta Combo</h3>
            <p>Can't decide? Try a mix of all 6 traditional pieces!</p>
          </div>
          <div className="combo-price">NPR 299</div>
        </div>
      </div>
    </section>
  );
};

export default Menu;