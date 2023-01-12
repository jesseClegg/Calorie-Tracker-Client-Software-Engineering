import React from 'react';
import {useState} from "react";

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
    const [foodName, setFoodName] = useState("");
    const [caloriesPerServing, setCaloriesPerServing] = useState("");



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
                <form>
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
                        Add
                    </button>
                </form>
                <p>{foodName}</p>
                <p>{caloriesPerServing}</p>
            </MDBCardBody>
        </MDBCard>
    );
}













