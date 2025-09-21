import React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { revenueData, REVENUE_LEGEND, CHART_CONFIG } from './constants';

const RevenueChart: React.FC = () => {
  return (
    <div className="chart-container">
      <div className="chart-header">
        <div className="chart-title">Revenue</div>
        <div className="chart-legend">
          <div className="legend-item">
            <div className={`legend-dot ${REVENUE_LEGEND.current.className}`}></div>
            <span>{REVENUE_LEGEND.current.label}</span>
          </div>
          <div className="legend-item">
            <div className={`legend-dot ${REVENUE_LEGEND.previous.className}`}></div>
            <span>{REVENUE_LEGEND.previous.label}</span>
          </div>
        </div>
      </div>
      <div className="chart-content">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenueData}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="var(--chart-grid)"
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--chart-tick)" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--chart-tick)" }}
              tickFormatter={CHART_CONFIG.revenue.yAxisFormatter}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-light)",
                color: "var(--text-primary)",
              }}
            />
            <Line
              type="monotone"
              dataKey="current"
              stroke="var(--chart-line-current)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="previous"
              stroke="var(--chart-line-previous)"
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
