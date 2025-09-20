import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  ShoppingCart,
  Activity,
} from 'lucide-react';
import { Metric } from '../../types';
import './MetricsGrid.css';

const metricsData: Metric[] = [
  {
    id: 'revenue',
    title: 'Total Revenue',
    value: '$54,239',
    change: 12.5,
    trend: 'up',
    icon: 'DollarSign',
    color: 'success',
  },
  {
    id: 'users',
    title: 'Active Users',
    value: '2,847',
    change: 8.2,
    trend: 'up',
    icon: 'Users',
    color: 'primary',
  },
  {
    id: 'orders',
    title: 'Orders',
    value: '1,423',
    change: -2.1,
    trend: 'down',
    icon: 'ShoppingCart',
    color: 'warning',
  },
  {
    id: 'conversion',
    title: 'Conversion Rate',
    value: '3.24%',
    change: 0.8,
    trend: 'up',
    icon: 'Activity',
    color: 'primary',
  },
];

const iconMap = {
  DollarSign,
  Users,
  ShoppingCart,
  Activity,
};

const MetricsGrid: React.FC = () => {
  const renderIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent ? <IconComponent size={24} /> : null;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="metrics-grid"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {metricsData.map((metric) => (
        <motion.div
          key={metric.id}
          className={`metric-card ${metric.color}`}
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="metric-header">
            <div className={`metric-icon ${metric.color}`}>
              {renderIcon(metric.icon)}
            </div>
            <div className={`metric-change ${metric.trend}`}>
              {metric.trend === 'up' ? (
                <TrendingUp size={16} />
              ) : (
                <TrendingDown size={16} />
              )}
              <span className="change-value">
                {metric.change > 0 ? '+' : ''}
                {metric.change}%
              </span>
            </div>
          </div>

          <div className="metric-content">
            <h3 className="metric-title">{metric.title}</h3>
            <div className="metric-value">{metric.value}</div>
          </div>

          <div className="metric-footer">
            <span className="metric-description">
              {metric.trend === 'up' ? 'Increased' : 'Decreased'} from last month
            </span>
          </div>

          {/* Background pattern */}
          <div className="metric-pattern" />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MetricsGrid;
