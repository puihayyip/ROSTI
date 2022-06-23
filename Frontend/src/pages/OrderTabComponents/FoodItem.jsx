import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Head from "./Head";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import SideTab from "./SideTab";

export default function FoodItem({ user, open, setOpen, cart, setCart }) {
  let { id } = useParams();
  let nav = useNavigate();
  const [food, setFood] = useState({});

  const handleClick2 = () => {
    setOpen(!open);
  };

  useEffect(() => {
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });
    fetch(`/api/allfood/${id}`, {
      headers: {
        authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
      .then((response) => {
        if (response.status === 403) return nav("/");
        return response.json();
      })
      .then((data) => {
        setFood(data.data);
      });
  }, []);
  // console.log("food", food?.name);

  //! OPEN SIDE BAR TOGGLE
  const myStyle = open
    ? { display: "grid", gridTemplateColumns: "3fr 1fr" }
    : {};

  return (
    <>
      {/* //! FULL PAGE SETUP */}
      <Head user={user} />
      <div style={myStyle}>
        {/* //! MAIN BODY WIDTH */}
        <div style={{ height: "100vh", padding: "20px" }}>
          {/* //!BODY HEADER */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ArrowBackIcon
              onClick={() => nav(-1)}
              style={{
                padding: "20px",
                cursor: "pointer",
                fontSize: "large",
                color: "orange",
              }}
            />
            <FastfoodIcon
              fontSize="large"
              color={open ? "inherit" : "primary"}
              onClick={handleClick2}
              sx={{
                cursor: "pointer",
                padding: "5px",
                border: open ? "2px black solid" : "2px steelblue solid",
                borderRadius: "50%",
              }}
              className="shoppingCart"
            />
          </div>

          <h1>{food?.name}</h1>
          <h2>${food?.price}</h2>
          <img src={food?.img} alt={food?.name} width="700" />
        </div>

        {/* //!SIDE BAR VIEW */}
        {open ? (
          <SideTab className="side" cart={cart} setCart={setCart} user={user} />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
