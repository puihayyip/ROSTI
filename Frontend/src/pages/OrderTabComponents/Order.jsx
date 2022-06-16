import React, { useState } from "react";
import Head from "./Head";
import Main from "./Main";

import styled from "styled-components";
import SideTab from "./SideTab";

const Div = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

function Order() {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState(0);

  return (
    <div>
      <Head selection={selection} setSelection={setSelection} />
      {open ? (
        <Div>
          <Main
            className="main"
            open={open}
            setOpen={setOpen}
            selection={selection}
          />
          <SideTab className="side" />
        </Div>
      ) : (
        <Main
          className="main"
          open={open}
          setOpen={setOpen}
          selection={selection}
        />
      )}
    </div>
  );
}

export default Order;
