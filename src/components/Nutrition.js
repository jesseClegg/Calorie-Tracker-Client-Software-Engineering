import React, { useEffect, useState } from "react";
import { useAuth } from "../user-auth/contexts/AuthContexts";
import axios from "axios";
import NutritionList from "./NutritionList";

export default function Nutrition() {
    const { currentUser } = useAuth();
    const [foods, setFoods] = useState(null);
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
                setFoods(response.data);
            })
            .catch(function (error) {
                setFoods("error");
            });
    }
    return <div>
        {foods && <NutritionList foods={foods} />}
    </div>;
}
