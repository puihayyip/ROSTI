import React, { useEffect, useState } from "react";
import Head from "./Head";
import Main from "./MainComponent";
import SideTab from "./SideTab";

function Order({ user }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState(0);
  const [cart, setCart] = useState([]);

  const myStyle = open
    ? { display: "grid", gridTemplateColumns: "3fr 1fr" }
    : {};

  useEffect(() => {
    setCart([]);
  }, []);

  return (
    <div>
      <Head selection={selection} setSelection={setSelection} user={user} />
      <div style={myStyle}>
        <Main
          className="main"
          open={open}
          setOpen={setOpen}
          selection={selection}
          cart={cart}
          setCart={setCart}
        />
        {open ? <SideTab className="side" cart={cart} /> : ""}
      </div>
    </div>
  );
}

export default Order;
