import React, {useState, useEffect} from 'react';
import { useAuth } from "../user-auth/contexts/AuthContexts";
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import axios from "axios";

export default function Calendar() {
    const [selected, setSelected] = useState(new Date());
    const { currentUser } = useAuth();


    useEffect( () => {
        function getDay(dateSelected){
            //console.log("FROM INSIDE FUNCTION == you chose to look up "+dateSelected+" date for a request");
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
                    // setActivities(JSON.stringify(response.data));
                    console.log(JSON.stringify(response.data));
                    //todo: may need to set data here?
                    return response.data;
                })
                .catch(function (error) {
                    // setActivities("error");
                });
        }
        console.log("beep boop you chose to look up [" + selected + "] date for a request");
        //getDay(selected);
        setSelected(getDay(selected))
        //print the results
       // console.log("the results for today are: ")
        //console.log(results);
    }, [selected]);

    let footer = <p>Please pick a day.</p>;
    if (selected)
        footer = <p>You picked {format(selected, 'PP')}.</p>;


    return (
        <DayPicker
            className='bg-gray-800 rounded p-4 flex justify-between'
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={footer}
        />
    );
}







