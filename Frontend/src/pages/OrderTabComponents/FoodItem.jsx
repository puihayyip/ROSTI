import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Head from "./Head";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function FoodItem({ user }) {
  let { id } = useParams();
//   let nav= useNavigate();
  const [food, setFood] = useState({});

  useEffect(() => {
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });
    fetch(`/api/allfood/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFood(data.data);
      });
  }, []);

  console.log("food", food?.name);

  return (
    <>
      <Head user={user} />
      {/* <ArrowBackIcon onClick={()=> nav(-1)} /> */}
      <h1>{food?.name}</h1>
      <h2>${food?.price}</h2>
      <img src={food?.img} alt={food?.name} width="700"/>
    </>
  );
}
