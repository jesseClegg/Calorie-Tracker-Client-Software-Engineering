import React, { useEffect, useState } from "react";
import { useAuth } from "../user-auth/contexts/AuthContexts";
import axios from "axios";

export default function Nutrition() {
  const { currentUser } = useAuth();
  const [activities, setActivities] = useState(
    getActivities(currentUser.email)
  );

  function getActivities(userEmail) {
    axios
      .request({
        method: "GET",
        url: `http://localhost:3000/api/getAllActivities`,
        data: {
          email: userEmail,
        },
      })
      .then(function (response) {
        setActivities(JSON.stringify(response.data));
      })
      .catch(function (error) {
        setActivities("error");
      });
  }
  //   console.log(meals);
  return <div>{activities}</div>;
}
