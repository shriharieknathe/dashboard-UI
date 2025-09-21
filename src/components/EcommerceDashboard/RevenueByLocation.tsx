import React from 'react';
import MapImage from '../assets/image/Map.png';
import { locations } from './constants';

const RevenueByLocation: React.FC = () => {
  return (
    <div className="chart-container">
      <div className="chart-title" style={{ marginBottom: "8px" }}>
        Revenue by Location
      </div>

      {/* World Map */}
      <div className="map-container">
        <img src={MapImage} alt="World Map" className="world-map" />
      </div>

      <div className="locations-list">
        {locations.map((location, i) => (
          <div key={i} className="location-item">
            <div className="location-info">
              <span className="city">{location.city}</span>
              <span className="value">{location.value}</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${location.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueByLocation;
