import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import { projectionsData, CHART_CONFIG } from './constants';

const ProjectionsChart: React.FC = () => {
  return (
    <div className="chart-container projection-chart">
      <div className="chart-title">Projections vs Actuals</div>
      <div className="chart-content">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={projectionsData}
            margin={CHART_CONFIG.projections.margin}
          >
            <CartesianGrid
              strokeDasharray="3 0"
              stroke="var(--chart-grid)"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 14, fill: "var(--chart-tick)" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 14, fill: "var(--chart-tick)" }}
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
              tickFormatter={(value) => `${value}M`}
            />
            <Bar
              dataKey="actual"
              fill="var(--chart-bar-actual)"
              radius={[5, 5, 0, 0]}
              barSize={CHART_CONFIG.projections.barSize}
            />
            <Bar
              dataKey="projection"
              fill="var(--chart-bar-projection)"
              radius={[5, 5, 0, 0]}
              barSize={CHART_CONFIG.projections.barSize}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProjectionsChart;
