import React, { useEffect, useState } from "react";
import { useAuth } from "../user-auth/contexts/AuthContexts";
import axios from "axios";

export default function Activities() {
    const { currentUser } = useAuth();
    const [activities, setActivities] = useState(null);
    useEffect(() => {
        getActivities(currentUser.email);
    }, [])//empty dependency array fires on first render only

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
                setActivities(JSON.stringify(response.data));
            })
            .catch(function (error) {
                setActivities("error");
            });
    }
  return <div>Your saved activities: {activities}</div>;
}
