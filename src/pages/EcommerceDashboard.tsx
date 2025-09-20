import React from 'react';
import { TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import './EcommerceDashboard.scss';

const projectionsData = [
  { month: 'Jan', value: 20 },
  { month: 'Feb', value: 22 },
  { month: 'Mar', value: 28 },
  { month: 'Apr', value: 25 },
  { month: 'May', value: 30 },
  { month: 'Jun', value: 27 },
];

const revenueData = [
  { month: 'Jan', current: 24, previous: 22 },
  { month: 'Feb', current: 28, previous: 25 },
  { month: 'Mar', current: 22, previous: 28 },
  { month: 'Apr', current: 30, previous: 27 },
  { month: 'May', current: 26, previous: 30 },
  { month: 'Jun', current: 32, previous: 29 },
  { month: 'Jul', current: 29, previous: 33 },
  { month: 'Aug', current: 35, previous: 30 },
  { month: 'Sep', current: 31, previous: 36 },
  { month: 'Oct', current: 38, previous: 32 },
  { month: 'Nov', current: 34, previous: 40 },
  { month: 'Dec', current: 40, previous: 35 },
];

const productsData = [
  { id: 1, name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
  { id: 2, name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
  { id: 3, name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
  { id: 4, name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
  { id: 5, name: 'Marco Shoes', price: '$79.49', quantity: 64, amount: '$1,965.81' },
];

const salesData = [
  { name: 'Direct', value: 300.56, color: '#0ea5e9' },
  { name: 'Affiliate', value: 135.18, color: '#8b5cf6' },
  { name: 'Sponsored', value: 154.02, color: '#f43f5e' },
  { name: 'E-mail', value: 48.96, color: '#10b981' },
];

const locations = [
  { city: 'New York', value: '72K' },
  { city: 'San Francisco', value: '39K' },
  { city: 'Sydney', value: '25K' },
  { city: 'Singapore', value: '61K' },
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
              <div className="metric-label">Customers</div>
              <div className="metric-content">
                <div className="metric-value">3,781</div>
                <div className="metric-change positive">
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
              <div className="metric-label">Growth</div>
              <div className="metric-content">
                <div className="metric-value">30.1%</div>
                <div className="metric-change positive">
                  <TrendingUp size={12} />
                  +6.08%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Projections vs Actuals Chart (50% width) */}
        <div className="layer-right">
          <div className="chart-container  projection-chart">
            <div className="chart-title">Projections vs Actuals</div>
            <div className="chart-content">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={projectionsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} tickFormatter={(v) => `${v}M`} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
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
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} tickFormatter={(v) => `${v}M`} />
                  <Tooltip />
                  <Line type="monotone" dataKey="current" stroke="#1f2937" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="previous" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Revenue by Location (30% width) */}
        <div className="layer-right">
          <div className="chart-container">
            <div className="chart-title">Revenue by Location</div>
            
            {/* World Map SVG */}
            <div className="map-container">
              <svg viewBox="0 0 400 200" className="world-map">
                <path d="M 80 60 L 120 55 L 140 70 L 130 90 L 90 85 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1"/>
                <path d="M 160 80 L 200 75 L 220 90 L 210 110 L 170 105 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1"/>
                <path d="M 240 70 L 280 65 L 300 80 L 290 100 L 250 95 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1"/>
                <path d="M 60 120 L 100 115 L 120 130 L 110 150 L 70 145 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1"/>
                <path d="M 140 110 L 180 105 L 200 120 L 190 140 L 150 135 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1"/>
                <path d="M 220 100 L 260 95 L 280 110 L 270 130 L 230 125 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1"/>
                <path d="M 300 90 L 340 85 L 360 100 L 350 120 L 310 115 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1"/>
                
                <circle cx="100" cy="70" r="3" fill="#3b82f6" />
                <circle cx="180" cy="90" r="3" fill="#3b82f6" />
                <circle cx="260" cy="80" r="3" fill="#3b82f6" />
                <circle cx="320" cy="100" r="3" fill="#3b82f6" />
              </svg>
            </div>
            
            <div className="locations-list">
              {locations.map((location, i) => (
                <div key={i} className="location-item">
                  <span className="city">{location.city}</span>
                  <span className="value">{location.value}</span>
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
                    <div className="sales-dot" style={{ backgroundColor: item.color }}></div>
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
