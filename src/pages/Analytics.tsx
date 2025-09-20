import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, DollarSign } from 'lucide-react';

const Analytics: React.FC = () => {
  return (
    <motion.div
      className="analytics-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: '0' 
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        style={{ marginBottom: '2rem' }}
      >
        <h1 style={{ 
          fontSize: '2rem', 
          fontWeight: 700, 
          color: 'var(--text-primary)', 
          margin: '0 0 0.5rem 0' 
        }}>
          Analytics
        </h1>
        <p style={{ 
          fontSize: '1rem', 
          color: 'var(--text-secondary)', 
          margin: '0' 
        }}>
          Detailed insights and performance metrics
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}
      >
        {[
          { icon: BarChart3, title: 'Total Views', value: '124,563', change: '+12.5%' },
          { icon: Users, title: 'Active Users', value: '8,492', change: '+8.2%' },
          { icon: DollarSign, title: 'Revenue', value: '$54,239', change: '+15.3%' },
          { icon: TrendingUp, title: 'Growth Rate', value: '23.4%', change: '+2.1%' },
        ].map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              whileHover={{
                boxShadow: 'var(--shadow-md)',
                transform: 'translateY(-2px)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '0.75rem',
                  background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}>
                  <IconComponent size={24} />
                </div>
                <div style={{
                  padding: '0.25rem 0.5rem',
                  borderRadius: '1rem',
                  background: 'rgba(16, 185, 129, 0.1)',
                  color: 'var(--accent-success)',
                  fontSize: '0.75rem',
                  fontWeight: 600
                }}>
                  {metric.change}
                </div>
              </div>
              <h3 style={{ 
                fontSize: '0.875rem', 
                fontWeight: 500, 
                color: 'var(--text-secondary)', 
                margin: '0 0 0.5rem 0',
                textTransform: 'uppercase',
                letterSpacing: '0.025em'
              }}>
                {metric.title}
              </h3>
              <div style={{ 
                fontSize: '2rem', 
                fontWeight: 700, 
                color: 'var(--text-primary)' 
              }}>
                {metric.value}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-light)',
          borderRadius: '0.75rem',
          padding: '2rem',
          textAlign: 'center',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <BarChart3 size={64} style={{ color: 'var(--text-tertiary)', marginBottom: '1rem' }} />
        <h3 style={{ 
          fontSize: '1.25rem', 
          fontWeight: 600, 
          color: 'var(--text-primary)', 
          marginBottom: '0.5rem' 
        }}>
          Advanced Analytics
        </h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          Detailed charts and reports will be displayed here with comprehensive data visualization.
        </p>
        <motion.button
          style={{
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            fontSize: '0.875rem',
            fontWeight: 600,
            cursor: 'pointer'
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          View Detailed Reports
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Analytics;
