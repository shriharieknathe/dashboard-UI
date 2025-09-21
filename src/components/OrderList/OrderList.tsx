import React, { useMemo, useState } from "react";
import { MOCK_ORDERS, PAGE_SIZE, statusOrderAsc } from "./constants";
import FilterBar from "./FilterBar";
import OrderTable from "./OrderTable";
import MobileOrdersContainer from "./MobileOrdersContainer";
import Pagination from "./Pagination";
import "./OrderList.scss";

type SortMode = "none" | "statusAsc" | "statusDesc";

const OrderList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortMode, setSortMode] = useState<SortMode>("none");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [, setIsMobile] = useState(false);

  // Check if we're on mobile/tablet
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024); // Include tablet breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Filter and sort orders
  const filteredOrders = useMemo(() => {
    const q = searchQuery.toLowerCase();
    const base = MOCK_ORDERS.filter(
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
  }, [searchQuery, sortMode]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredOrders.length / PAGE_SIZE));
  const currentSafePage = Math.min(currentPage, totalPages);
  const start = (currentSafePage - 1) * PAGE_SIZE;
  const pagedOrders = filteredOrders.slice(start, start + PAGE_SIZE);

  // Selection helpers
  const allCurrentSelected = pagedOrders.every((o) => selectedIds.has(o.id));
  const someCurrentSelected =
    !allCurrentSelected && pagedOrders.some((o) => selectedIds.has(o.id));

  // Event handlers
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
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

  return (
    <div className="order-list">
      <h1 className="page-title">Order List</h1>
      
      <FilterBar
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onSortClick={handleSortClick}
      />

      <OrderTable
        orders={pagedOrders}
        selectedIds={selectedIds}
        allCurrentSelected={allCurrentSelected}
        someCurrentSelected={someCurrentSelected}
        onToggleSelectAll={toggleSelectAllCurrent}
        onToggleSelectRow={toggleSelectRow}
      />

      <MobileOrdersContainer
        orders={pagedOrders}
        selectedIds={selectedIds}
        onToggleSelectRow={toggleSelectRow}
        currentPage={currentPage}
        totalItems={filteredOrders.length}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={filteredOrders.length}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default OrderList;