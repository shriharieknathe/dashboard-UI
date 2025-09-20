import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import './ProjectionsChart.scss';

const ProjectionsChart: React.FC = () => {
  const data = [
    { month: 'Jan', actual: 20, projection: 18 },
    { month: 'Feb', actual: 25, projection: 22 },
    { month: 'Mar', actual: 30, projection: 28 },
    { month: 'Apr', actual: 35, projection: 32 },
    { month: 'May', actual: 28, projection: 30 },
    { month: 'Jun', actual: 33, projection: 35 },
  ];

  return (
    <div className="projections-chart">
      <div className="chart-header">
        <h3 className="chart-title">Projections vs Actuals</h3>
        <div className="chart-amount">30M</div>
      </div>
      
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
            <Bar dataKey="projection" fill="#E2E8F0" radius={[4, 4, 0, 0]} />
            <Bar dataKey="actual" fill="#3B82F6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProjectionsChart;
