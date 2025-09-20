import React from 'react';
import { motion } from 'framer-motion';
import {
  User,
  UserPlus,
  CreditCard,
  Settings,
  Download,
  Bell,
  CheckCircle,
  AlertCircle,
  Clock,
} from 'lucide-react';
import './RecentActivity.css';

interface Activity {
  id: string;
  type: 'user' | 'payment' | 'system' | 'download' | 'notification';
  title: string;
  description: string;
  timestamp: string;
  status: 'success' | 'warning' | 'info' | 'error';
  user?: {
    name: string;
    avatar?: string;
  };
}

const activitiesData: Activity[] = [
  {
    id: '1',
    type: 'user',
    title: 'New user registration',
    description: 'Sarah Johnson has joined the platform',
    timestamp: '2 minutes ago',
    status: 'success',
    user: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b6d47c2c?w=32&h=32&fit=crop&crop=face',
    },
  },
  {
    id: '2',
    type: 'payment',
    title: 'Payment received',
    description: '$299.00 from Enterprise Plan subscription',
    timestamp: '15 minutes ago',
    status: 'success',
  },
  {
    id: '3',
    type: 'system',
    title: 'System maintenance',
    description: 'Scheduled maintenance will begin at 2:00 AM',
    timestamp: '1 hour ago',
    status: 'warning',
  },
  {
    id: '4',
    type: 'user',
    title: 'Profile updated',
    description: 'Michael Chen updated his profile information',
    timestamp: '2 hours ago',
    status: 'info',
    user: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
    },
  },
  {
    id: '5',
    type: 'download',
    title: 'Report generated',
    description: 'Monthly analytics report is ready for download',
    timestamp: '3 hours ago',
    status: 'info',
  },
  {
    id: '6',
    type: 'notification',
    title: 'Failed login attempt',
    description: 'Multiple failed login attempts detected',
    timestamp: '4 hours ago',
    status: 'error',
  },
];

const iconMap = {
  user: User,
  payment: CreditCard,
  system: Settings,
  download: Download,
  notification: Bell,
};

const statusIconMap = {
  success: CheckCircle,
  warning: AlertCircle,
  info: Clock,
  error: AlertCircle,
};

const RecentActivity: React.FC = () => {
  const renderActivityIcon = (type: Activity['type']) => {
    const IconComponent = iconMap[type];
    return IconComponent ? <IconComponent size={16} /> : null;
  };

  const renderStatusIcon = (status: Activity['status']) => {
    const StatusIcon = statusIconMap[status];
    return StatusIcon ? <StatusIcon size={12} /> : null;
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
    hidden: { opacity: 0, x: -20 },
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
      className="recent-activity-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="activity-header">
        <h3 className="activity-title">Recent Activity</h3>
        <button className="view-all-button">View All</button>
      </div>

      <motion.div
        className="activity-list"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {activitiesData.map((activity) => (
          <motion.div
            key={activity.id}
            className={`activity-item ${activity.status}`}
            variants={itemVariants}
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.2 },
            }}
          >
            <div className="activity-icon-container">
              <div className={`activity-icon ${activity.status}`}>
                {renderActivityIcon(activity.type)}
              </div>
              <div className={`status-indicator ${activity.status}`}>
                {renderStatusIcon(activity.status)}
              </div>
            </div>

            <div className="activity-content">
              <div className="activity-main">
                <h4 className="activity-item-title">{activity.title}</h4>
                <p className="activity-description">{activity.description}</p>
              </div>
              
              {activity.user && (
                <div className="activity-user">
                  <img
                    src={activity.user.avatar}
                    alt={activity.user.name}
                    className="user-avatar"
                  />
                  <span className="user-name">{activity.user.name}</span>
                </div>
              )}
              
              <div className="activity-timestamp">
                <Clock size={12} />
                <span>{activity.timestamp}</span>
              </div>
            </div>

            <div className="activity-actions">
              <button className="action-button" aria-label="More options">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <circle cx="8" cy="3" r="1.5" />
                  <circle cx="8" cy="8" r="1.5" />
                  <circle cx="8" cy="13" r="1.5" />
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="activity-footer">
        <button className="load-more-button">
          Load More Activities
        </button>
      </div>
    </motion.div>
  );
};

export default RecentActivity;
