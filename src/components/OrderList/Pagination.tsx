import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PAGE_SIZE } from './constants';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalItems,
  onPageChange,
}) => {
  const currentSafePage = Math.min(currentPage, totalPages);
  const start = (currentSafePage - 1) * PAGE_SIZE;

  return (
    <div className="pagination-container">
      <div className="pagination-info">
        <span className="pagination-text">
          Showing {start + 1}-
          {Math.min(start + PAGE_SIZE, totalItems)} of{" "}
          {totalItems} orders
        </span>
      </div>
      <div className="pagination">
        <button
          className="pagination-btn"
          disabled={currentSafePage === 1}
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          title="Previous page"
        >
          <ChevronLeft size={16} />
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`pagination-btn ${
              currentSafePage === page ? "active" : ""
            }`}
            onClick={() => onPageChange(page)}
            title={`Go to page ${page}`}
          >
            {page}
          </button>
        ))}
        <button
          className="pagination-btn"
          disabled={currentSafePage === totalPages}
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          title="Next page"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
