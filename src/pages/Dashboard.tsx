import React from 'react';
import { motion } from 'framer-motion';
import MetricsGrid from '../components/Dashboard/MetricsGrid';
import RevenueChart from '../components/Dashboard/RevenueChart';
import UserActivityChart from '../components/Dashboard/UserActivityChart';
import RecentActivity from '../components/Dashboard/RecentActivity';
import TopUsers from '../components/Dashboard/TopUsers';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <motion.div
      className="dashboard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="dashboard-header">
        <motion.h1
          className="dashboard-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Dashboard Overview
        </motion.h1>
        <motion.p
          className="dashboard-subtitle"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Welcome back! Here's what's happening with your business today.
        </motion.p>
      </div>

      <motion.div
        className="dashboard-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {/* Metrics Grid */}
        <section className="metrics-section">
          <MetricsGrid />
        </section>

        {/* Charts Section */}
        <section className="charts-section">
          <div className="chart-container">
            <RevenueChart />
          </div>
          <div className="chart-container">
            <UserActivityChart />
          </div>
        </section>

        {/* Activity and Users Section */}
        <section className="activity-section">
          <div className="activity-container">
            <RecentActivity />
          </div>
          <div className="users-container">
            <TopUsers />
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
