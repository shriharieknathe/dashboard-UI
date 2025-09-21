import Icon from "@/components/icon/icon";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import {
  ArrowUpDown,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Edit,
  MoreHorizontal,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import React, { useMemo, useState } from "react";
import "./OrderList.scss";

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
  status: "in_progress" | "complete" | "pending" | "approved" | "rejected";
}

const PAGE_SIZE = 10;

const statusOrderAsc: Record<Order["status"], number> = {
  approved: 1,
  complete: 2,
  in_progress: 3,
  pending: 4,
  rejected: 5,
};

  const OrderList: React.FC = () => {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortMode, setSortMode] = useState<"none" | "statusAsc" | "statusDesc">(
    "none"
  );
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile/tablet
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024); // Include tablet breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const orders: Order[] = [
    {
      id: "1",
      orderNumber: "#CM9801",
      user: {
        name: "Natali Craig",
        avatar: "https://i.pravatar.cc/40?img=3",
      },
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "in_progress",
    },
    {
      id: "2",
      orderNumber: "#CM9802",
      user: {
        name: "Kate Morrison",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face",
      },
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: "complete",
    },
    {
      id: "3",
      orderNumber: "#CM9803",
      user: {
        name: "Drew Cano",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      },
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: "pending",
    },
    {
      id: "4",
      orderNumber: "#CM9804",
      user: {
        name: "Orlando Diggs",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      },
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: "approved",
    },
    {
      id: "5",
      orderNumber: "#CM9805",
      user: {
        name: "Andi Lane",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      },
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "rejected",
    },
    {
      id: "6",
      orderNumber: "#CM9801",
      user: {
        name: "Natali Craig",
        avatar: "https://i.pravatar.cc/40?img=3",
      },
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "in_progress",
    },
    {
      id: "7",
      orderNumber: "#CM9802",
      user: {
        name: "Kate Morrison",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face",
      },
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: "complete",
    },
    {
      id: "8",
      orderNumber: "#CM9803",
      user: {
        name: "Drew Cano",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      },
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: "pending",
    },
    {
      id: "9",
      orderNumber: "#CM9804",
      user: {
        name: "Orlando Diggs",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      },
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: "approved",
    },
    {
      id: "10",
      orderNumber: "#CM9805",
      user: {
        name: "Andi Lane",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      },
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "rejected",
    },
  ];

  // Filter by search
  const filteredOrders = useMemo(() => {
    const q = searchQuery.toLowerCase();
    const base = orders.filter(
      (order) =>
        order.user.name.toLowerCase().includes(q) ||
        order.project.toLowerCase().includes(q) ||
        order.orderNumber.toLowerCase().includes(q)
    );
    // Apply sorting
    if (sortMode === "none") return base;
    const mul = sortMode === "statusAsc" ? 1 : -1;
    return [...base].sort(
      (a, b) => (statusOrderAsc[a.status] - statusOrderAsc[b.status]) * mul
    );
  }, [orders, searchQuery, sortMode]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredOrders.length / PAGE_SIZE));
  const currentSafePage = Math.min(currentPage, totalPages);
  const start = (currentSafePage - 1) * PAGE_SIZE;
  const pagedOrders = filteredOrders.slice(start, start + PAGE_SIZE);

  // Selection helpers
  const allCurrentSelected = pagedOrders.every((o) => selectedIds.has(o.id));
  const someCurrentSelected =
    !allCurrentSelected && pagedOrders.some((o) => selectedIds.has(o.id));

  const toggleSelectAllCurrent = (checked: boolean) => {
    const next = new Set(selectedIds);
    if (checked) {
      pagedOrders.forEach((o) => next.add(o.id));
    } else {
      pagedOrders.forEach((o) => next.delete(o.id));
    }
    setSelectedIds(next);
  };

  const toggleSelectRow = (id: string, checked: boolean) => {
    const next = new Set(selectedIds);
    if (checked) next.add(id);
    else next.delete(id);
    setSelectedIds(next);
  };

  const handleSortClick = () => {
    setSortMode((prev) =>
      prev === "none"
        ? "statusAsc"
        : prev === "statusAsc"
        ? "statusDesc"
        : "none"
    );
    setCurrentPage(1);
  };

  // Helpers for status styles/text
  const getStatusColor = (status: Order["status"]) => {
    const colors = {
      in_progress: "progress",
      complete: "success",
      pending: "pending",
      approved: "approved",
      rejected: "error",
    } as const;
    return colors[status];
  };

  const getStatusText = (status: Order["status"]) => {
    const texts = {
      in_progress: "In Progress",
      complete: "Complete",
      pending: "Pending",
      approved: "Approved",
      rejected: "Rejected",
    } as const;
    return texts[status];
  };

  // Mobile card rendering function
  const renderMobileCard = (order: Order, index: number) => (
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
            checked={selectedIds.has(order.id)}
            onChange={(e) => toggleSelectRow(order.id, e.target.checked)}
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
            <div className="customer-email">{order.user.name.toLowerCase().replace(' ', '.')}@example.com</div>
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

  return (
    <div className="order-list">
      <h1 className="page-title">Order List</h1>
      <div className="filter-bar">
        <div className="actions-group">
          <button className="action-button" aria-label="Add">
            <Plus size={14} />
          </button>
          <button
            className="action-button"
            onClick={handleSortClick}
            aria-label="Sort by status"
          >
            <ArrowUpDown size={14} />
          </button>
          <button className="action-button" aria-label="Filter">
            <Icon
              name={`${theme === "light" ? "filter" : "dark_filter"}`}
              width="18"
              height="10"
            />
          </button>
        </div>
        <div className="search-container">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="search-input"
          />
        </div>
      </div>

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
                  onChange={(e) => toggleSelectAllCurrent(e.target.checked)}
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
            {pagedOrders.map((order, index) => (
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
                      toggleSelectRow(order.id, e.target.checked)
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

      {/* Mobile Cards Container */}
      <div className="mobile-orders-container" style={{ minHeight: '200px' }}>
        {pagedOrders.length > 0 ? (
          pagedOrders.map((order, index) => renderMobileCard(order, index))
        ) : (
          <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-secondary)' }}>
            No orders found (Total: {filteredOrders.length}, Page: {currentPage})
          </div>
        )}
      </div>

      <div className="pagination-container">
        <div className="pagination">
          <button
            className="pagination-btn"
            disabled={currentSafePage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          >
            <ChevronLeft size={16} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`pagination-btn ${
                currentPage === page ? "active" : ""
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          <button
            className="pagination-btn"
            disabled={currentSafePage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
