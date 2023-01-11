import React, {useState, useEffect} from 'react';
import { useAuth } from "../user-auth/contexts/AuthContexts";
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import axios from "axios";
import DayCard from "./DayCard";

export default function Calendar() {
    const [selected, setSelected] = useState(getTodaysDate(new Date()));
    const { currentUser } = useAuth();
    const [day, setDay]= useState(null);

    function getTodaysDate(date){
        date.setMilliseconds(0);
        date.setSeconds(0);
        date.setMinutes(0);
        date.setHours(0);
        return date;
    }


    useEffect( () => {
        function getDay(dateSelected){
            const formattedDate= getTodaysDate(selected);
            axios
                .request({
                    method: "POST",
                    url: `http://localhost:3000/api/getOneDay`,
                    data: {
                        email: currentUser.email,
                        day: formattedDate
                    },
                })
                .then(function (response) {
                    if(!response.data){
                        console.log("no results for this day :(")
                    }else{
                        const result=response.data.Day
                        console.log("results we got from server: "+result);
                        if(!result){
                            result.CaloriesIn=0;
                            result.CaloriesOut=0;
                        }
                        setDay(result)
                        console.log("formatted from picker ="+getTodaysDate(selected));
                        console.log("calories in: "+response.data.CaloriesIn)
                        console.log("calories Out: "+response.data.CaloriesOut)
                    }
                })
                .catch(function (error) {
                    // setActivities("error");
                });
        }
        // selected.setMilliseconds(0);
        // selected.setSeconds(0);
        // selected.setHours(0);
        getDay(selected)
    }, [selected]);

    let footer = <p>Please pick a day.</p>;
    if(day)
        footer= <p>results are: {day.caloriesIn} </p>
    if (selected)
        console.log("selected in day picker:"+selected);
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
            {/*<DayCard/>*/}
            {/*<DayCard CaloriesIn={day} />*/}
        </div>

    );
}







