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
    { month: 'Jan', actual: 16, projection: 4 },
    { month: 'Feb', actual: 20, projection: 5 },
    { month: 'Mar', actual: 17, projection: 4 },
    { month: 'Apr', actual: 22, projection: 6 },
    { month: 'May', actual: 14, projection: 4 },
    { month: 'Jun', actual: 20, projection: 5 },
  ];

  return (
    <div className="projections-chart">
      <div className="chart-header">
        <h3 className="chart-title">Projections vs Actuals</h3>
      </div>
      
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 0" stroke="var(--border-light)" vertical={false} />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 14, fill: 'var(--text-tertiary)' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 14, fill: 'var(--text-tertiary)' }}
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
              tickFormatter={(value) => `${value}M`}
            />
            <Bar dataKey="actual" stackId="a" fill="#A9B8E2" radius={[5, 5, 0, 0]} barSize={25} />
            <Bar dataKey="projection" stackId="a" fill="#D2D9EE" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProjectionsChart;
