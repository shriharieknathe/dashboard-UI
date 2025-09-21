import React from 'react';
import { motion } from 'framer-motion';
import { Edit, MoreHorizontal, Trash2 } from 'lucide-react';
import { Order, getStatusText } from './constants';

interface MobileOrderCardProps {
  order: Order;
  index: number;
  isSelected: boolean;
  onToggleSelect: (id: string, checked: boolean) => void;
}

const MobileOrderCard: React.FC<MobileOrderCardProps> = ({
  order,
  index,
  isSelected,
  onToggleSelect,
}) => {
  return (
    <motion.div
      key={order.id}
      className="mobile-order-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <div className="card-header">
        <div className="order-info">
          <div className="order-id">{order.orderNumber}</div>
          <div className="order-date">{order.date}</div>
        </div>
        <div className="order-checkbox">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={(e) => onToggleSelect(order.id, e.target.checked)}
          />
        </div>
      </div>

      <div className="card-content">
        <div className="customer-section">
          <img
            src={order.user.avatar}
            alt={order.user.name}
            className="customer-avatar"
          />
          <div className="customer-details">
            <div className="customer-name">{order.user.name}</div>
            <div className="customer-email">
              {order.user.name.toLowerCase().replace(" ", ".")}@example.com
            </div>
          </div>
        </div>

        <div className="order-details">
          <div className="detail-item">
            <div className="detail-label">Project</div>
            <div className="detail-value">{order.project}</div>
          </div>
          <div className="detail-item">
            <div className="detail-label">Address</div>
            <div className="detail-value">{order.address}</div>
          </div>
        </div>

        <div className="card-footer">
          <div className={`status-badge status-${order.status}`}>
            <span className="status-text">{getStatusText(order.status)}</span>
          </div>
          <div className="order-actions">
            <button className="action-icon" aria-label="Edit">
              <Edit size={14} />
            </button>
            <button className="action-icon" aria-label="Delete">
              <Trash2 size={14} />
            </button>
            <button className="action-icon" aria-label="More options">
              <MoreHorizontal size={14} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileOrderCard;
