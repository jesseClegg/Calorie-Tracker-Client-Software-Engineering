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
    const [servings, setServings] = useState('');
    const [servingsTextField, setServingsTextField] = useState('');
    const servingsInput = useRef(null);
    const { currentUser } = useAuth();

    function getTodaysDate(date){
        date.setMilliseconds(0);
        date.setSeconds(0);
        date.setMinutes(0);
        date.setHours(0);
        return date;
    }

    function updateCaloriesIn(servings, caloriesPerServing) {
        const caloriesToUpdate=parseInt(totalCalories) + (parseInt(servings) * parseInt(caloriesPerServing));
        axios.request({
            method: "POST",
            url: `http://localhost:3000/api/insertNewDay`,//todo
            data: {
                email : currentUser.email.toString(),
                days:{
                    Day : getTodaysDate(new Date()),
                    caloriesIn: caloriesToUpdate,
                    caloriesOut: 0
                }
            },
        });
    }

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
                            <b>{foods.name}</b> - {foods.calories} calories per serving
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <TextField id="interfaceTF" placeholder="Enter Servings" variant="standard" fullWidth sx={{ width: '100%' }} type="number" label='Servings'
                                               onChange={(servingsTextField) => setServingsTextField(servingsTextField.target.value)}
                                               inputRef={servingsInput}
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
                                            updateCaloriesIn(servingsTextField, foods.calories);
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