import React from 'react';
import { motion } from 'framer-motion';
import Topbar from './Topbar';
import './MainSection.scss';

interface MainSectionProps {
  children: React.ReactNode;
}

const MainSection: React.FC<MainSectionProps> = ({ children }) => {
  return (
    <div className="main-section">
      <Topbar />
      <main className="main-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="content-wrapper"
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
};

export default MainSection;
