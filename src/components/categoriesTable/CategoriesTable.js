import "./categoriesTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { categoryColumns } from "../../datatablesource";
import { useEffect } from "react";
import {getCategories} from "../../utils/api"
import sanityClient from '../../config/sanity';



const CategoriesTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true)
    getCategories().then(category => {
      setData(category)
      setLoading(false)
    }).catch(err => {
      console.log(err)
      setError(true)
  })
  }, []);

   const handleDelete =async (id) => {
     sanityClient.delete(id).then(setData(data.filter(dish => dish._id !== id))).catch(err => console.log(err))
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
              to={`/categories/${params.row._id}`}
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
        Add New Category
        <Link to='/categories/new' className='link'>
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
          columns={categoryColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
          getRowId={(row) => row._id + row.name}
        />
      )}
      {error && <h3>Something Went Wrong</h3>}
    </div>
  );
};

export default CategoriesTable;
