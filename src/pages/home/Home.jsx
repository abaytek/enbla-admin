import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
// import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useEffect, useState } from "react";

const Home = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const getOrders = () => {
      fetch("http://localhost:8800/api/order/getLatestOrders")
        .then((orders) => orders.json())
        .then((data) => setRows(data))
        .catch((err) => console.log(err));
    };
    getOrders();
  }, []);
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>
          <Widget type='user' />
          <Widget type='order' rows={rows} />
          <Widget type='earning' rows={rows} />
          <Widget type='balance' rows={rows} />
        </div>
        {/* <div className='charts'>
          <Featured />
          <Chart title='Last 6 Months (Revenue)' aspect={2 / 1} />
        </div> */}
        <div className='listContainer'>
          <div className='listTitle'>Latest Transactions</div>
          <Table rows={rows} />
        </div>
      </div>
    </div>
  );
};

export default Home;
