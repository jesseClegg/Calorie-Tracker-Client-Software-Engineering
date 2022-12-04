import React, { useEffect, useState } from "react";
import { useAuth } from "../user-auth/contexts/AuthContexts";
import axios from "axios";

export default function Nutrition() {
    const { currentUser } = useAuth();
    const [meals, setMeals] = useState(null);
    useEffect(() => {
        getMeals(currentUser.email);
    }, [])//empty dependency array fires on first render only

    function getMeals(userEmail) {
        axios
            .request({
                method: "POST",
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
    return <div>Your saved meals: {meals}</div>;
}
