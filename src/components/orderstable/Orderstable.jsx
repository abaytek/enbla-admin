import "./orderstable.scss";
// import { DataGrid } from "@mui/x-data-grid";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { ordersColumns, ordersRow } from "../../datatablesource";
import { useEffect } from "react";
import Table from "../table/Table";

import {paymentApi} from '../../utils/paymentApi'

const Orderstable = () => {
  // const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const getOrders = () => {
      setLoading(true);
      fetch(`${paymentApi}/order/getOrders`)
        .then((orders) => orders.json())
        .then((data) => {
          setRows(data)
          setLoading(false)
        })
        .catch((err) => {
          setError(true)
        });
    };
    getOrders();
  }, []);

  // const actionColumn = [
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 200,
  //     renderCell: (params) => {
  //       return (
  //         <div className='cellAction'>
  //           <Link
  //             to={`/users/${params.row.id}`}
  //             style={{ textDecoration: "none" }}
  //           >
  //             <div className='viewButton'>View</div>
  //           </Link>
  //           <div
  //             className='deleteButton'
  //             //   onClick={() => handleDelete(params.row.id)}
  //           >
  //             Delete
  //           </div>
  //         </div>
  //       );
  //     },
  //   },
  // ];
  return (
    <div className='datatable'>
      <div className='datatableTitle'>
        View Orders
        
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
        <div className='listContainer'>
          <Table rows={rows} />
        </div>
        // <DataGrid
        //   className='datagrid'
        //   rows={rows}
        //   columns={ordersColumns.concat(actionColumn)}
        //   pageSize={9}
        //   rowsPerPageOptions={[9]}
        //   checkboxSelection
        // />
      )}
      {error && <h3>Something Went Wrong</h3>}
    </div>
  );
};

export default Orderstable;
