import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, createContext } from "react";

import Head from "./pages/Head";
import UserSelection from "./pages/UserSelection";
import Login from './pages/Login'

export const stateContext = createContext();

function App() {
  const [state, setState] = useState({});

  return (
    <div className="App">
      <stateContext.Provider value={[state, setState]}>
        <BrowserRouter>
          <Head />
          <Routes>
            <Route path="/" element={<UserSelection />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </stateContext.Provider>
    </div>
  );
}

export default App;
