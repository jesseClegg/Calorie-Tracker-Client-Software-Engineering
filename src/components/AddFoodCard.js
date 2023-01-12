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


export default function AddFoodCard() {
    const { currentUser } = useAuth();
    const [foodName, setFoodName] = useState("");
    const [caloriesPerServing, setCaloriesPerServing] = useState(0);

    const handleSubmit=(e) =>{
        e.preventDefault()//todo: preventing default action of page refreshing on submit
        //const data={foodName, caloriesPerServing}
        axios.request({
            method: "POST",
            url: `http://localhost:3000/api/insertNewFood`,
            data: {
                email : currentUser.email.toString(),
                foodToAdd : {
                name: {foodName}.foodName,
                calories: {caloriesPerServing}.caloriesPerServing
                 }
            },
        });

    }

    return (


        <MDBCard>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src='https://s3forninad.s3.amazonaws.com/food+photos/defaultFoodStockPhoto.jpg' fluid alt='default activity card' />
                <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
            </MDBRipple>
            <MDBCardBody>
                <MDBCardTitle>Add a New Food</MDBCardTitle>
                <form onSubmit={handleSubmit}>
                    <label>Food Name</label>
                    <input
                        type="text"
                        required
                        value={foodName}
                        onChange={(e)=> setFoodName(e.target.value)}
                    >
                    </input>
                    <label>Calories Per Serving</label>
                    <input
                        type="text"
                        required
                        value={caloriesPerServing}
                        onChange={(e)=>setCaloriesPerServing(e.target.value)}
                    >
                    </input>
                    <button>
                        Add Food
                    </button>
                </form>
                <p>{foodName}</p>
                <p>{caloriesPerServing}</p>
            </MDBCardBody>
        </MDBCard>
    );
}













