import React, {useState, useEffect} from 'react';
import { useAuth } from "../user-auth/contexts/AuthContexts";
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import axios from "axios";
import DayCard from "./DayCard";

export default function Calendar() {
    const [selected, setSelected] = useState(new Date());
    const { currentUser } = useAuth();
    const [day, setDay]= useState(null);

    useEffect( () => {
        function getDay(dateSelected){
            axios
                .request({
                    method: "POST",
                    url: `http://localhost:3000/api/getOneDay`,
                    data: {
                        email: currentUser.email,
                        day: selected
                    },
                })
                .then(function (response) {
                    if(!response.data){
                        console.log("no results for this day :(")
                    }else{
                        const result=response.data.day
                        console.log(result);
                        if(!result){
                            result.CaloriesIn=0;
                            result.CaloriesOut=0;
                        }
                        //todo: right here we have the data
                        setDay(result)
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

        <div>
            <DayPicker
                className='bg-gray-800 rounded p-4 flex justify-between'
                mode="single"
                selected={selected}
                onSelect={setSelected}
                footer={footer}
            />
            <DayCard/>
            <DayCard CaloriesIn={day} />
        </div>

    );
}







