import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import './OrderList.scss';

interface Order {
  id: string;
  orderNumber: string;
  user: {
    name: string;
    avatar: string;
  };
  project: string;
  address: string;
  date: string;
  status: 'in_progress' | 'complete' | 'pending' | 'approved' | 'rejected';
}

const OrderList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const orders: Order[] = [
    {
      id: '1',
      orderNumber: '#CM9801',
      user: {
        name: 'Natali Craig',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b6d47c2c?w=40&h=40&fit=crop&crop=face'
      },
      project: 'Landing Page',
      address: 'Meadow Lane Oakland',
      date: 'Just now',
      status: 'in_progress'
    },
    {
      id: '2',
      orderNumber: '#CM9802',
      user: {
        name: 'Kate Morrison',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face'
      },
      project: 'CRM Admin pages',
      address: 'Larry San Francisco',
      date: 'A minute ago',
      status: 'complete'
    },
    {
      id: '3',
      orderNumber: '#CM9803',
      user: {
        name: 'Drew Cano',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
      },
      project: 'Client Project',
      address: 'Bagwell Avenue Ocala',
      date: '1 hour ago',
      status: 'pending'
    },
    {
      id: '4',
      orderNumber: '#CM9804',
      user: {
        name: 'Orlando Diggs',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face'
      },
      project: 'Admin Dashboard',
      address: 'Washburn Baton Rouge',
      date: 'Yesterday',
      status: 'approved'
    },
    {
      id: '5',
      orderNumber: '#CM9805',
      user: {
        name: 'Andi Lane',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face'
      },
      project: 'App Landing Page',
      address: 'Nest Lane Olivette',
      date: 'Feb 2, 2023',
      status: 'rejected'
    },
    {
      id: '6',
      orderNumber: '#CM9801',
      user: {
        name: 'Natali Craig',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b6d47c2c?w=40&h=40&fit=crop&crop=face'
      },
      project: 'Landing Page',
      address: 'Meadow Lane Oakland',
      date: 'Just now',
      status: 'in_progress'
    },
    {
      id: '7',
      orderNumber: '#CM9802',
      user: {
        name: 'Kate Morrison',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face'
      },
      project: 'CRM Admin pages',
      address: 'Larry San Francisco',
      date: 'A minute ago',
      status: 'complete'
    },
    {
      id: '8',
      orderNumber: '#CM9803',
      user: {
        name: 'Drew Cano',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
      },
      project: 'Client Project',
      address: 'Bagwell Avenue Ocala',
      date: '1 hour ago',
      status: 'pending'
    },
    {
      id: '9',
      orderNumber: '#CM9804',
      user: {
        name: 'Orlando Diggs',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face'
      },
      project: 'Admin Dashboard',
      address: 'Washburn Baton Rouge',
      date: 'Yesterday',
      status: 'approved'
    },
    {
      id: '10',
      orderNumber: '#CM9805',
      user: {
        name: 'Andi Lane',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face'
      },
      project: 'App Landing Page',
      address: 'Nest Lane Olivette',
      date: 'Feb 2, 2023',
      status: 'rejected'
    }
  ];

  const filteredOrders = orders.filter(order => 
    order.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: Order['status']) => {
    const colors = {
      in_progress: 'progress',
      complete: 'success',
      pending: 'warning',
      approved: 'success',
      rejected: 'error'
    };
    return colors[status];
  };

  const getStatusText = (status: Order['status']) => {
    const texts = {
      in_progress: 'In Progress',
      complete: 'Complete',
      pending: 'Pending',
      approved: 'Approved',
      rejected: 'Rejected'
    };
    return texts[status];
  };

  return (
    <div className="order-list">
      <div className="order-list-header">
        <div className="search-section">
          <div className="search-container">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </div>

      <div className="order-table-container">
        <table className="order-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" className="checkbox" />
              </th>
              <th>Order ID</th>
              <th>User</th>
              <th>Project</th>
              <th>Address</th>
              <th>Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order, index) => (
              <motion.tr
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <td>
                  <input type="checkbox" className="checkbox" />
                </td>
                <td className="order-id">{order.orderNumber}</td>
                <td className="user-cell">
                  <div className="user-info">
                    <img
                      src={order.user.avatar}
                      alt={order.user.name}
                      className="user-avatar"
                    />
                    <span className="user-name">{order.user.name}</span>
                  </div>
                </td>
                <td className="project">{order.project}</td>
                <td className="address">{order.address}</td>
                <td className="date">{order.date}</td>
                <td className="status">
                  <span className={`status-badge ${getStatusColor(order.status)}`}>
                    <span className={`status-dot ${getStatusColor(order.status)}`}></span>
                    {getStatusText(order.status)}
                  </span>
                </td>
                <td className="actions">
                  <button className="action-btn">•••</button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button className="pagination-btn" disabled={currentPage === 1}>
          <ChevronLeft size={16} />
        </button>
        {[1, 2, 3, 4, 5].map(page => (
          <button
            key={page}
            className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
        <button className="pagination-btn">
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default OrderList;
