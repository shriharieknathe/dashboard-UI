import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import MainSection from './components/MainSection/MainSection';
import RightBar from './components/RightBar/RightBar';
import OrderList from './components/OrderList';
import EcommerceDashboard from './components/EcommerceDashboard';
import { usePageTitle } from './hooks/usePageTitle';
import './App.scss';

const App: React.FC = () => {
  const location = useLocation();
  const isOrderListPage = location.pathname === '/order-list';
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isMobileRightbarOpen, setIsMobileRightbarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Set page title based on current route
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Dashboard';
      case '/order-list':
        return 'Order List';
      case '/analytics':
        return 'Analytics';
      default:
        return 'Dashboard';
    }
  };

  usePageTitle(getPageTitle());

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
  );
};

export default App;