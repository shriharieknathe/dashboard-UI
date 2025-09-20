import { motion } from "framer-motion";
import {
  BookOpen,
  Building,
  ChevronRight,
  CreditCard,
  FolderOpen,
  GraduationCap,
  LayoutDashboard,
  Share2,
  ShoppingBag,
  Star,
  User,
} from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.scss";

interface NavItem {
  id: string;
  title: string;
  icon?: React.ComponentType<any>;
  path?: string;
  children?: NavItem[];
  isExpanded?: boolean;
}

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([
    "favorites",
    "dashboards",
    "pages",
    "user-profile",
  ]);

  const navigationItems: NavItem[] = [
    {
      id: "favorites",
      title: "Favorites",
      children: [
        { id: "overview", title: "Overview", icon: Star, path: "/overview" },
        {
          id: "projects",
          title: "Projects",
          icon: FolderOpen,
          path: "/projects",
        },
      ],
    },
    {
      id: "recently",
      title: "Recently",
      children: [],
    },
    {
      id: "dashboards",
      title: "Dashboards",
      children: [
        {
          id: "default",
          title: "Default",
          icon: LayoutDashboard,
          path: "/dashboard",
        },
        {
          id: "ecommerce",
          title: "eCommerce",
          icon: ShoppingBag,
          path: "/ecommerce",
        },
        {
          id: "projects-dash",
          title: "Projects",
          icon: FolderOpen,
          path: "/projects",
        },
        {
          id: "online-courses",
          title: "Online Courses",
          icon: GraduationCap,
          path: "/online-courses",
        },
      ],
    },
    {
      id: "pages",
      title: "Pages",
      children: [
        {
          id: "user-profile",
          title: "User Profile",
          icon: User,
          children: [
            {
              id: "overview-profile",
              title: "Overview",
              path: "/profile/overview",
            },
            {
              id: "projects-profile",
              title: "Projects",
              path: "/profile/projects",
            },
            { id: "campaigns", title: "Campaigns", path: "/profile/campaigns" },
            { id: "documents", title: "Documents", path: "/profile/documents" },
            { id: "followers", title: "Followers", path: "/profile/followers" },
          ],
        },
        { id: "account", title: "Account", icon: CreditCard, path: "/account" },
        {
          id: "corporate",
          title: "Corporate",
          icon: Building,
          path: "/corporate",
        },
        { id: "blog", title: "Blog", icon: BookOpen, path: "/blog" },
        { id: "social", title: "Social", icon: Share2, path: "/social" },
      ],
    },
  ];

  const toggleExpanded = (itemId: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const isExpanded = (itemId: string) => expandedItems.includes(itemId);
  const isActive = (path?: string) => {
    if (!path) return false;
    // Special case for default dashboard on home page
    if (
      path === "/dashboard" &&
      (location.pathname === "/" || location.pathname === "/dashboard")
    ) {
      return true;
    }
    return location.pathname === path;
  };

  const renderNavItem = (item: NavItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isItemExpanded = isExpanded(item.id);
    const isItemActive = isActive(item.path);

    return (
      <div key={item.id} className="nav-item">
        {level === 0 ? (
          // Section headers
          <div
            className="nav-header"
            onClick={() => hasChildren && toggleExpanded(item.id)}
          >
            <span className="nav-title">{item.title}</span>
            {hasChildren && (
              <motion.div
                animate={{ rotate: isItemExpanded ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                className="nav-chevron"
              >
                <ChevronRight size={12} />
              </motion.div>
            )}
          </div>
        ) : (
          // Navigation links
          <Link
            to={item.path || "#"}
            className={`nav-link ${
              isItemActive ? "active" : ""
            } level-${level}`}
            onClick={() => hasChildren && toggleExpanded(item.id)}
          >
            <div className="nav-link-content">
              {item.icon && <item.icon size={16} className="nav-icon" />}
              <span className="nav-text">{item.title}</span>
              {hasChildren && (
                <motion.div
                  animate={{ rotate: isItemExpanded ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="nav-chevron"
                >
                  <ChevronRight size={12} />
                </motion.div>
              )}
            </div>
          </Link>
        )}

        {hasChildren && isItemExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="nav-children"
          >
            {item.children?.map((child) => renderNavItem(child, level + 1))}
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="brand">
          <div className="brand-icon">⚡</div>
          <span className="brand-text">ByeWind</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navigationItems.map((item) => renderNavItem(item))}
      </nav>
    </div>
  );
};

export default Sidebar;
