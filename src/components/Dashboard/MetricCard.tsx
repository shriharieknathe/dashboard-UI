import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import './MetricCard.scss';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  color: 'blue' | 'orange' | 'green' | 'purple';
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  isPositive,
  color
}) => {
  return (
    <motion.div
      className={`metric-card ${color}`}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div className="metric-header">
        <h3 className="metric-title">{title}</h3>
        <div className={`metric-change ${isPositive ? 'positive' : 'negative'}`}>
          {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          <span>{change}</span>
        </div>
      </div>
      
      <div className="metric-value">{value}</div>
    </motion.div>
  );
};

export default MetricCard;
