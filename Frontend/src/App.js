import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, createContext } from "react";

import UserSelection from "./pages/UserSelection";
import Login from "./pages/Login";
import AddUsers from './pages/AddUsers'
import Order from "./pages/OrderTabComponents/Order"
import ViewMainCashier from "./pages/CashierComponents/ViewMainCashier"
import ViewReceipt from "./pages/CashierComponents/ViewReceipt"
import ViewTableBill from "./pages/CashierComponents/ViewTableBill"
import ViewMainKitchen from "./pages/KitchenComponents/ViewMainKitchen";


export const stateContext = createContext();

function App() {
  const [state, setState] = useState({});
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <stateContext.Provider value={[state, setState]}>
        <BrowserRouter>
          {/* <Head /> */}
          <Routes>
            <Route
              path="/"
              element={<UserSelection setUser={setUser} user={user} />}
            >
              <Route path="/login" element={<Login user={user} />} />
            </Route>


            <Route path="/superSecurePath" element={<Order />} />
            <Route path="/cashier" element={<ViewMainCashier />} />
            <Route path="/tablebill" element={<ViewTableBill />} />
            <Route path="/receipt" element={<ViewReceipt />} />
            <Route path="/kitchen" element={<ViewMainKitchen />} />


          </Routes>
        </BrowserRouter>
      </stateContext.Provider>
    </div>
  );
}

export default App;
