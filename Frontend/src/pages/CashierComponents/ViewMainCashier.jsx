import Head from "../GeneralComponents/MainHeader";
import { Link } from "react-router-dom";
function ViewMainCashier() {
  return (
    <>
      <Head />
      <h1>Which Table Bill do you want to see?</h1>
      <Link to="/tablebill">Table 34</Link>
    </>
  );
}

export default ViewMainCashier;
