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


const ActivityList=(props)=>{
    const [totalCalories, setTotalCalories] = useState(0);
    const [hoursOfActivity, setHoursOfActivity] = useState('');
    const [hoursTextField, setHoursTextField] = useState('');
    const hoursInput = useRef(null);
    const activities=props.activities;
    const { currentUser } = useAuth();

    function getTodaysDate(date){
        date.setMilliseconds(0);
        date.setSeconds(0);
        date.setMinutes(0);
        date.setHours(0);
        return date;
    }

    // function updateCaloriesOut(hours, caloriesPerHour) {
    //     const caloriesToUpdate=parseInt(totalCalories) + (parseInt(hours) * parseInt(caloriesPerHour));
    //     console.log("total calories to add = "+caloriesToUpdate);
    //     setTotalCalories(caloriesToUpdate);
    // }
    function updateCaloriesOut(hours, caloriesPerHour) {
        const caloriesToUpdate=parseInt(totalCalories) + (parseInt(hours) * parseInt(caloriesPerHour));
        axios.request({
            method: "POST",
            url: `http://localhost:3000/api/insertNewDay`,
            data: {
                email : currentUser.email.toString(),
                days:{
                    Day : getTodaysDate(new Date()),
                    caloriesIn: 0,
                    caloriesOut: caloriesToUpdate
                }
            },
        });
    }

    function DeleteActivity(activity){
        console.log("attempting to delete: "+activity);
        axios
            .delete('http://localhost:3000/api/deleteActivity', {
                data: {
                    email: currentUser.email,
                    activityToDelete: activity
                }
            })
            .then(response => console.log('Delete successful'))

            .catch(error => {

                console.error('There was an error!', error);
            });
    }

    return (
        <div>
            {activities.map((activities) => (


                <Card sx={{ display: 'flex' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={activities.imageUrl}
                        alt="your activity image"
                    />
                    <CardContent>
                        <Container>
                            <b>{activities.name}</b> - {activities.calories} calories per hour
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
                                        DeleteActivity(activities.name);
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
                                            updateCaloriesOut(hoursTextField, activities.calories);
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

export  default ActivityList;