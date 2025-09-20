import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { 
  Search, 
  Star, 
  LayoutGrid,
  Sun,
  Clock,
  Bell,
  FileText
} from "lucide-react";
import "./Topbar.scss";

const Topbar: React.FC = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  // Get page title based on route
  const getPageTitle = () => {
    const path = location.pathname;
    if (path.includes("ecommerce") || path === "/") return "Default";
    if (path.includes("orders") || path.includes("projects"))
      return "Order List";
    if (path.includes("dashboard")) return "Default";
    return "Default";
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="breadcrumb">
          <button className="breadcrumb-btn">
            <LayoutGrid size={16} />
          </button>
          <button className="breadcrumb-btn">
            <Star size={16} />
          </button>
          <span className="breadcrumb-text">Dashboards</span>
          <span className="breadcrumb-current">{getPageTitle()}</span>
        </div>
      </div>

      <div className="topbar-right">
        <div className="search-container">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="icons-container">
          <button className="icon-btn">
            <Sun size={16} />
          </button>
          <button className="icon-btn">
            <Clock size={16} />
          </button>
          <button className="icon-btn">
            <Bell size={16} />
          </button>
          <button className="icon-btn">
            <FileText size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
