import { motion } from "framer-motion";
import {
  ChevronRight
} from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../../components/icon/icon";
import "./Sidebar.scss";

// Custom ByeWindIcon component
const ByeWindIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="12" fill="#292D32" />
    <path
      d="M12 13.0625C13.6929 13.0625 15.0625 11.6929 15.0625 10C15.0625 8.30711 13.6929 6.9375 12 6.9375C10.3071 6.9375 8.9375 8.30711 8.9375 10C8.9375 11.6929 10.3071 13.0625 12 13.0625Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.4375 17.8125C17.4375 15.75 15.25 14.125 12 14.125C8.75 14.125 6.5625 15.75 6.5625 17.8125"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface NavItem {
  id: string;
  title: string;
  icon?: React.ComponentType<any>;
  customIcon?: { name: string; width?: string; height?: string };
  path?: string;
  children?: NavItem[];
  isExpanded?: boolean;
  isStatic?: boolean;
}

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([
    "favorites",
    "dashboards",
    "pages",
    "user-profile",
  ]);

  const clickableIds = ["default", "order-list"];

  // Favorites and Recently items (side by side)
  const favoriteItems: (NavItem & { customIcon?: { name: string; width?: string; height?: string } })[] = [
    {
      id: "overview",
      title: "Overview",
      path: "/overview",
      customIcon: { name: "grey_dot", width: "8px", height: "8px" },
    },
    {
      id: "projects",
      title: "Projects",
      path: "/projects",
      customIcon: { name: "grey_dot", width: "8px", height: "8px" },
    },
  ];

  // Dashboards
  const dashboardItems: NavItem[] = [
    {
      id: "default",
      title: "Default",
      customIcon: { name: "default", width: "18px", height: "18px" },
      path: "/dashboard",
      isStatic: true,
    },
    {
      id: "ecommerce",
      title: "eCommerce",
      customIcon: { name: "ecommerce", width: "18px", height: "14px" },
      path: "/ecommerce",
      children: [
        { id: "ecom-overview", title: "Overview", path: "/ecommerce" },
        { id: "ecom-products", title: "Products", path: "/ecommerce" },
      ],
    },
    {
      id: "projects-dash",
      title: "Projects",
      customIcon: { name: "projects", width: "18px", height: "14px" },
      path: "/projects",
      children: [
        { id: "order-list", title: "Order List", path: "/order-list" },
        { id: "projects-overview", title: "Overview", path: "/projects" },
      ],
    },
    {
      id: "online-courses",
      title: "Online Courses",
      customIcon: { name: "online_course", width: "18px", height: "16px" },
      path: "/online-courses",
      children: [
        { id: "courses-browse", title: "Browse", path: "/online-courses" },
        { id: "courses-my", title: "My Courses", path: "/online-courses" },
      ],
    },
  ];

  // Pages
  const pageItems: NavItem[] = [
    {
      id: "user-profile",
      title: "User Profile",
      customIcon: { name: "user_profile", width: "14px", height: "18px" },
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
    {
      id: "account",
      title: "Account",
      customIcon: { name: "accounts", width: "18px", height: "14px" },
      children: [
        { id: "account-settings", title: "Settings" },
        { id: "account-billing", title: "Billing" },
      ],
    },
    {
      id: "corporate",
      title: "Corporate",
      customIcon: { name: "corporate", width: "20px", height: "15px" },
      children: [
        { id: "corporate-about", title: "About Us" },
        { id: "corporate-careers", title: "Careers" },
      ],
    },
    {
      id: "blog",
      title: "Blog",
      customIcon: { name: "blog", width: "16px", height: "16px" },
      children: [
        { id: "blog-all", title: "All Posts" },
        { id: "blog-new", title: "Add New" },
      ],
    },
    {
      id: "social",
      title: "Social",
      customIcon: { name: "social", width: "18px", height: "18px" },
      children: [
        { id: "social-feed", title: "Feed" },
        { id: "social-friends", title: "Friends" },
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

  const isActive = (path?: string, id?: string) => {
    if (!id || !clickableIds.includes(id)) {
      return false;
    }
    if (id === "default") {
      return location.pathname === "/" || location.pathname === "/dashboard";
    }
    return location.pathname === path;
  };

  const renderFavoriteItem = (
    item: NavItem & {
      customIcon?: { name: string; width?: string; height?: string };
    }
  ) => {
    const isItemActive = isActive(item.path);
    return (
      <Link
        key={item.id}
        to={item.path || "#"}
        className={`nav-link ${isItemActive ? "active" : ""}`}
      >
        <div className="nav-link-content">
          {item.customIcon ? (
            <Icon
              name={item.customIcon.name}
              width={item.customIcon.width ?? ""}
              height={item.customIcon.height ?? ""}
              color=""
              id=""
              strikeThrough={false}
            />
          ) : (
            item.icon && <item.icon size={16} className="nav-icon" />
          )}
          <span className="nav-text">{item.title}</span>
        </div>
      </Link>
    );
  };

  const renderStaticItem = (item: NavItem) => {
    const isItemActive = isActive(item.path, item.id);
    const isClickable = clickableIds.includes(item.id);

    const content = (
      <div className="nav-link-content">
        {item.customIcon ? (
          <Icon name={item.customIcon.name} width={item.customIcon.width ?? ""} height={item.customIcon.height ?? ""} color="" id="" strikeThrough={false} />
        ) : (
          item.icon && <item.icon size={16} className="nav-icon" />
        )}
        <span className="nav-text">{item.title}</span>
      </div>
    );

    if (isClickable) {
      return (
        <Link
          key={item.id}
          to={item.path || "#"}
          className={`nav-link ${isItemActive ? "active" : ""}`}
        >
          {content}
        </Link>
      );
    }
    return (
      <div key={item.id} className={`nav-link non-clickable`}>
        {content}
      </div>
    );
  };

  const renderAccordionItem = (item: NavItem) => {
    const hasChildren = item.children && item.children.length > 0;
    const isItemExpanded = isExpanded(item.id);
    const isItemActive = isActive(item.path, item.id);

    return (
      <div key={item.id} className="nav-item accordion-item">
        <div
          className={`nav-link accordion-header ${
            isItemActive ? "active" : ""
          }`}
          onClick={() => hasChildren && toggleExpanded(item.id)}
        >
          <div className="nav-link-content">
            {hasChildren && (
              <motion.div
                animate={{ rotate: isItemExpanded ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                className="nav-chevron left-chevron"
              >
                <ChevronRight size={12} />
              </motion.div>
            )}
            {item.customIcon ? (
              <Icon name={item.customIcon.name} width={item.customIcon.width ?? ""} height={item.customIcon.height ?? ""} color="" id="" strikeThrough={false} />
            ) : (
              item.icon && <item.icon size={16} className="nav-icon" />
            )}
            <span className="nav-text">{item.title}</span>
          </div>
        </div>

        {hasChildren && isItemExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="nav-children"
          >
            {item.children?.map((child) => {
              const isChildActive = isActive(child.path, child.id);
              const isClickable = clickableIds.includes(child.id);

              if (isClickable) {
                return (
                  <Link
                    key={child.id}
                    to={child.path || "#"}
                    className={`nav-link child-link ${
                      isChildActive ? "active" : ""
                    }`}
                  >
                    <span className="nav-text">{child.title}</span>
                  </Link>
                );
              }
              return (
                <div
                  key={child.id}
                  className={`nav-link child-link non-clickable`}
                >
                  <span className="nav-text">{child.title}</span>
                </div>
              );
            })}
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="brand">
          <div className="brand-icon">
            <ByeWindIcon />
          </div>
          <span className="brand-text">ByeWind</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {/* Favorites and Recently - Side by Side */}
        <div className="favorites-recently-section">
          <div className="section-headers">
            <span className="section-title">Favorites</span>
            <span className="section-title">Recently</span>
          </div>
          <div className="favorite-items">
            {favoriteItems.map((item) => renderFavoriteItem(item))}
          </div>
        </div>

        {/* Dashboards Section - Static Header */}
        <div className="nav-section">
          <div className="section-header static">
            <span className="section-title">Dashboards</span>
          </div>
          <div className="section-items">
            {dashboardItems.map((item) =>
              item.isStatic ? renderStaticItem(item) : renderAccordionItem(item)
            )}
          </div>
        </div>

        {/* Pages Section - Static Header */}
        <div className="nav-section">
          <div className="section-header static">
            <span className="section-title">Pages</span>
          </div>
          <div className="section-items">
            {pageItems.map((item) =>
              item.isStatic ? renderStaticItem(item) : renderAccordionItem(item)
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
