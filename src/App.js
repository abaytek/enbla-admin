import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import NewDish from "./pages/newDish/NewDish";
import NewRestaurant from "./pages/newRestaurant/NewRestaurant";
import NewCategory from "./pages/newCategory/NewCategory";
import SingleRestaurant from "./pages/singleRestaurant/SingleRestaurant"
import SingleDish from "./pages/singleDish/SingleDish"
import SingleCategory from "./pages/singleCategory/SingleCategory"





import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, dishInputs, restaurantInputs, userInputs, categoryInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to='/login' />;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route path='login' element={<Login />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path='users'>
              <Route
                index
                element={
                  <RequireAuth>
                    <List type='users' />
                  </RequireAuth>
                }
              />
              <Route
                path=':userId'
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path='new'
                element={
                  <RequireAuth>
                    <New inputs={userInputs} title='Add New User' />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path='restaurant'>
              <Route
                index
                element={
                  <RequireAuth>
                    <List type='restaurants' />
                  </RequireAuth>
                }
              />
              <Route
                path=':restaurantId'
                element={
                  <RequireAuth>
                    <SingleRestaurant />
                  </RequireAuth>
                }
              />
              <Route
                path='new'
                element={
                  <RequireAuth>
                    <NewRestaurant inputs={restaurantInputs} title='Add New Restaurant' />
                  </RequireAuth>
                }
              />
            </Route>

            <Route path='orders'>
              <Route
                index
                element={
                  <RequireAuth>
                    <List type='orders' />
                  </RequireAuth>
                }
              />
              <Route
                path=':orderId'
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
            </Route>

            <Route path='dishes'>
              <Route
                index
                element={
                  <RequireAuth>
                    <List type='dishes' />
                  </RequireAuth>
                }
              />
              <Route
                path=':dishId'
                element={
                  <RequireAuth>
                    <SingleDish />
                  </RequireAuth>
                }
              />
              <Route
                path='new'
                element={
                  <RequireAuth>
                    <NewDish inputs={dishInputs} title='Add New Dish' />
                  </RequireAuth>
                }
              />
            </Route>

            <Route path='categories'>
              <Route
                index
                element={
                  <RequireAuth>
                    <List type='categoris' />
                  </RequireAuth>
                }
              />
              <Route
                path=':categoryId'
                element={
                  <RequireAuth>
                    <SingleCategory />
                  </RequireAuth>
                }
              />
              <Route
                path='new'
                element={
                  <RequireAuth>
                    <NewCategory inputs={categoryInputs} title='Add New Category' />
                  </RequireAuth>
                }
              />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
