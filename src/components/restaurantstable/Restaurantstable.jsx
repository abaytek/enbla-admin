import "./restaurantstable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { restaurantColumns, restaurantRows } from "../../datatablesource";
import { useEffect } from "react";
import {getRestaurants} from "../../utils/api"
import sanityClient from '../../config/sanity';

const Restaurantstable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true)
    getRestaurants().then(restaurant => {
      setData(restaurant)
      setLoading(false)
    }).catch(err => {
      console.log(err)
      setError(true)
      setLoading(false)
    })
  }, []);
  const handleDelete =async (id) => {
    await sanityClient.delete(id).then(setData(data.filter(restaurant => restaurant._id !== id))).catch(err => console.log(err))
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='cellAction'>
            <Link
              to={`/restaurant/${params.row._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className='viewButton'>View</div>
            </Link>
            <div
              className='deleteButton'
                onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className='datatable'>
      <div className='datatableTitle'>
        Add New Restaurant
        <Link to='/restaurant/new' className='link'>
          Add New
        </Link>
      </div>
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
        <DataGrid
          className='datagrid'
          rows={data}
          columns={restaurantColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
          getRowId={(row) => row._id}
        />
      )}
      {error && <h3>Something Went Wrong</h3>}
    </div>
  );
};

export default Restaurantstable;
