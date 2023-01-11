import {useAuth} from "../user-auth/contexts/AuthContexts";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {format} from "date-fns";
import {DayPicker} from "react-day-picker";
import DayCard from "./DayCard";


export default function Calendar() {
    const today="2023-01-10T05:00:00.000Z";
    const [selected, setSelected] = useState(new Date());
    const { currentUser } = useAuth();
    const [day, setDay]= useState(null);
    const [netCalories, setNetCalories] = useState(0);

    // function getTodaysDate(){
    //     const date = new Date();
    //     let day = date.getDate();
    //     let month = date.getMonth() + 1;
    //     let year = date.getFullYear();
    //     let currentDate = `${day}-${month}-${year}`;
    //     return currentDate;
    // }

    useEffect( () => {
        function getDay(dateSelected){
            axios
                .request({
                    method: "POST",
                    url: `http://localhost:3000/api/getOneDay`,
                    data: {
                        email: currentUser.email,
                        day: today
                    },
                })
                .then(function (response) {
                    if(!response.data){
                        console.log("no results for this day :(")
                    }else{
                        let caloriesIn=response.data.caloriesIn
                        let caloriesOut=response.data.caloriesOut

                        if(!response){
                            caloriesIn=0;
                            caloriesOut=0;
                        }
                        //todo: right here we have the data
                        setNetCalories(caloriesIn-caloriesOut)
                        console.log("todays calories= "+netCalories);
                        setDay(response.data.day)
                    }
                })
                .catch(function (error) {
                    // setActivities("error");
                });
        }
        getDay(selected)
    }, [selected]);

    let footer = <p>Please pick a day.</p>;
    if(day)
        footer= <p>results are: {day.caloriesIn} </p>
    if (selected)
        footer = <p>You picked {format(selected, 'PP')}.</p>;


    return (

        <h1>
            Your net calories today: {netCalories}
        </h1>

    );
}