import React from 'react';
import { motion } from 'framer-motion';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';
import { Users, UserCheck, UserX, Clock } from 'lucide-react';
import { ChartData } from '../../types';
import './UserActivityChart.css';

const activityData: ChartData[] = [
  { name: 'Active Users', value: 68, color: 'var(--accent-success)' },
  { name: 'Inactive Users', value: 22, color: 'var(--accent-warning)' },
  { name: 'New Users', value: 10, color: 'var(--accent-primary)' },
];

const statsData = [
  {
    id: 'total',
    label: 'Total Users',
    value: '2,847',
    icon: Users,
    color: 'primary',
  },
  {
    id: 'active',
    label: 'Active Today',
    value: '1,936',
    icon: UserCheck,
    color: 'success',
  },
  {
    id: 'inactive',
    label: 'Inactive',
    value: '626',
    icon: UserX,
    color: 'warning',
  },
  {
    id: 'new',
    label: 'New This Week',
    value: '285',
    icon: Clock,
    color: 'primary',
  },
];

const COLORS = [
  'var(--accent-success)',
  'var(--accent-warning)', 
  'var(--accent-primary)',
];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
      fontSize={12}
      fontWeight={600}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="activity-tooltip">
        <p className="tooltip-label">{data.name}</p>
        <div className="tooltip-content">
          <span 
            className="tooltip-indicator" 
            style={{ backgroundColor: data.color }}
          ></span>
          <span className="tooltip-value">{data.value}%</span>
        </div>
      </div>
    );
  }
  return null;
};

const UserActivityChart: React.FC = () => {
  return (
    <motion.div
      className="user-activity-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="activity-header">
        <h3 className="activity-title">User Activity</h3>
        <p className="activity-subtitle">Current user distribution</p>
      </div>

      <div className="activity-chart-wrapper">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={activityData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              innerRadius={40}
              fill="#8884d8"
              dataKey="value"
              animationBegin={0}
              animationDuration={800}
            >
              {activityData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="activity-legend">
        {activityData.map((item, index) => (
          <motion.div
            key={item.name}
            className="legend-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            <span 
              className="legend-dot" 
              style={{ backgroundColor: COLORS[index] }}
            ></span>
            <span className="legend-label">{item.name}</span>
            <span className="legend-percentage">{item.value}%</span>
          </motion.div>
        ))}
      </div>

      <div className="activity-stats">
        {statsData.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={stat.id}
              className={`stat-card ${stat.color}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`stat-icon ${stat.color}`}>
                <IconComponent size={16} />
              </div>
              <div className="stat-content">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default UserActivityChart;
