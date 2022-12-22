import React, {useState, useEffect} from 'react';
import { useAuth } from "../user-auth/contexts/AuthContexts";
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import axios from "axios";

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
                        console.log(response.data);
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
    if (selected)
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    if(day)
        footer= <p>results are: {day.caloriesIn} </p>

    return (

        <div>
            <DayPicker
                className='bg-gray-800 rounded p-4 flex justify-between'
                mode="single"
                selected={selected}
                onSelect={setSelected}
                footer={footer}
            />

        </div>

    );
}







