import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import MainSection from './components/Layout/MainSection';
import RightBar from './components/Layout/RightBar';
import OrderList from './pages/OrderList';
import EcommerceDashboard from './pages/EcommerceDashboard';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <Sidebar />
      <MainSection>
        <Routes>
          <Route path="/" element={<EcommerceDashboard />} />
          <Route path="/dashboard" element={<EcommerceDashboard />} />
          <Route path="/ecommerce" element={<EcommerceDashboard />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/projects" element={<OrderList />} />
          <Route path="/online-courses" element={<OrderList />} />
        </Routes>
      </MainSection>
      <RightBar />
    </div>
  );
};

export default App;