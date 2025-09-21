import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import MainSection from './components/Layout/MainSection';
import RightBar from './components/Layout/RightBar';
import OrderList from './pages/OrderList';
import EcommerceDashboard from './pages/EcommerceDashboard';
import './App.scss';
import { ThemeProvider } from './contexts/ThemeContext';

const App: React.FC = () => {
  const location = useLocation();
  const isOrderListPage = location.pathname === '/order-list';
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isMobileRightbarOpen, setIsMobileRightbarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile/tablet
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close mobile sidebar and rightbar when route changes
  useEffect(() => {
    setIsMobileSidebarOpen(false);
    setIsMobileRightbarOpen(false);
  }, [location.pathname]);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
    // Close rightbar when opening sidebar
    if (!isMobileSidebarOpen) {
      setIsMobileRightbarOpen(false);
    }
  };

  const closeMobileSidebar = () => {
    setIsMobileSidebarOpen(false);
  };

  const toggleMobileRightbar = () => {
    setIsMobileRightbarOpen(!isMobileRightbarOpen);
    // Close sidebar when opening rightbar
    if (!isMobileRightbarOpen) {
      setIsMobileSidebarOpen(false);
    }
  };

  const closeMobileRightbar = () => {
    setIsMobileRightbarOpen(false);
  };

  return (
    <ThemeProvider>
      <div className={`app ${isOrderListPage ? 'no-right-bar' : ''}`}>
        {/* Mobile Overlays */}
        {isMobile && (
          <>
            <div 
              className={`sidebar-overlay ${isMobileSidebarOpen ? 'active' : ''}`}
              onClick={closeMobileSidebar}
            />
            <div 
              className={`rightbar-overlay ${isMobileRightbarOpen ? 'active' : ''}`}
              onClick={closeMobileRightbar}
            />
          </>
        )}
        
        <Sidebar 
          isMobileOpen={isMobileSidebarOpen}
          onMobileClose={closeMobileSidebar}
        />
        
        <MainSection 
          onMobileMenuClick={toggleMobileSidebar}
          onMobileRightbarClick={toggleMobileRightbar}
        >
          <Routes>
            <Route path="/" element={<EcommerceDashboard />} />
            <Route path="/dashboard" element={<EcommerceDashboard />} />
            <Route path="/ecommerce" element={<EcommerceDashboard />} />
            <Route path="/orders" element={<OrderList />} />
            <Route path="/order-list" element={<OrderList />} />
            <Route path="/projects" element={<EcommerceDashboard />} />
            <Route path="/online-courses" element={<EcommerceDashboard />} />
            <Route path="/overview" element={<EcommerceDashboard />} />
            <Route path="/account" element={<EcommerceDashboard />} />
            <Route path="/corporate" element={<EcommerceDashboard />} />
            <Route path="/blog" element={<EcommerceDashboard />} />
            <Route path="/social" element={<EcommerceDashboard />} />
          </Routes>
        </MainSection>
        
        {!isOrderListPage && (
          <RightBar 
            isMobileOpen={isMobileRightbarOpen}
            onMobileClose={closeMobileRightbar}
          />
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;