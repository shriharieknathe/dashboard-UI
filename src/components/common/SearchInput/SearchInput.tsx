import React from 'react';
import { Search } from 'lucide-react';
import './SearchInput.scss';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'compact' | 'mobile';
  disabled?: boolean;
  autoFocus?: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
  size = "medium",
  variant = "default",
  disabled = false,
  autoFocus = false,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const containerClasses = [
    'search-input-container',
    `search-input-container--${size}`,
    `search-input-container--${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      <Search 
        size={size === 'small' ? 14 : size === 'large' ? 20 : 16} 
        className="search-input-icon" 
      />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        autoFocus={autoFocus}
        className="search-input-field"
      />
    </div>
  );
};

export default SearchInput;
