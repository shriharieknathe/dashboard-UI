import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Order, getStatusColor, getStatusText } from './constants';

interface OrderTableProps {
  orders: Order[];
  selectedIds: Set<string>;
  allCurrentSelected: boolean;
  someCurrentSelected: boolean;
  onToggleSelectAll: (checked: boolean) => void;
  onToggleSelectRow: (id: string, checked: boolean) => void;
}

const OrderTable: React.FC<OrderTableProps> = ({
  orders,
  selectedIds,
  allCurrentSelected,
  someCurrentSelected,
  onToggleSelectAll,
  onToggleSelectRow,
}) => {
  return (
    <div className="order-table-container">
      <table className="order-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                className="checkbox"
                checked={allCurrentSelected}
                ref={(el) => {
                  if (el) el.indeterminate = someCurrentSelected;
                }}
                onChange={(e) => onToggleSelectAll(e.target.checked)}
              />
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
          {orders.map((order, index) => (
            <motion.tr
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <td>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={selectedIds.has(order.id)}
                  onChange={(e) =>
                    onToggleSelectRow(order.id, e.target.checked)
                  }
                />
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
              <td className="project">
                <span title={order.project}>{order.project}</span>
              </td>
              <td className="address">
                <span title={order.address}>{order.address}</span>
              </td>
              <td className="date">
                <Calendar size={14} />
                <span>{order.date}</span>
              </td>
              <td className="status">
                <div
                  className={`status-indicator ${getStatusColor(
                    order.status
                  )}`}
                >
                  <span className="status-dot"></span>
                  <span className="status-text">
                    {getStatusText(order.status)}
                  </span>
                </div>
              </td>
              <td className="actions">
                <div className="action-btn">•••</div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
