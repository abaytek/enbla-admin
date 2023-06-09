import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from 'moment'

const List = ({ rows }) => {
  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 850 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Order ID</TableCell>
            <TableCell className='tableCell'>User ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Shipping Adress</TableCell>
            <TableCell className='tableCell'>Currency</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow key={row?._id}>
              <TableCell className='tableCell'>{row?._id}</TableCell>
              <TableCell className='tableCell'>{row?.customerId}</TableCell>
              <TableCell className='tableCell'>
                <div className='cellWrapper'>
                  {/* <img src={row.img} alt='' className='image' /> */}
                  {row?.products.map((prod) => (
                    <TableCell className='tableCell'>{prod.name}</TableCell>
                  ))}
                </div>
              </TableCell>
              <TableCell className='tableCell'>
                {row?.customer.first_name + " " + row?.customer.last_name}
              </TableCell>
              <TableCell className='tableCell'>{moment(row?.orderDate).fromNow()}</TableCell>
              <TableCell className='tableCell'>{row?.totalPrice}</TableCell>
              <TableCell className='tableCell'>
                {row?.shippingAddress.address}
              </TableCell>
              <TableCell className='tableCell'>{row?.currency}</TableCell>
              <TableCell className='tableCell'>
                <span className={`status ${row?.paymentStatus}`}>
                  {row?.paymentStatus}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
