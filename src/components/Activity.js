import React, { useEffect, useState } from "react";
import { useAuth } from "../user-auth/contexts/AuthContexts";
import axios from "axios";
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
                setActivities(response.data);
            })
            .catch(function (error) {
                setActivities("error");
            });
    }
  return <>
      {activities && activities.map((activities) => (
          <Container style={ {marginBottom: 20, marginTop: 20} }>

                          <h2>
                              {activities.name}
                          </h2>


                          <p>
                              {activities.calories}
                          </p>

          </Container>
      ))}
  </>
}
