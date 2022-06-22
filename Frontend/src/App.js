import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, createContext } from "react";

import UserSelection from "./pages/MainPage/UserSelection";
import Login from "./pages/MainPage/Login";
import AddUsers from "./pages/MainPage/AddUsers";
import Order from "./pages/OrderTabComponents/Order";
import ScrollToTopBtn from "./pages/GeneralComponents/ScrollToTopBtn";

import FoodItem from "./pages/OrderTabComponents/FoodItem";

import KitchenMainPage from "./pages/KitchenComponents/ViewMainKitchen";

import ViewMainCashier from "./pages/CashierComponents/ViewMainCashier";
import ViewReceipt from "./pages/CashierComponents/ViewReceipt";
import ViewTableBill from "./pages/CashierComponents/ViewTableBill";

export const stateContext = createContext();

function App() {
  const [user, setUser] = useState({ category: null, username: "" });
  console.log("user", user);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<UserSelection setUser={setUser} user={user} />}
          >
            <Route
              path="/login"
              element={<Login user={user} setUser={setUser} />}
            />
            <Route path="/users/new" element={<AddUsers />} />
          </Route>

          <Route path="/menu" element={<Order user={user} />} />
          <Route path="/menu/food/:id" element={<FoodItem user={user} />} />

          <Route path="/kitchen" element={<KitchenMainPage user={user} />} />
          <Route path="/cashier" element={<ViewMainCashier user={user} />} />
          <Route
            path="/tablebill/:tblNum"
            element={<ViewTableBill user={user} />}
          />
          <Route
            path="/tablebill/:tblNum/edit"
            element={<ViewTableBill user={user} />}
          />
          <Route
            path="/receipt/:tblNum"
            element={<ViewReceipt user={user} />}
          />
        </Routes>
        <ScrollToTopBtn />
      </BrowserRouter>
    </div>
  );
}

export default App;
