import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Bell,
  Sun,
  Moon,
  Menu,
  Settings,
  LogOut,
  User,
  ChevronDown,
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useSidebar } from './Layout';
import './Header.css';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { toggle } = useSidebar();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const notifications = [
    { id: 1, title: 'New user registered', time: '2 min ago', unread: true },
    { id: 2, title: 'System update completed', time: '1 hour ago', unread: false },
    { id: 3, title: 'Payment received', time: '3 hours ago', unread: true },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <header className="header">
      <div className="header-left">
        <button
          className="mobile-menu-button"
          onClick={toggle}
          aria-label="Toggle sidebar"
        >
          <Menu size={20} />
        </button>

        <div className="search-container">
          <div className="search-input-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search anything..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </div>

      <div className="header-right">
        {/* Theme Toggle */}
        <motion.button
          className="header-button theme-toggle"
          onClick={toggleTheme}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </motion.button>

        {/* Notifications */}
        <div className="notification-container">
          <motion.button
            className="header-button notification-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`${unreadCount} unread notifications`}
          >
            <Bell size={18} />
            {unreadCount > 0 && (
              <span className="notification-badge">{unreadCount}</span>
            )}
          </motion.button>
        </div>

        {/* Profile Dropdown */}
        <div className="profile-container">
          <motion.button
            className="profile-button"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Open profile menu"
          >
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
              alt="Profile"
              className="profile-avatar"
            />
            <span className="profile-name">John Doe</span>
            <ChevronDown 
              size={16} 
              className={`profile-chevron ${isProfileOpen ? 'rotated' : ''}`}
            />
          </motion.button>

          {isProfileOpen && (
            <motion.div
              className="profile-dropdown"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="dropdown-header">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                  alt="Profile"
                  className="dropdown-avatar"
                />
                <div className="dropdown-user-info">
                  <span className="dropdown-name">John Doe</span>
                  <span className="dropdown-email">john.doe@company.com</span>
                </div>
              </div>

              <div className="dropdown-divider" />

              <div className="dropdown-menu">
                <button className="dropdown-item">
                  <User size={16} />
                  <span>Profile</span>
                </button>
                <button className="dropdown-item">
                  <Settings size={16} />
                  <span>Settings</span>
                </button>
                
                <div className="dropdown-divider" />
                
                <button className="dropdown-item logout">
                  <LogOut size={16} />
                  <span>Sign out</span>
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile Search */}
      <div className="mobile-search">
        <div className="search-input-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
