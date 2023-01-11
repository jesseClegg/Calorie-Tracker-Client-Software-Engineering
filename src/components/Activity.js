import React, { useEffect, useState } from "react";
import { useAuth } from "../user-auth/contexts/AuthContexts";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import ActivityList from "./ActivityList";
import CaloriesForOneDayWidget from "../components/CaloriesForOneDayWidget"

export default function Activities() {
    const { currentUser } = useAuth();
    const [activities, setActivities] = useState(null);
    useEffect(() => {
        getActivities(currentUser.email);
    }, [])

    function getActivities(userEmail) {
        axios
            .request({
                method: "POST",
                url: `http://localhost:3000/api/getAllActivities`,
                data: {
                    email: userEmail,
                },
            })
            .then(function (response) {
                setActivities(response.data);
            })
            .catch(function (error) {
                setActivities("error");
            });
    }
  return (
      <div>
          <CaloriesForOneDayWidget />
      {activities && <ActivityList activities={activities} />}
      </div>
  )
}
