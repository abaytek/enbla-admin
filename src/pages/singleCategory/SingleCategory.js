import "./singleCategory.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import {getCategoryById, getCategories} from '../../utils/api'
import {urlFor} from '../../config/sanity'
import {Navigate} from 'react-router-dom'

const SingleCategory = () => {
  const [data, setData] = useState({});
  const [categories, setCategories] = useState([])
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCatById =  () => {
      setLoading(true);
        getCategoryById(categoryId).then(category => {
          setData(category)
          console.log(category)
          setLoading(false)
        }).catch(err => {
          setError(true)
        })
    };
    const fetchCat =  () => {
      setLoading(true);
      getCategories().then(category => {
          setCategories(category)
          console.log(categories)
          setLoading(false)
        }).catch(err => {
          setError(true)
      })
    };
    fetchCatById(categoryId);
    fetchCat();
  }, [categoryId]);


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
                    <span className='itemKey'>Description:</span>
                    <span className='itemValue'>{data[0]?.description}</span>
                  </div>
                </div>
                <div className="right">
                  <div className='dishContainer'>
                    <h1 className='itemTitle'>
                      All Categories
                    </h1>
                    {categories?.map(category => (
                      <div className='dish' onClick={<Navigate to={`/categories/${category._id}`}/>}>
                        <div style={{display:'flex', alignItems:'center'}}>
                          <img className='dishImage' src={category?.image && urlFor(category.image)} alt={category.name} />    
                          <p>{category?.name}</p>
                        </div>
                      </div>
                    ))}
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

export default SingleCategory;
