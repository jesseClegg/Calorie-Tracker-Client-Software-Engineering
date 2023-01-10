import {Container} from "react-bootstrap";
import React from "react";


const ActivityList=(props)=>{
    const activities=props.activities;

    return (
        <div>
            {activities.map((activities) => (
                <Container style={ {marginBottom: 20, marginTop: 20} }>

                    <h2>{activities.name}</h2>

                    <p>{activities.calories}</p>

                </Container>
            ))}
        </div>
    );
}

export  default ActivityList;