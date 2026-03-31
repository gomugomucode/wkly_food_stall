import React from 'react';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="story-section">
      <div className="story-container">
        <div className="story-content">
          <h2 className="section-title">Our Story</h2>
          <h3 className="story-subtitle">Reviving Nepal's Culinary Heritage</h3>
          
          <p>
            At Nepali Heritage Fiesta, our mission is to revive Nepal's rich food heritage[cite: 9]. We noticed that Butwal's street food is mostly oily and repetitive[cite: 7]. Authentic, traditional Nepali steamed and savory items are very hard to find as convenient ready-to-eat options[cite: 7].
          </p>
          <p>
            That's why we decided to bring six rare and beloved traditional Nepali foods directly to the streets of Butwal[cite: 115]. We want to give people healthy, cultural, and tasty alternatives on weekends[cite: 9]. 
          </p>

          <div className="story-highlights">
            <div className="highlight">
              <h4>Authentic</h4>
              <p>Rare flavors not easily available elsewhere. [cite: 66]</p>
            </div>
            <div className="highlight">
              <h4>Healthy</h4>
              <p>A combination of steamed healthy items and savory Bara. [cite: 70]</p>
            </div>
            <div className="highlight">
              <h4>Hygienic</h4>
              <p>Hygienic preparation and attractive presentation. [cite: 69]</p>
            </div>
          </div>
        </div>
        
        <div className="story-image-container">
          {/* Using a placeholder that fits the cultural vibe */}
          <img 
            src="https://images.unsplash.com/photo-1529154036614-a60975f5c760?auto=format&fit=crop&q=80&w=800" 
            alt="Traditional Heritage Vibes" 
            className="story-image"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory;