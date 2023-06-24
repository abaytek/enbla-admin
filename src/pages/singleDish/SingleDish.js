import "./singleDish.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import {getDishById} from '../../utils/api'
import {urlFor} from '../../config/sanity'

const SingleDish = () => {
  const [data, setData] = useState({});
  const { dishId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
        getDishById(dishId).then(dish => {
          setData(dish)
          console.log(dish)
          setLoading(false)
        }).catch(err => {
          setError(true)
        })
    };
    fetchData();
  }, [dishId]);

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
                  src={data[0]?.image && urlFor(data[0]?.image)}
                  alt={data[0]?.name}
                  className='itemImg'
                />
                <div className='details'>
                  <h1 className='itemTitle'>
                    {data[0]?.name}
                  </h1>
                  <div className='detailItem'>
                    <span className='itemKey'>Price:</span>
                    <span className='itemValue'>{data[0]?.price}</span>
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Description:</span>
                    <span className='itemValue'>{data[0]?.description}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default SingleDish;
