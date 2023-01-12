import React from 'react';
import {useState} from "react";
import { useAuth } from "../user-auth/contexts/AuthContexts";
import axios from "axios";

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
} from 'mdb-react-ui-kit';


export default function AddActivityCard() {
    const { currentUser } = useAuth();
    const [activityToAdd, setActivityToAdd] = useState("");
    const [caloriesPerHour, setCaloriesPerHour] = useState(0);

    const handleSubmit=(e) =>{
        e.preventDefault()//todo: preventing default action of page refreshing on submit
        //const data={foodName, caloriesPerServing}
        axios.request({
            method: "POST",
            url: `http://localhost:3000/api/insertNewActivity`,
            data: {
                email : currentUser.email.toString(),
                activityToAdd : {
                    name: {activityToAdd}.activityToAdd,
                    calories: {caloriesPerHour}.caloriesPerHour
                }
            },
        });

    }

    return (


        <MDBCard>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src='https://s3forninad.s3.amazonaws.com/excercise+photos/excerciseStockPhoto.jpg' fluid alt='default activity card' />
                <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
            </MDBRipple>
            <MDBCardBody>
                <MDBCardTitle>Add a New Activity</MDBCardTitle>
                <form onSubmit={handleSubmit}>
                    <label>Activity Name</label>
                    <input
                        type="text"
                        required
                        value={activityToAdd}
                        onChange={(e)=> setActivityToAdd(e.target.value)}
                    >
                    </input>
                    <label>Calories Per Hour</label>
                    <input
                        type="text"
                        required
                        value={caloriesPerHour}
                        onChange={(e)=>setCaloriesPerHour(e.target.value)}
                    >
                    </input>
                    <button>
                        Add Activity
                    </button>
                </form>
                <p>{activityToAdd}</p>
                <p>{caloriesPerHour}</p>
            </MDBCardBody>
        </MDBCard>
    );
}













