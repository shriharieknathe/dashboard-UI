import React from 'react';
import { TrendingUp } from 'lucide-react';

const MetricsGrid: React.FC = () => {
  return (
    <div className="metrics-grid">
      <div className="metric-card customers">
        <div className="metric-label customer">Customers</div>
        <div className="metric-content">
          <div className="metric-value customer">3,781</div>
          <div className="metric-change positive customer">
            <TrendingUp size={12} />
            +11.01%
          </div>
        </div>
      </div>

      <div className="metric-card orders">
        <div className="metric-label">Orders</div>
        <div className="metric-content">
          <div className="metric-value">1,219</div>
          <div className="metric-change negative">
            <TrendingUp size={12} className="rotate-180" />
            -0.03%
          </div>
        </div>
      </div>

      <div className="metric-card revenue">
        <div className="metric-label">Revenue</div>
        <div className="metric-content">
          <div className="metric-value">$695</div>
          <div className="metric-change positive">
            <TrendingUp size={12} />
            +15.03%
          </div>
        </div>
      </div>

      <div className="metric-card growth">
        <div className="metric-label growth">Growth</div>
        <div className="metric-content">
          <div className="metric-value growth">30.1%</div>
          <div className="metric-change positive growth">
            <TrendingUp size={12} />
            +6.08%
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsGrid;
