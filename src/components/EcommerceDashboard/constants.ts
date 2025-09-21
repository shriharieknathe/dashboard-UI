// Chart data interfaces
export interface ProjectionData {
  month: string;
  actual: number;
  projection: number;
}

export interface RevenueData {
  month: string;
  current: number;
  previous: number;
}

export interface ProductData {
  id: number;
  name: string;
  price: string;
  quantity: number;
  amount: string;
}

export interface SalesData {
  name: string;
  value: number;
  color: string;
}

export interface LocationData {
  city: string;
  value: string;
  percentage: number;
}

// Chart data
export const projectionsData: ProjectionData[] = [
  { month: "Jan", actual: 16, projection: 4 },
  { month: "Feb", actual: 20, projection: 5 },
  { month: "Mar", actual: 17, projection: 4 },
  { month: "Apr", actual: 22, projection: 6 },
  { month: "May", actual: 14, projection: 4 },
  { month: "Jun", actual: 20, projection: 5 },
];

export const revenueData: RevenueData[] = [
  { month: "Jan", current: 24, previous: 22 },
  { month: "Feb", current: 28, previous: 25 },
  { month: "Mar", current: 22, previous: 28 },
  { month: "Apr", current: 30, previous: 27 },
  { month: "May", current: 26, previous: 30 },
  { month: "Jun", current: 32, previous: 29 },
  { month: "Jul", current: 29, previous: 33 },
  { month: "Aug", current: 35, previous: 30 },
  { month: "Sep", current: 31, previous: 36 },
  { month: "Oct", current: 38, previous: 32 },
  { month: "Nov", current: 34, previous: 40 },
  { month: "Dec", current: 40, previous: 35 },
];

export const productsData: ProductData[] = [
  {
    id: 1,
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: 82,
    amount: "$6,518.18",
  },
  {
    id: 2,
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: 37,
    amount: "$4,754.50",
  },
  {
    id: 3,
    name: "Half Sleeve Shirt",
    price: "$39.99",
    quantity: 64,
    amount: "$2,559.36",
  },
  {
    id: 4,
    name: "Lightweight Jacket",
    price: "$20.00",
    quantity: 184,
    amount: "$3,680.00",
  },
  {
    id: 5,
    name: "Marco Shoes",
    price: "$79.49",
    quantity: 64,
    amount: "$1,965.81",
  },
];

export const salesData: SalesData[] = [
  { name: "Direct", value: 300.56, color: "var(--chart-pie-direct)" },
  { name: "Affiliate", value: 135.18, color: "var(--chart-pie-affiliate)" },
  { name: "Sponsored", value: 154.02, color: "var(--chart-pie-sponsored)" },
  { name: "E-mail", value: 48.96, color: "var(--chart-pie-email)" },
];

export const locations: LocationData[] = [
  { city: "New York", value: "72K", percentage: 72 },
  { city: "San Francisco", value: "39K", percentage: 39 },
  { city: "Sydney", value: "25K", percentage: 25 },
  { city: "Singapore", value: "61K", percentage: 61 },
];

// Chart configuration
export const CHART_CONFIG = {
  projections: {
    margin: { top: 10, right: 0, left: -25, bottom: 0 },
    yAxisDomain: [0, 30],
    yAxisTicks: [0, 10, 20, 30],
    barSize: 20,
  },
  revenue: {
    yAxisFormatter: (v: number) => `${v}M`,
  },
  pie: {
    width: 160,
    height: 160,
    cx: 80,
    cy: 80,
    innerRadius: 50,
    outerRadius: 70,
    paddingAngle: 2,
  },
} as const;

// Revenue legend data
export const REVENUE_LEGEND = {
  current: { label: "Current Week $58,211", className: "current" },
  previous: { label: "Previous Week $68,768", className: "previous" },
} as const;

// Total sales percentage
export const TOTAL_SALES_PERCENTAGE = "38.6%";
