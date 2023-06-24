import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FoodBank } from "@mui/icons-material";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const { set } = useContext(AuthContext);
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{ textDecoration: "none" }}>
          <span className='logo'>እንብላ</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <Link to='/' style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className='title'>LISTS</p>
          <Link to='/users' style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className='icon' />
              <span>Users</span>
            </li>
          </Link>
          <Link to='/restaurant' style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className='icon' />
              <span>Restaurants</span>
            </li>
          </Link>
          <Link to='/orders' style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className='icon' />
              <span>Orders</span>
            </li>
          </Link>
          <Link to='/dishes' style={{ textDecoration: "none" }}>
            <li>
              <FoodBank className='icon' />
              <span>Dishes</span>
            </li>
          </Link>
          <Link to='/categories' style={{ textDecoration: "none" }}>
            <li>
              <FoodBank className='icon' />
              <span>Categories</span>
            </li>
          </Link>
          <p className='title'>USEFUL</p>
          <li>
            <InsertChartIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className='icon' />
            <span>Notifications</span>
          </li>
          <p className='title'>USER</p>
          <li onClick={() => set({ type: "LOGOUT" })}>
            <ExitToAppIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div
          className='colorOption'
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className='colorOption'
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
