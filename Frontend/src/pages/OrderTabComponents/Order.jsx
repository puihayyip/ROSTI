import React, { useState } from "react";
import Head from "./Head";
import Main from "./MainComponent";

import SideTab from "./SideTab";

function Order() {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState(0);

  const myStyle = open
    ? { display: "grid", gridTemplateColumns: "3fr 1fr" }
    : {};

  return (
    <div>
      <Head selection={selection} setSelection={setSelection} />
      <div style={myStyle}>
        <Main
          className="main"
          open={open}
          setOpen={setOpen}
          selection={selection}
        />
        {open ? <SideTab className="side" /> : ""}
      </div>
    </div>
  );
}

export default Order;
