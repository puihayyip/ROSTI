import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, createContext } from "react";

import UserSelection from "./pages/UserSelection";
import Login from "./pages/Login";
import AddUsers from "./pages/AddUsers";
import Order from "./pages/OrderTabComponents/Order";
import ScrollToTopBtn from "./pages/GeneralComponents/ScrollToTopBtn";

import CashierMainView from "./pages/CashierComponents/CashierMainView";

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
          </Route>

          <Route path="/users/new" element={<AddUsers />} />
          <Route path="/menu" element={<Order />} />
          <Route path="/cashier" element={<CashierMainView />} />
        </Routes>
        <ScrollToTopBtn />
      </BrowserRouter>
    </div>
  );
}

export default App;
