import React from 'react';
import { ArrowUpDown, Plus } from 'lucide-react';
import Icon from '@/components/icon/icon';
import SearchInput from '@/components/common/SearchInput/SearchInput';
import { useTheme } from '@/contexts/ThemeContext';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onSortClick: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  onSearchChange,
  onSortClick,
}) => {
  const { theme } = useTheme();

  return (
    <div className="filter-bar">
      <div className="actions-group">
        <button className="action-button" aria-label="Add">
          <Plus size={14} />
        </button>
        <button
          className="action-button"
          onClick={onSortClick}
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
        <SearchInput
          value={searchQuery}
          onChange={onSearchChange}
          placeholder="Search"
          size="small"
          variant="default"
        />
      </div>
    </div>
  );
};

export default FilterBar;
