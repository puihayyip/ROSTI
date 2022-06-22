import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Head from "./Head";

export default function FoodItem({ user }) {
  let { id } = useParams();
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
  }, [id]);

  console.log("food", food.name);

  return (
    <>
      <Head user={user} />
      <h1>{food?.name}</h1>
      <h2>${food?.price}</h2>
      <img src={food?.img} alt={food?.name} width="500" height="600" />
    </>
  );
}
