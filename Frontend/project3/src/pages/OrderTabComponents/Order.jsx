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
  const [open, setOpen] = useState(true);
  return (
    <div>
      <Head />
      {open ? (
        <Div>
          <Main className="main" open={open} setOpen={setOpen} />
          <SideTab className="side" />
        </Div>
      ) : (
        <Main className="main" open={open} setOpen={setOpen} />
      )}
    </div>
  );
}

export default Order;
