import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import Restaurantstable from "../../components/restaurantstable/Restaurantstable";
import Dishestable from "../../components/dishestable/DishesTable";
import Orderstable from "../../components/orderstable/Orderstable";

const Item = ({ type }) => {
  if (type === "users") return <Datatable />;
  else if (type === "restaurants") return <Restaurantstable />;
  else if (type === "dishes") return <Dishestable />;
  else if (type === "orders") return <Orderstable />;
  else return <Datatable />;
};

const List = ({ type }) => {
  return (
    <div className='list'>
      <Sidebar />
      <div className='listContainer'>
        <Navbar />
        <Item type={type} />
      </div>
    </div>
  );
};

export default List;
