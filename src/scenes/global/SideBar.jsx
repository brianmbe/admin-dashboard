import React, { useState } from "react";
import { Link } from "react-router-dom";
// prettier-ignore
import { Sidebar, Menu, SubMenu, MenuItem, sidebarClasses, menuClasses } from "react-pro-sidebar";
// prettier-ignore
import { Box, Typography, useTheme, IconButton, Card, CardContent, Container } from "@mui/material";
import { tokens } from "../../theme/theme";

// Icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import StackedLineChartOutlinedIcon from "@mui/icons-material/StackedLineChartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

// Icons
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";

export default function SideBar() {
  const handleMenuItemClick = (id) => {
    setActiveMenuItem(id);
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("");

  return (
    <Box>
      <Sidebar
        collapsed={isCollapsed}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: colors.grey[600],
            fontWeight: "bold",
            border: "none",
          },
        }}
        style={{
          position: "relative",
          height: "100vh",
        }}
      >
        <Menu
          menuItemStyles={{
            button: ({ level, active }) => {
              if (level === 0)
                return {
                  color:
                    active && theme.palette.mode === "dark" ? "#fff" : "#000",
                  backgroundColor: active ? "#13395e" : undefined,
                  ":hover": {
                    color: "#fff",
                    backgroundColor: "#001E3D",
                    transition: "all ease-in",
                  },
                };
              if (level === 1)
                return {
                  color: active ? "#fff" : "#000",
                  backgroundColor: active ? "#2A474B" : undefined,
                  ":hover": {
                    color: "#fff",
                    backgroundColor: "#133337",
                    transition: "all ease-in",
                  },
                };
            },
          }}
        >
          {/* Logo and menu */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
              backgroundColor: "transparent",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  textTransform="uppercase"
                  color={colors.grey[100]}
                >
                  FirstBank
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <CloseOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* User */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  src="../../assets/brian.jpg"
                  alt="Profie-user"
                  height="70px"
                  width="70px"
                  style={{ borderRadius: "50%", cursor: "pointer" }}
                />
              </Box>
              <Box textAlign="center" mt="10px">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                >
                  Mr. Brian
                </Typography>
                <Typography color={colors.greenAccent[500]}>
                  Admin FirstBank
                </Typography>
              </Box>
            </Box>
          )}

          {/* Menuitems */}
          <SubMenu
            id="account"
            active={activeMenuItem === "account"}
            onClick={() => handleMenuItemClick("account")}
            label="Account"
            icon={<AccountCircleOutlinedIcon />}
            rootStyles={{
              [`.${menuClasses.subMenuContent}`]: {
                backgroundColor: "transparent",
              },
            }}
          >
            <MenuItem
              id="myDetails"
              active={activeMenuItem === "myDetails"}
              onClick={() => handleMenuItemClick("myDetails")}
              icon={<ManageAccountsOutlinedIcon />}
            >
              {" "}
              My details{" "}
            </MenuItem>
            <MenuItem
              id="profile"
              active={activeMenuItem === "profile"}
              onClick={() => handleMenuItemClick("profile")}
              icon={<PersonIcon />}
            >
              {" "}
              Profile{" "}
            </MenuItem>
          </SubMenu>
          <MenuItem
            id="dashboard"
            active={activeMenuItem === "dashboard"}
            onClick={() => handleMenuItemClick("dashboard")}
            icon={<HomeOutlinedIcon />}
            component={<Link to="/" />}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            id="team"
            active={activeMenuItem === "team"}
            onClick={() => handleMenuItemClick("team")}
            icon={<PeopleAltOutlinedIcon />}
            component={<Link to="/team" />}
          >
            {" "}
            Manage team
          </MenuItem>
          <MenuItem
            id="contacts"
            active={activeMenuItem === "contacts"}
            onClick={() => handleMenuItemClick("contacts")}
            icon={<PersonOutlinedIcon />}
            component={<Link to="/contacts" />}
          >
            {" "}
            Contacts Information
          </MenuItem>
          <MenuItem
            id="invoices"
            active={activeMenuItem === "invoices"}
            onClick={() => handleMenuItemClick("invoices")}
            icon={<ReceiptOutlinedIcon />}
            component={<Link to="/invoices" />}
          >
            {" "}
            Invoices Balances
          </MenuItem>
          <MenuItem
            id="profile"
            active={activeMenuItem === "profile"}
            onClick={() => handleMenuItemClick("profile")}
            component={<Link to="/form" />}
            icon={<PersonOutlinedIcon />}
          >
            {" "}
            Profile Form{" "}
          </MenuItem>
          <MenuItem
            id="calendar"
            active={activeMenuItem === "calendar"}
            onClick={() => handleMenuItemClick("calendar")}
            icon={<CalendarTodayOutlinedIcon />}
            component={<Link to="/calendar" />}
          >
            {" "}
            Calendar{" "}
          </MenuItem>
          <MenuItem
            id="faq"
            active={activeMenuItem === "faq"}
            onClick={() => handleMenuItemClick("faq")}
            icon={<HelpOutlineOutlinedIcon />}
            component={<Link to="/faq" />}
          >
            {" "}
            FAQ{" "}
          </MenuItem>
          <MenuItem
            id="bar"
            active={activeMenuItem === "bar"}
            onClick={() => handleMenuItemClick("bar")}
            icon={<BarChartOutlinedIcon />}
            component={<Link to="/bar-chart" />}
          >
            {" "}
            Bar Chart{" "}
          </MenuItem>
          <MenuItem
            id="line"
            active={activeMenuItem === "line"}
            onClick={() => handleMenuItemClick("line")}
            icon={<StackedLineChartOutlinedIcon />}
            component={<Link to="/line-chart" />}
          >
            {" "}
            Bar Chart{" "}
          </MenuItem>
          <MenuItem
            id="pie"
            active={activeMenuItem === "pie"}
            onClick={() => handleMenuItemClick("pie")}
            icon={<PieChartOutlineOutlinedIcon />}
            component={<Link to="/pie-chart" />}
          >
            {" "}
            Pie Chart{" "}
          </MenuItem>
          <MenuItem
            id="geography"
            active={activeMenuItem === "geography"}
            onClick={() => handleMenuItemClick("geography")}
            icon={<MapOutlinedIcon />}
            component={<Link to="/geography" />}
          >
            {" "}
            Pie Chart{" "}
          </MenuItem>
        </Menu>
      </Sidebar>
    </Box>
  );
}
