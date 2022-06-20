import Head from "../GeneralComponents/MainHeader";
import CompOrderList from "./CompOrderList";

function ViewMainKitchen({ user }) {
  return (
    <>
      <Head user={user} />
      <CompOrderList />
    </>
  );
}

export default ViewMainKitchen;
