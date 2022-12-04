import React, { useEffect, useState } from "react";
import { useAuth } from "../user-auth/contexts/AuthContexts";
import axios from "axios";

export default function Activities() {
    const { currentUser } = useAuth();
    const [activities, setActivities] = useState(null);
    //const [profiles, setProfiles]= useState(null);
    useEffect(() => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const fetchActivities = async () =>{
            const response = await fetch('http://localhost:3000/api/getAllActivities')
            const json = await response.json()
            if(response.ok){
                setActivities(json)
            }
        }
        //fetchActivities()
        getActivities(currentUser.email);//todo user current user email after debugging


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
                console.log("we made it here!");
                console.log(response.data);
                console.log(JSON.stringify(response.data));
                setActivities(JSON.stringify(response.data));
            })
            .catch(function (error) {
                setActivities("error");
            });
    }
    // useEffect(async () => {
    //
    //     const result = await axios(
    //         'http://localhost:3000/api/getAllActivities',
    //     );
    //
    //     setActivities(result.data);
    //
    // }, []);




  //console.log(activities);
  return <div>heres the activities: {activities}</div>;
}
