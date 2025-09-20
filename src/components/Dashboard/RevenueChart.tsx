import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import './RevenueChart.scss';

const RevenueChart: React.FC = () => {
  const data = [
    { month: 'Jan', current: 10, previous: 8 },
    { month: 'Feb', current: 15, previous: 12 },
    { month: 'Mar', current: 18, previous: 15 },
    { month: 'Apr', current: 22, previous: 18 },
    { month: 'May', current: 25, previous: 20 },
    { month: 'Jun', current: 20, previous: 22 },
  ];

  return (
    <div className="revenue-chart">
      <div className="chart-header">
        <h3 className="chart-title">Revenue</h3>
        <div className="chart-legend">
          <div className="legend-item">
            <span className="legend-dot current"></span>
            <span>Current Week $58,211</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot previous"></span>
            <span>Previous Week $68,768</span>
          </div>
        </div>
      </div>
      
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-light)" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'var(--text-tertiary)' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'var(--text-tertiary)' }}
              tickFormatter={(value) => `${value}M`}
            />
            <Line 
              type="monotone" 
              dataKey="current" 
              stroke="#1F2937" 
              strokeWidth={3}
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="previous" 
              stroke="#93C5FD" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
