export interface Order {
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

export const PAGE_SIZE = 5;

export const statusOrderAsc: Record<Order["status"], number> = {
  approved: 1,
  complete: 2,
  in_progress: 3,
  pending: 4,
  rejected: 5,
};

export const MOCK_ORDERS: Order[] = [
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

// Helper functions
export const getStatusColor = (status: Order["status"]) => {
  const colors = {
    in_progress: "progress",
    complete: "success",
    pending: "pending",
    approved: "approved",
    rejected: "error",
  } as const;
  return colors[status];
};

export const getStatusText = (status: Order["status"]) => {
  const texts = {
    in_progress: "In Progress",
    complete: "Complete",
    pending: "Pending",
    approved: "Approved",
    rejected: "Rejected",
  } as const;
  return texts[status];
};
