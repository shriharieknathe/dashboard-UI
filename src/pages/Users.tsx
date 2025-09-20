import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Filter,
  Download,
  Plus,
  MoreVertical,
  Edit,
  Trash2,
  Mail,
  Phone,
} from 'lucide-react';
import { User } from '../types';
import './Users.css';

const usersData: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.j@company.com',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b6d47c2c?w=40&h=40&fit=crop&crop=face',
    role: 'admin',
    status: 'active',
    lastActive: '2 hours ago',
    joinDate: '2024-01-15',
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.c@company.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    role: 'user',
    status: 'active',
    lastActive: '5 minutes ago',
    joinDate: '2024-02-20',
  },
  {
    id: '3',
    name: 'Emily Davis',
    email: 'emily.d@company.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
    role: 'manager',
    status: 'active',
    lastActive: '1 day ago',
    joinDate: '2024-01-10',
  },
  {
    id: '4',
    name: 'David Wilson',
    email: 'david.w@company.com',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
    role: 'user',
    status: 'inactive',
    lastActive: '1 week ago',
    joinDate: '2024-03-05',
  },
  {
    id: '5',
    name: 'Lisa Anderson',
    email: 'lisa.a@company.com',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face',
    role: 'user',
    status: 'pending',
    lastActive: 'Never',
    joinDate: '2024-03-15',
  },
];

const Users: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [users, setUsers] = useState(usersData);

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || user.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const getRoleColor = (role: User['role']) => {
    const colors = {
      admin: 'var(--accent-error)',
      manager: 'var(--accent-warning)',
      user: 'var(--accent-primary)',
    };
    return colors[role];
  };

  const getStatusColor = (status: User['status']) => {
    const colors = {
      active: 'var(--accent-success)',
      inactive: 'var(--text-tertiary)',
      pending: 'var(--accent-warning)',
    };
    return colors[status];
  };

  return (
    <motion.div
      className="users-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="users-header">
        <div className="header-left">
          <motion.h1
            className="users-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Users Management
          </motion.h1>
          <motion.p
            className="users-subtitle"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Manage and monitor all users in your organization
          </motion.p>
        </div>
        
        <motion.div
          className="header-actions"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <button className="action-btn secondary">
            <Download size={16} />
            Export
          </button>
          <button className="action-btn primary">
            <Plus size={16} />
            Add User
          </button>
        </motion.div>
      </div>

      <motion.div
        className="users-controls"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="search-container">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-container">
          <Filter size={16} className="filter-icon" />
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </motion.div>

      <motion.div
        className="users-table-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="users-table">
          <div className="table-header">
            <div className="header-cell">User</div>
            <div className="header-cell">Role</div>
            <div className="header-cell">Status</div>
            <div className="header-cell">Last Active</div>
            <div className="header-cell">Join Date</div>
            <div className="header-cell">Actions</div>
          </div>

          <div className="table-body">
            {filteredUsers.map((user, index) => (
              <motion.div
                key={user.id}
                className="table-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ backgroundColor: 'var(--bg-hover)' }}
              >
                <div className="table-cell user-cell">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="user-avatar"
                  />
                  <div className="user-info">
                    <span className="user-name">{user.name}</span>
                    <span className="user-email">{user.email}</span>
                  </div>
                </div>

                <div className="table-cell">
                  <span
                    className="role-badge"
                    style={{ backgroundColor: `${getRoleColor(user.role)}20`, color: getRoleColor(user.role) }}
                  >
                    {user.role}
                  </span>
                </div>

                <div className="table-cell">
                  <div className="status-container">
                    <span
                      className="status-dot"
                      style={{ backgroundColor: getStatusColor(user.status) }}
                    />
                    <span className="status-text">{user.status}</span>
                  </div>
                </div>

                <div className="table-cell">
                  <span className="last-active">{user.lastActive}</span>
                </div>

                <div className="table-cell">
                  <span className="join-date">{new Date(user.joinDate).toLocaleDateString()}</span>
                </div>

                <div className="table-cell actions-cell">
                  <div className="action-buttons">
                    <button className="action-icon-btn" title="Send Email">
                      <Mail size={14} />
                    </button>
                    <button className="action-icon-btn" title="Call">
                      <Phone size={14} />
                    </button>
                    <button className="action-icon-btn" title="Edit">
                      <Edit size={14} />
                    </button>
                    <button className="action-icon-btn danger" title="Delete">
                      <Trash2 size={14} />
                    </button>
                    <button className="action-icon-btn" title="More">
                      <MoreVertical size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {filteredUsers.length === 0 && (
          <div className="empty-state">
            <p>No users found matching your search criteria.</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Users;
