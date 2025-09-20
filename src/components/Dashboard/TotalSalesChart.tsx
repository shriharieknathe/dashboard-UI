import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './TotalSalesChart.scss';

const TotalSalesChart: React.FC = () => {
  const data = [
    { name: 'Direct', value: 300.56, color: '#1F2937' },
    { name: 'Affiliate', value: 135.18, color: '#10B981' },
    { name: 'Sponsored', value: 154.02, color: '#3B82F6' },
    { name: 'E-mail', value: 48.96, color: '#F59E0B' }
  ];

  const COLORS = ['#1F2937', '#10B981', '#3B82F6', '#F59E0B'];

  return (
    <div className="total-sales-chart">
      <h3 className="chart-title">Total Sales</h3>
      
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={150}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        
        <div className="chart-center">
          <span className="total-percentage">38.6%</span>
        </div>
      </div>
      
      <div className="sales-legend">
        {data.map((item, index) => (
          <div key={index} className="legend-item">
            <span 
              className="legend-dot" 
              style={{ backgroundColor: item.color }}
            ></span>
            <div className="legend-content">
              <span className="legend-label">{item.name}</span>
              <span className="legend-value">${item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalSalesChart;
