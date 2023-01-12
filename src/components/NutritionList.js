import {Container} from "react-bootstrap";
import React, {useRef, useState} from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Card from "@mui/material/Card";
import axios from "axios";
import {useAuth} from "../user-auth/contexts/AuthContexts";


const NutritionList=(props)=>{
    const foods=props.foods;
    const [totalCalories, setTotalCalories] = useState(0);
    const [hoursOfActivity, setHoursOfActivity] = useState('');
    const [hoursTextField, setHoursTextField] = useState('');
    const hoursInput = useRef(null);
    const { currentUser } = useAuth();

    function DeleteFood(food){
        console.log("attempting to delete: "+food);
        axios
            .delete('http://localhost:3000/api/deleteFood', {
                data: {
                    email: currentUser.email,
                    foodToDelete: food
                 }
             })
            .then(response => console.log('Delete successful'))

            .catch(error => {

                console.error('There was an error!', error);
            });
    }

    return (
        <div>
            {foods.map((foods) => (


                <Card sx={{ display: 'flex' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={foods.imageUrl}
                        alt="your activity image"
                    />
                    <CardContent>
                        <Container>
                            <b>{foods.name}</b> - {foods.calories} calories per hour
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <TextField id="interfaceTF" placeholder="Enter hours" variant="standard" fullWidth sx={{ width: '100%' }} type="number" label='Hours'
                                               onChange={(hoursTextField) => setHoursTextField(hoursTextField.target.value)}
                                               inputRef={hoursInput}
                                               InputLabelProps={{ shrink: true }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Button onClick={() => {
                                        DeleteFood(foods.name);
                                    }}
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        startIcon={<AddBoxIcon />}
                                        sx={{
                                            color: 'white',
                                            left: 20,
                                            width: 130,
                                            backgroundColor: '#1565C0',
                                            '&:hover': {
                                                backgroundColor: '#1254a1',
                                            }
                                        }}
                                        onClick={() => {
                                            //todo: include get today method
                                            // update that date
                                            // updateCaloriesOut(hoursTextField, foods.calories);
                                        }}
                                    >ADD</Button>
                                </Grid>
                            </Grid>
                        </Container>
                    </CardContent>
                </Card>





            ))}
        </div>
    );
}

export default NutritionList