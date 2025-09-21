import React from "react";
import MetricsGrid from "./MetricsGrid";
import ProjectionsChart from "./ProjectionsChart";
import RevenueChart from "./RevenueChart";
import RevenueByLocation from "./RevenueByLocation";
import TopSellingProducts from "./TopSellingProducts";
import TotalSales from "./TotalSales";
import "./EcommerceDashboard.scss";

const EcommerceDashboard: React.FC = () => {
  return (
    <div className="ecommerce-dashboard">
      {/* Page Title */}
      <h1 className="page-title">eCommerce</h1>

      {/* First Layer - KPI Cards + Projections Chart (50-50% split) */}
      <div className="layer layer-first">
        {/* Left Side - 2x2 KPI Grid (50% width) */}
        <div className="layer-left">
          <MetricsGrid />
        </div>

        {/* Right Side - Projections vs Actuals Chart (50% width) */}
        <div className="layer-right">
          <ProjectionsChart />
        </div>
      </div>

      {/* Second Layer - Revenue Chart and Revenue by Location (70-30% split) */}
      <div className="layer layer-second">
        {/* Revenue Chart (70% width) */}
        <div className="layer-left">
          <RevenueChart />
        </div>

        {/* Revenue by Location (30% width) */}
        <div className="layer-right">
          <RevenueByLocation />
        </div>
      </div>

      {/* Third Layer - Products Table and Sales Chart (70-30% split) */}
      <div className="layer layer-third">
        {/* Top Selling Products (70% width) */}
        <div className="layer-left">
          <TopSellingProducts />
        </div>

        {/* Total Sales Pie Chart (30% width) */}
        <div className="layer-right">
          <TotalSales />
        </div>
      </div>
    </div>
  );
};

export default EcommerceDashboard;