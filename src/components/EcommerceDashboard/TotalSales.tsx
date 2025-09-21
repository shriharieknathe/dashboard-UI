import React from 'react';
import { Cell, Pie, PieChart } from 'recharts';
import { salesData, TOTAL_SALES_PERCENTAGE, CHART_CONFIG } from './constants';

const TotalSales: React.FC = () => {
  return (
    <div className="chart-container">
      <div className="chart-title">Total Sales</div>
      <div className="pie-chart-container">
        <div className="pie-chart-wrapper">
          <PieChart 
            width={CHART_CONFIG.pie.width} 
            height={CHART_CONFIG.pie.height}
          >
            <Pie
              data={salesData}
              cx={CHART_CONFIG.pie.cx}
              cy={CHART_CONFIG.pie.cy}
              innerRadius={CHART_CONFIG.pie.innerRadius}
              outerRadius={CHART_CONFIG.pie.outerRadius}
              paddingAngle={CHART_CONFIG.pie.paddingAngle}
              dataKey="value"
            >
              {salesData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
          <div className="pie-chart-center">
            <div className="percentage">{TOTAL_SALES_PERCENTAGE}</div>
          </div>
        </div>
      </div>
      <div className="sales-legend">
        {salesData.map((item, i) => (
          <div key={i} className="sales-item">
            <div className="sales-info">
              <div
                className="sales-dot"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="sales-name">{item.name}</span>
            </div>
            <span className="sales-value">${item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalSales;
