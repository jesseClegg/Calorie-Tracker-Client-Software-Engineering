import {Container} from "react-bootstrap";
import React from "react";
import CardMedia from "@mui/material/CardMedia";


const ActivityList=(props)=>{
    const activities=props.activities;

    return (
        <div>
            {activities.map((activities) => (






                <Container style={ {marginBottom: 20, marginTop: 20} }>

                    <h2>{activities.name}</h2>

                    <p>Calories per hour: {activities.calories}</p>

                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={activities.imageUrl}
                        alt="Live from space album cover"
                    />

                </Container>






            ))}
        </div>
    );
}

export  default ActivityList;