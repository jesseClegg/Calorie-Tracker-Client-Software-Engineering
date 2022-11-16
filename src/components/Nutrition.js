import React, { useEffect, useState } from "react";
import { useAuth } from "../user-auth/contexts/AuthContexts";
import axios from "axios";

export default function Nutrition() {
  const { currentUser } = useAuth();
  const [meals, setMeals] = useState(getMeals(currentUser.email));

  function getMeals(userEmail) {
    axios
      .request({
        method: "GET",
        url: `http://localhost:3000/api/getAllFoods`,
        data: {
          email: userEmail,
        },
      })
      .then(function (response) {
        setMeals(JSON.stringify(response.data));
      })
      .catch(function (error) {
        setMeals("error");
      });
  }
  //   console.log(meals);
  return <div>{meals}</div>;
}
