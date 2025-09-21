import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Bug,
  UserPlus,
  Upload,
  X,
} from 'lucide-react';
import './RightBar.scss';

interface RightBarProps {
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
}

const RightBar: React.FC<RightBarProps> = ({ isMobileOpen = false, onMobileClose }) => {
  const location = useLocation();

  // Hide RightBar only on order-list screen  
  const shouldHideRightBar = location.pathname === '/orders' || location.pathname === '/order-list';

  if (shouldHideRightBar) {
    return null;
  }

  const notifications = [
    {
      id: 1,
      icon: Bug,
      title: 'You have a bug that needs...',
      time: 'Just now',
      type: 'bug'
    },
    {
      id: 2,
      icon: UserPlus,
      title: 'New user registered',
      time: '59 minutes ago',
      type: 'user'
    },
    {
      id: 3,
      icon: Bug,
      title: 'You have a bug that needs...',
      time: '12 hours ago',
      type: 'bug'
    },
    {
      id: 4,
      icon: Upload,
      title: 'Andi Lane subscribed to you',
      time: 'Today, 11:59 AM',
      type: 'subscription'
    }
  ];

  const activities = [
    {
      id: 1,
      user: {
        name: 'User',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
      },
      action: 'You have a bug that needs...',
      time: 'Just now'
    },
    {
      id: 2,
      user: {
        name: 'User',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b6d47c2c?w=32&h=32&fit=crop&crop=face'
      },
      action: 'Released a new version',
      time: '59 minutes ago'
    },
    {
      id: 3,
      user: {
        name: 'User',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face'
      },
      action: 'Submitted a bug',
      time: '12 hours ago'
    },
    {
      id: 4,
      user: {
        name: 'User',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face'
      },
      action: 'Modified a data in Page X',
      time: 'Today, 11:59 AM'
    },
    {
      id: 5,
      user: {
        name: 'User',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=32&h=32&fit=crop&crop=face'
      },
      action: 'Deleted a page in Project X',
      time: 'Feb 2, 2023'
    }
  ];

  const contacts = [
    {
      id: 1,
      name: 'Natali Craig',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b6d47c2c?w=32&h=32&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Drew Cano',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Orlando Diggs',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'Andi Lane',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face'
    },
    {
      id: 5,
      name: 'Kate Morrison',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=32&h=32&fit=crop&crop=face'
    },
    {
      id: 6,
      name: 'Koray Okumus',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face'
    }
  ];

  return (
    <motion.aside
      className={`rightbar ${isMobileOpen ? 'mobile-open' : ''}`}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Mobile Close Button */}
      {isMobileOpen && onMobileClose && (
        <div className="mobile-close-header">
          <button 
            className="mobile-close-btn"
            onClick={onMobileClose}
            aria-label="Close panel"
          >
            <X size={20} />
          </button>
        </div>
      )}

      {/* Notifications */}
      <div className="rightbar-section">
        <h3 className="section-title">Notifications</h3>
        <div className="notifications-list">
          {notifications.map((notification, index) => {
            const IconComponent = notification.icon;
            return (
              <motion.div
                key={notification.id}
                className="notification-item"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="notification-icon">
                  <IconComponent size={16} />
                </div>
                <div className="notification-content">
                  <p className="notification-title">{notification.title}</p>
                  <span className="notification-time">{notification.time}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Activities */}
      <div className="rightbar-section">
        <h3 className="section-title">Activities</h3>
        <div className="activities-list">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              className="activity-item"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <img
                src={activity.user.avatar}
                alt={activity.user.name}
                className="activity-avatar"
              />
              <div className="activity-content">
                <p className="activity-text">{activity.action}</p>
                <span className="activity-time">{activity.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contacts */}
      <div className="rightbar-section">
        <h3 className="section-title">Contacts</h3>
        <div className="contacts-list">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.id}
              className="contact-item"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.05 }}
            >
              <img
                src={contact.avatar}
                alt={contact.name}
                className="contact-avatar"
              />
              <span className="contact-name">{contact.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.aside>
  );
};

export default RightBar;
