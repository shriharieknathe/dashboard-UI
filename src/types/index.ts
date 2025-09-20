// Theme Types
export type Theme = 'light' | 'dark';

// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user' | 'manager';
  status: 'active' | 'inactive' | 'pending';
  lastActive: string;
  joinDate: string;
}

// Dashboard Metrics
export interface Metric {
  id: string;
  title: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down' | 'neutral';
  icon: string;
  color: 'primary' | 'success' | 'warning' | 'error';
}

// Chart Data
export interface ChartData {
  name: string;
  value: number;
  color?: string;
}

export interface TimeSeriesData {
  date: string;
  revenue: number;
  users: number;
  orders: number;
}

// Table Types
export interface TableColumn<T = any> {
  key: keyof T;
  title: string;
  width?: string;
  sortable?: boolean;
  render?: (value: any, record: T) => React.ReactNode;
}

export interface TableData {
  id: string;
  [key: string]: any;
}

// Filter and Search Types
export interface FilterOption {
  label: string;
  value: string;
  count?: number;
}

export interface SortOption {
  field: string;
  direction: 'asc' | 'desc';
}

// Navigation Types
export interface NavItem {
  id: string;
  title: string;
  icon: string;
  path: string;
  badge?: string | number;
  children?: NavItem[];
}

// Component Props
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: boolean;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

// API Response Types
export interface ApiResponse<T = any> {
  data: T;
  message: string;
  success: boolean;
  total?: number;
  page?: number;
  limit?: number;
}

// Context Types
export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export interface SidebarContextType {
  isCollapsed: boolean;
  toggle: () => void;
  collapse: () => void;
  expand: () => void;
}


