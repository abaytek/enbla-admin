import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  // onSnapshot,
} from "firebase/firestore";

import {paymentApi} from '../../utils/paymentApi'

const Widget = ({ type, rows }) => {
  let data;
  const [total, setTotal] = useState(0);
  const [numberOfUser, setNumberOfUser] = useState(0) 
  useEffect(() => {
    const getOrders = () => {
      fetch(`${paymentApi}/order/getTotalSell`)
        .then((orders) => orders.json())
        .then((data) => setTotal(data))
        .catch((err) => console.log(err));
    };
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setNumberOfUser(list.length);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    getOrders();
  }, []);

  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        amount:numberOfUser,
        link: "See all users",
        goto:'/users',
        icon: (
          <PersonOutlinedIcon
            className='icon'
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            
            }}
          />
        )
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        amount: rows?.length,
        link: "View all orders",
        goto:'/orders',
        icon: (
          <ShoppingCartOutlinedIcon
            className='icon'
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        amount: total,
        link: "",
        goto:'/orders',
        icon: (
          <MonetizationOnOutlinedIcon
            className='icon'
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        amount: total,
        link: "",
        goto:'/orders',
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className='icon'
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>
          {data.isMoney ? `ETB ${data.amount}` : `${data.amount}`}
        </span>
        <Link to={data.goto} className='link'>{data.link}</Link>
      </div>
      <div className='right'>
        <div className='percentage positive'>
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
