import React from 'react';
import MobileOrderCard from './MobileOrderCard';
import { Order } from './constants';

interface MobileOrdersContainerProps {
  orders: Order[];
  selectedIds: Set<string>;
  onToggleSelectRow: (id: string, checked: boolean) => void;
  currentPage: number;
  totalItems: number;
}

const MobileOrdersContainer: React.FC<MobileOrdersContainerProps> = ({
  orders,
  selectedIds,
  onToggleSelectRow,
  currentPage,
  totalItems,
}) => {
  return (
    <div className="mobile-orders-container" style={{ minHeight: "200px" }}>
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <MobileOrderCard
            key={order.id}
            order={order}
            index={index}
            isSelected={selectedIds.has(order.id)}
            onToggleSelect={onToggleSelectRow}
          />
        ))
      ) : (
        <div
          style={{
            padding: "20px",
            textAlign: "center",
            color: "var(--text-secondary)",
          }}
        >
          No orders found (Total: {totalItems}, Page: {currentPage})
        </div>
      )}
    </div>
  );
};

export default MobileOrdersContainer;
