import React from 'react';
import './RevenueByLocation.scss';

const RevenueByLocation: React.FC = () => {
  const locations = [
    { city: 'New York', revenue: '72K' },
    { city: 'San Francisco', revenue: '39K' },
    { city: 'Sydney', revenue: '25K' },
    { city: 'Singapore', revenue: '61K' }
  ];

  return (
    <div className="revenue-by-location">
      <h3 className="chart-title">Revenue by Location</h3>
      
      <div className="world-map">
        <div className="map-placeholder">
          🗺️ World Map Visualization
        </div>
      </div>
      
      <div className="location-list">
        {locations.map((location, index) => (
          <div key={index} className="location-item">
            <span className="city-name">{location.city}</span>
            <span className="revenue-amount">{location.revenue}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueByLocation;
