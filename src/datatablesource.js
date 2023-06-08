export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "firstName",
    headerName: "First Name",
    width: 180,
    renderCell: (params) => {
      return (
        <div className='cellWithImg'>
          <img
            className='cellImg'
            src={
              "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            }
            alt='avatar'
          />
          {params.row.firstName}
        </div>
      );
    },
  },
  {
    field: "lastName",
    headerName: "Last Name",
    width: 150,
    renderCell: (params) => {
      return <div className='cellWithImg'>{params.row.lastName}</div>;
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 170,
  },

  {
    field: "adress",
    headerName: "Adress",
    width: 180,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.phone}
        </div>
      );
    },
  },
];
export const userRows = [
  {
    id: 1,
    firstName: "Abebe",
    lastName: "Beso",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "abebebesobela@gmail.com",
    adress: "Arat killo",
    phone: "0955898989",
  },
  {
    id: 2,
    firstName: "Abebe",
    lastName: "Beso",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "abebebesobela@gmail.com",
    adress: "Arat killo",
    phone: "0955898989",
  },
  {
    id: 3,
    firstName: "Abebe",
    lastName: "Beso",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "abebebesobela@gmail.com",
    adress: "Arat killo",
    phone: "0955898989",
  },
  {
    id: 4,
    firstName: "Abebe",
    lastName: "Beso",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "abebebesobela@gmail.com",
    adress: "Arat killo",
    phone: "0955898989",
  },
  {
    id: 5,
    firstName: "Abebe",
    lastName: "Beso",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "abebebesobela@gmail.com",
    adress: "Arat killo",
    phone: "0955898989",
  },
];

// RESTAURANTS DATA
export const restaurantColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "restaurantName",
    headerName: "Restaurant Name",
    width: 180,
    renderCell: (params) => {
      return (
        <div className='cellWithImg'>
          <img
            className='cellImg'
            src={
              "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            }
            alt='avatar'
          />
          {params.row.restaurantName}
        </div>
      );
    },
  },
  {
    field: "adress",
    headerName: "Adress",
    width: 150,
    renderCell: (params) => {
      return <div className='cellWithImg'>{params.row.adress}</div>;
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 170,
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 100,
  },

  {
    field: "dishes",
    headerName: "Dishes",
    width: 180,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.phone}
        </div>
      );
    },
  },
];

export const restaurantRows = [
  {
    id: 1,
    restaurantName: "Maleda Cafe",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "maleda@gmail.com",
    adress: "Arat killo",
    dishes: ["Kitfo", "Kuanta Firfir"],
    phone: "0955898989",
    rating: 4.6,
  },
  {
    id: 2,
    restaurantName: "Maleda Cafe",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "maleda@gmail.com",
    adress: "Arat killo",
    dishes: ["Kitfo", "Kuanta Firfir"],
    phone: "0955898989",
    rating: 4.7,
  },
  {
    id: 3,
    restaurantName: "Maleda Cafe",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "maleda@gmail.com",
    adress: "Arat killo",
    dishes: ["Kitfo", "Kuanta Firfir"],
    phone: "0955898989",
    rating: 4.9,
  },
];

// ORDERS DATA
export const ordersColumns = [
  { field: "id", headerName: "OrderID", width: 70 },
  { field: "userId", headerName: "UserID", width: 70 },
  {
    field: "customer",
    headerName: "Customer",
    width: 150,
  },
  {
    field: "items",
    headerName: "Items",
    width: 180,
    renderCell: (params) => {
      return (
        <div className='cellWithImg'>
          <img
            className='cellImg'
            src={
              "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            }
            alt='avatar'
          />
          {params.row.items}
        </div>
      );
    },
  },
  {
    field: "total",
    headerName: "Total",
    width: 120,
  },
  {
    field: "orderDate",
    headerName: "Order Date",
    width: 120,
  },
  {
    field: "currency",
    headerName: "Currency",
    width: 80,
  },
  {
    field: "status",
    headerName: "Payment Status",
    width: 120,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
  {
    field: "shippingAdress",
    headerName: "Shipping Adress",
    width: 250,
  },
];

export const ordersRow = [
  {
    id: 9,
    userId: 10,
    customer: "Belay Hagos",
    items: ["Pizza", "Burger"],
    total: 340,
    orderDate:"12/12/23",
    currency: "ETB",
    status: "pending",
    shippingAdress: "Bole Medhanialem, Lealem Hintsa",
  },
  {
    id: 10,
    userId: 10,
    customer: "Belay Hagos",
    items: ["Pizza", "Burger"],
    total: 340,
    orderDate:"12/12/23",
    currency: "ETB",
    status: "completed",
    shippingAdress: "Bole Medhanialem, Lealem Hintsa",
  },
];
