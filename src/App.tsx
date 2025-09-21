import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import MainSection from './components/Layout/MainSection';
import RightBar from './components/Layout/RightBar';
import OrderList from './pages/OrderList';
import EcommerceDashboard from './pages/EcommerceDashboard';
import './App.scss';

const App: React.FC = () => {
  const location = useLocation();
  const isOrderListPage = location.pathname === '/order-list';

  return (
    <div className={`app ${isOrderListPage ? 'no-right-bar' : ''}`}>
      <Sidebar />
      <MainSection>
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
      <RightBar />
    </div>
  );
};

export default App;