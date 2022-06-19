import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, createContext } from "react";

import UserSelection from "./pages/MainPage/UserSelection";
import Login from "./pages/MainPage/Login";
import AddUsers from "./pages/MainPage/AddUsers";
import Order from "./pages/OrderTabComponents/Order";
import ScrollToTopBtn from "./pages/GeneralComponents/ScrollToTopBtn";
import KitchenMainPage from "./pages/KitchenComponents/KitchenMainPage";

// export const stateContext = createContext();

import ViewMainCashier from "./pages/CashierComponents/ViewMainCashier";
import ViewReceipt from "./pages/CashierComponents/ViewReceipt";
import ViewTableBill from "./pages/CashierComponents/ViewTableBill";

export const stateContext = createContext();

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<UserSelection setUser={setUser} user={user} />}
          >
            <Route path="/login" element={<Login user={user} />} />
            <Route path="/users/new" element={<AddUsers />} />
          </Route>

          <Route path="/menu" element={<Order />} />
          <Route path="/kitchen" element={<KitchenMainPage />} />
          <Route path="/cashier" element={<ViewMainCashier />} />
          <Route path="/tablebill" element={<ViewTableBill />} />
          <Route path="/receipt" element={<ViewReceipt />} />
        </Routes>
        <ScrollToTopBtn />
      </BrowserRouter>
    </div>
  );
}

export default App;
