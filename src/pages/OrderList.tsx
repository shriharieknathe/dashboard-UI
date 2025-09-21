import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  Calendar,
} from "lucide-react";
import "./OrderList.scss";

const PlusIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.625 1.375C7.625 1.02982 7.34518 0.75 7 0.75C6.65482 0.75 6.375 1.02982 6.375 1.375V6.375H1.375C1.02982 6.375 0.75 6.65482 0.75 7C0.75 7.34518 1.02982 7.625 1.375 7.625H6.375V12.625C6.375 12.9702 6.65482 13.25 7 13.25C7.34518 13.25 7.625 12.9702 7.625 12.625V7.625H12.625C12.9702 7.625 13.25 7.34518 13.25 7C13.25 6.65482 12.9702 6.375 12.625 6.375H7.625V1.375Z"
      fill="#1C1C1C"
    />
  </svg>
);

const FilterIcon = () => (
  <svg
    width="18"
    height="10"
    viewBox="0 0 18 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.625 5C14.625 5.16576 14.5592 5.32473 14.4419 5.44194C14.3247 5.55915 14.1658 5.625 14 5.625H4C3.83424 5.625 3.67527 5.55915 3.55806 5.44194C3.44085 5.32473 3.375 5.16576 3.375 5C3.375 4.83424 3.44085 4.67527 3.55806 4.55806C3.67527 4.44085 3.83424 4.375 4 4.375H14C14.1658 4.375 14.3247 4.44085 14.4419 4.55806C14.5592 4.67527 14.625 4.83424 14.625 5ZM17.125 0.625H0.875C0.70924 0.625 0.550268 0.690848 0.433058 0.808058C0.315848 0.925269 0.25 1.08424 0.25 1.25C0.25 1.41576 0.315848 1.57473 0.433058 1.69194C0.550268 1.80915 0.70924 1.875 0.875 1.875H17.125C17.2908 1.875 17.4497 1.80915 17.5669 1.69194C17.6842 1.57473 17.75 1.41576 17.75 1.25C17.75 1.08424 17.6842 0.925269 17.5669 0.808058C17.4497 0.690848 17.2908 0.625 17.125 0.625ZM10.875 8.125H7.125C6.95924 8.125 6.80027 8.19085 6.68306 8.30806C6.56585 8.42527 6.5 8.58424 6.5 8.75C6.5 8.91576 6.56585 9.07473 6.68306 9.19194C6.80027 9.30915 6.95924 9.375 7.125 9.375H10.875C11.0408 9.375 11.1997 9.30915 11.3169 9.19194C11.4342 9.07473 11.5 8.91576 11.5 8.75C11.5 8.58424 11.4342 8.42527 11.3169 8.30806C11.1997 8.19085 11.0408 8.125 10.875 8.125Z"
      fill="#1C1C1C"
    />
  </svg>
);

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

const PAGE_SIZE = 5;

const statusOrderAsc: Record<Order["status"], number> = {
  approved: 1,
  complete: 2,
  in_progress: 3,
  pending: 4,
  rejected: 5,
};

const OrderList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortMode, setSortMode] = useState<"none" | "statusAsc" | "statusDesc">(
    "none"
  );
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

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

  return (
    <div className="order-list">
      <h1 className="page-title">Order List</h1>
      <div className="filter-bar">
        <div className="actions-group">
          <button className="action-button" aria-label="Add">
            <PlusIcon />
          </button>
          <button
            className="action-button"
            onClick={handleSortClick}
            aria-label="Sort by status"
          >
            <ArrowUpDown size={14} />
          </button>
          <button className="action-button" aria-label="Filter">
            <FilterIcon />
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
                currentSafePage === page ? "active" : ""
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
