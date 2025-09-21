import { TrendingUp } from "lucide-react";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import MapImage from "../components/assets/image/Map.png";
import "./EcommerceDashboard.scss";

const projectionsData = [
  { month: "Jan", actual: 16, projection: 4 },
  { month: "Feb", actual: 20, projection: 5 },
  { month: "Mar", actual: 17, projection: 4 },
  { month: "Apr", actual: 22, projection: 6 },
  { month: "May", actual: 14, projection: 4 },
  { month: "Jun", actual: 20, projection: 5 },
];

const revenueData = [
  { month: "Jan", current: 24, previous: 22 },
  { month: "Feb", current: 28, previous: 25 },
  { month: "Mar", current: 22, previous: 28 },
  { month: "Apr", current: 30, previous: 27 },
  { month: "May", current: 26, previous: 30 },
  { month: "Jun", current: 32, previous: 29 },
  { month: "Jul", current: 29, previous: 33 },
  { month: "Aug", current: 35, previous: 30 },
  { month: "Sep", current: 31, previous: 36 },
  { month: "Oct", current: 38, previous: 32 },
  { month: "Nov", current: 34, previous: 40 },
  { month: "Dec", current: 40, previous: 35 },
];

const productsData = [
  {
    id: 1,
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: 82,
    amount: "$6,518.18",
  },
  {
    id: 2,
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: 37,
    amount: "$4,754.50",
  },
  {
    id: 3,
    name: "Half Sleeve Shirt",
    price: "$39.99",
    quantity: 64,
    amount: "$2,559.36",
  },
  {
    id: 4,
    name: "Lightweight Jacket",
    price: "$20.00",
    quantity: 184,
    amount: "$3,680.00",
  },
  {
    id: 5,
    name: "Marco Shoes",
    price: "$79.49",
    quantity: 64,
    amount: "$1,965.81",
  },
];

const salesData = [
  { name: "Direct", value: 300.56, color: "var(--chart-pie-direct)" },
  { name: "Affiliate", value: 135.18, color: "var(--chart-pie-affiliate)" },
  { name: "Sponsored", value: 154.02, color: "var(--chart-pie-sponsored)" },
  { name: "E-mail", value: 48.96, color: "var(--chart-pie-email)" },
];

const locations = [
  { city: "New York", value: "72K", percentage: 72 },
  { city: "San Francisco", value: "39K", percentage: 39 },
  { city: "Sydney", value: "25K", percentage: 25 },
  { city: "Singapore", value: "61K", percentage: 61 },
];

const EcommerceDashboard: React.FC = () => {
  return (
    <div className="ecommerce-dashboard">
      {/* Page Title */}
      <h1 className="page-title">eCommerce</h1>

      {/* First Layer - KPI Cards + Projections Chart (50-50% split) */}
      <div className="layer layer-first">
        {/* Left Side - 2x2 KPI Grid (50% width) */}
        <div className="layer-left">
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
        </div>

        {/* Right Side - Projections vs Actuals Chart (50% width) */}
        <div className="layer-right">
          <div className="chart-container projection-chart">
            <div className="chart-title">Projections vs Actuals</div>
            <div className="chart-content">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={projectionsData}
                  margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
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
                    barSize={20}
                  />
                  <Bar
                    dataKey="projection"
                    fill="var(--chart-bar-projection)"
                    radius={[5, 5, 0, 0]}
                    barSize={20}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Second Layer - Revenue Chart and Revenue by Location (70-30% split) */}
      <div className="layer layer-second">
        {/* Revenue Chart (70% width) */}
        <div className="layer-left">
          <div className="chart-container">
            <div className="chart-header">
              <div className="chart-title">Revenue</div>
              <div className="chart-legend">
                <div className="legend-item">
                  <div className="legend-dot current"></div>
                  <span>Current Week $58,211</span>
                </div>
                <div className="legend-item">
                  <div className="legend-dot previous"></div>
                  <span>Previous Week $68,768</span>
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
                    tickFormatter={(v) => `${v}M`}
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
        </div>

        {/* Revenue by Location (30% width) */}
        <div className="layer-right">
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
        </div>
      </div>

      {/* Third Layer - Products Table and Sales Chart (70-30% split) */}
      <div className="layer layer-third">
        {/* Top Selling Products (70% width) */}
        <div className="layer-left">
          <div className="chart-container">
            <div className="chart-title">Top Selling Products</div>
            <div className="table-container">
              <table className="products-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {productsData.map((product, i) => (
                    <tr key={i}>
                      <td className="product-name">{product.name}</td>
                      <td className="price">{product.price}</td>
                      <td className="quantity">{product.quantity}</td>
                      <td className="amount">{product.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Total Sales Pie Chart (30% width) */}
        <div className="layer-right">
          <div className="chart-container">
            <div className="chart-title">Total Sales</div>
            <div className="pie-chart-container">
              <div className="pie-chart-wrapper">
                <PieChart width={160} height={160}>
                  <Pie
                    data={salesData}
                    cx={80}
                    cy={80}
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {salesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
                <div className="pie-chart-center">
                  <div className="percentage">38.6%</div>
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
        </div>
      </div>
    </div>
  );
};

export default EcommerceDashboard;
