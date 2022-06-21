import { useEffect } from "react";
import Head from "../GeneralComponents/MainHeader";
import CompOrderList from "./CompOrderList";

function ViewMainKitchen({ user }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Head user={user} />
      <CompOrderList />
    </>
  );
}

export default ViewMainKitchen;
