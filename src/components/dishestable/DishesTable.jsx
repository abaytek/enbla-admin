import "./dishestable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { restaurantColumns, restaurantRows } from "../../datatablesource";
import { useEffect } from "react";
// import {
//     collection,
//     getDocs,
//   deleteDoc,
//   doc,
//   // onSnapshot,
// } from "firebase/firestore";
// import { db } from "../../firebase-config";

const Dishestable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setData(restaurantRows);
  }, []);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       setLoading(true);
  //       let list = [];
  //       try {
  //         const querySnapshot = await getDocs(collection(db, "users"));
  //         querySnapshot.forEach((doc) => {
  //           list.push({ id: doc.id, ...doc.data() });
  //         });
  //         setData(list);
  //         setLoading(false);
  //       } catch (err) {
  //         setError(true);
  //         console.log(err);
  //       }
  //     };
  //     fetchData();

  // LISTEN (REALTIME)
  // const unsub = onSnapshot(
  //   collection(db, "users"),
  //   (snapShot) => {
  //     let list = [];
  //     snapShot.docs.forEach((doc) => {
  //       list.push({ id: doc.id, ...doc.data() });
  //     });
  //     setData(list);
  //   },
  //   (error) => {
  //     console.log(error);
  //   }
  // );

  // return () => {
  //   unsub();
  // };
  //   }, []);

  //   const handleDelete = async (id) => {
  //     try {
  //       await deleteDoc(doc(db, "users", id));
  //       setData(data.filter((item) => item.id !== id));
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='cellAction'>
            <Link
              to={`/users/${params.row.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className='viewButton'>View</div>
            </Link>
            <div
              className='deleteButton'
              //   onClick={() => handleDelete(params.row.id)}
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
        Add New Dish
        <Link to='/dishes/new' className='link'>
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
        />
      )}
      {error && <h3>Something Went Wrong</h3>}
    </div>
  );
};

export default Dishestable;
