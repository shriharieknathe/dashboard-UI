import React from 'react';
import { motion } from 'framer-motion';
import {
  Crown,
  TrendingUp,
  Star,
  Award,
  MoreVertical,
} from 'lucide-react';
import './TopUsers.css';

interface TopUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
  rank: number;
  points: number;
  change: number;
  trend: 'up' | 'down' | 'neutral';
  status: 'active' | 'inactive';
  badge?: 'gold' | 'silver' | 'bronze';
}

const topUsersData: TopUser[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.j@company.com',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b6d47c2c?w=40&h=40&fit=crop&crop=face',
    rank: 1,
    points: 2847,
    change: 12.5,
    trend: 'up',
    status: 'active',
    badge: 'gold',
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.c@company.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    rank: 2,
    points: 2634,
    change: 8.2,
    trend: 'up',
    status: 'active',
    badge: 'silver',
  },
  {
    id: '3',
    name: 'Emily Davis',
    email: 'emily.d@company.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
    rank: 3,
    points: 2156,
    change: -2.1,
    trend: 'down',
    status: 'active',
    badge: 'bronze',
  },
  {
    id: '4',
    name: 'David Wilson',
    email: 'david.w@company.com',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
    rank: 4,
    points: 1923,
    change: 5.7,
    trend: 'up',
    status: 'active',
  },
  {
    id: '5',
    name: 'Lisa Anderson',
    email: 'lisa.a@company.com',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face',
    rank: 5,
    points: 1756,
    change: 1.4,
    trend: 'up',
    status: 'inactive',
  },
];

const TopUsers: React.FC = () => {
  const renderBadge = (badge?: TopUser['badge']) => {
    if (!badge) return null;

    const badgeConfig = {
      gold: { icon: Crown, color: '#FFD700' },
      silver: { icon: Award, color: '#C0C0C0' },
      bronze: { icon: Star, color: '#CD7F32' },
    };

    const config = badgeConfig[badge];
    const IconComponent = config.icon;

    return (
      <div className={`user-badge ${badge}`}>
        <IconComponent size={12} style={{ color: config.color }} />
      </div>
    );
  };

  const renderTrend = (trend: TopUser['trend'], change: number) => {
    const trendConfig = {
      up: { icon: TrendingUp, color: 'var(--accent-success)' },
      down: { icon: TrendingUp, color: 'var(--accent-error)', rotation: 180 },
      neutral: { icon: TrendingUp, color: 'var(--text-tertiary)' },
    };

    const config = trendConfig[trend];
    const IconComponent = config.icon;

    return (
      <div className={`trend-indicator ${trend}`}>
        <IconComponent 
          size={12} 
          style={{ 
            color: config.color,
            transform: config.rotation ? `rotate(${config.rotation}deg)` : undefined
          }} 
        />
        <span className="trend-value">
          {change > 0 ? '+' : ''}{change}%
        </span>
      </div>
    );
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
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="top-users-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="users-header">
        <h3 className="users-title">Top Performers</h3>
        <p className="users-subtitle">Highest scoring users this month</p>
      </div>

      <motion.div
        className="users-list"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {topUsersData.map((user) => (
          <motion.div
            key={user.id}
            className={`user-item ${user.status}`}
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            <div className="user-rank">
              <span className={`rank-number ${user.rank <= 3 ? 'top-three' : ''}`}>
                #{user.rank}
              </span>
              {renderBadge(user.badge)}
            </div>

            <div className="user-info">
              <div className="user-avatar-container">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="user-avatar"
                />
                <div className={`status-dot ${user.status}`} />
              </div>
              
              <div className="user-details">
                <h4 className="user-name">{user.name}</h4>
                <p className="user-email">{user.email}</p>
              </div>
            </div>

            <div className="user-stats">
              <div className="user-points">
                <span className="points-value">{user.points.toLocaleString()}</span>
                <span className="points-label">points</span>
              </div>
              {renderTrend(user.trend, user.change)}
            </div>

            <div className="user-actions">
              <button className="action-button" aria-label="More options">
                <MoreVertical size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="users-footer">
        <button className="view-leaderboard-button">
          View Full Leaderboard
        </button>
      </div>
    </motion.div>
  );
};

export default TopUsers;
