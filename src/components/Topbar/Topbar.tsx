import { Menu } from "lucide-react";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import Icon from "../icon/icon";
import SearchInput from "../common/SearchInput/SearchInput";
import "./Topbar.scss";

interface TopbarProps {
  onMobileMenuClick?: () => void;
  onMobileRightbarClick?: () => void;
}

const Topbar: React.FC<TopbarProps> = ({
  onMobileMenuClick,
  onMobileRightbarClick,
}) => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const { theme, toggleTheme } = useTheme();

  // Check if we should show rightbar toggle (hide on order list pages)
  const shouldShowRightbarToggle =
    !location.pathname.includes("order") &&
    !location.pathname.includes("projects");

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
        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={onMobileMenuClick}
          aria-label="Toggle mobile menu"
        >
          <Menu size={20} />
        </button>

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
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search"
            size="small"
            variant="compact"
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
              height="20"
              width="20"
            />
          </button>
          <button className="icon-btn" aria-label="Clock">
            <Icon
              name={`${theme === "light" ? "clock" : "dark_clock"}`}
              height="20"
              width="20"
            />
          </button>
          <button className="icon-btn" aria-label="Notifications">
            <Icon
              name={`${theme === "light" ? "bell" : "dark_bell"}`}
              height="16"
              width="17"
            />
          </button>
          <button
            className="icon-btn"
            aria-label="Docs"
            onClick={
              shouldShowRightbarToggle ? onMobileRightbarClick : undefined
            }
          >
            <Icon
              name={`${theme === "light" ? "side_bar" : "dark_side_bar"}`}
              height="18"
              width="16"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
