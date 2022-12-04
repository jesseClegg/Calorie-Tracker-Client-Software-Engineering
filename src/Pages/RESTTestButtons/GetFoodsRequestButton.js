import React, { useState } from 'react';
import { useAuth } from '../../user-auth/contexts/AuthContexts';
import axios from 'axios';


const GetDaysRequestButton = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

    const { userEmail } = useAuth();

    const handleClick = async () => {
        setIsLoading(true);
        // debugger;
        // const response = await fetch('http://localhost:3000/api/getAllFoods?email=' + userEmail,
        //     {
        //         method: 'GET',
        //         crossorigin: true

        //     });

        // if (!response.ok) {
        //     throw new Error(`Error! status: ${response.status}`);
        // }

        // const result = await response.json();

        // console.log('result is: ', JSON.stringify(result, null, 4));

        // setData(result);
        axios.post('http://localhost:3000/api/getAllFoods', {
            email: 'mylesMotha'      //userEmail
        })
            .then(function (response) {
                console.log(response);
                isLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    console.log(data);

    return (
        <div>
            {err && <h2>{err}</h2>}

            <button onClick={handleClick}>Get Request Foods</button>

            {isLoading && <h2>Loading...</h2>}

            {data && (
                <div>
                    <h2>{data.id}</h2>
                    <h2>{data.name}</h2>
                </div>
            )}
        </div>
    );
};

export default GetDaysRequestButton;
