import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { db } from "../../firebase-config";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import TableSingle from "../../components/orderById/TableSingle";

const Single = () => {
  const [user, setUser] = useState("");
  const { userId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setUser(list.filter((li) => li.id === userId));
        setLoading(false);
      } catch (err) {
        setError(true);
        console.log(err);
      }
    };
    fetchData();
  }, [userId]);

  return (
    <div className='single'>
      <Sidebar />
      <div className='singleContainer'>
        <Navbar />
        {loading ? (
          <CircularProgress
            style={{
              height: "100vh",
              width: "100%",
              maxWidth: "5%",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        ) : (
          <div className='top'>
            <div className='left'>
              <div className='editButton'>Edit</div>
              <h1 className='title'>Information</h1>

              <div className='item'>
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS785biEGWYfQ3kCbvts_QRuNPn7IJpvovN4A&usqp=CAU'
                  alt=''
                  className='itemImg'
                />
                <div className='details'>
                  <h1 className='itemTitle'>
                    {user[0]?.firstName + " " + user[0]?.lastName}
                  </h1>
                  <div className='detailItem'>
                    <span className='itemKey'>Email:</span>
                    <span className='itemValue'>{user[0]?.email}</span>
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Phone:</span>
                    <span className='itemValue'>{user[0]?.phone}</span>
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Address:</span>
                    <span className='itemValue'>{user[0]?.adress}</span>
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Country:</span>
                    <span className='itemValue'>ETHIOPIA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='right'>
              <Chart aspect={3 / 1} title='User Spending ( Last 6 Months)' />
            </div>
          </div>
        )}
        <div className='bottom'>
          <h1 className='title'>Last Transactions</h1>
          <TableSingle userId={userId} />
        </div>
      </div>
    </div>
  );
};

export default Single;
