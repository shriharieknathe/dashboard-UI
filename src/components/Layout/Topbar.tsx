import { Bell, Clock, Search } from "lucide-react";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import Icon from "../icon/icon";
import "./Topbar.scss";

const Topbar: React.FC = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const { theme, toggleTheme } = useTheme();

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
          <button className="breadcrumb-btn" aria-label="Menu">
            <Icon
              name={`${theme === "light" ? "side_bar" : "dark_side_bar"}`}
              height="14px"
              width="18px"
            />
          </button>
          <button className="breadcrumb-btn" aria-label="Star">
            <Icon name={"star"} height="18px" width="18px" />
          </button>
          <span className="breadcrumb-text">Dashboards</span>
          <span className="breadcrumb-text" style={{ margin: 0 }}>
            /
          </span>
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
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <Icon
              name={`${theme === "light" ? "torch" : "dark_torch"}`}
              height="20px"
              width="20px"
            />
          </button>
          <button className="icon-btn" aria-label="Clock">
            <Clock size={16} />
          </button>
          <button className="icon-btn" aria-label="Notifications">
            <Bell size={16} />
          </button>
          <button className="icon-btn" aria-label="Docs">
            <Icon
              name={`${theme === "light" ? "side_bar" : "dark_side_bar"}`}
              height="14px"
              width="18px"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
