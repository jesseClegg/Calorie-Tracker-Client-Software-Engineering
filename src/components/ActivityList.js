import {Container} from "react-bootstrap";
import React, {useRef, useState} from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Card from "@mui/material/Card";


const ActivityList=(props)=>{
    const [totalCalories, setTotalCalories] = useState(0);
    const [hoursOfActivity, setHoursOfActivity] = useState('');
    const [hoursTextField, setHoursTextField] = useState('');
    const hoursInput = useRef(null);
    const activities=props.activities;

    function updateCaloriesOut(hours, caloriesPerHour) {
        const caloriesToUpdate=parseInt(totalCalories) + (parseInt(hours) * parseInt(caloriesPerHour));
        console.log("total calories to add = "+caloriesToUpdate);
        setTotalCalories(caloriesToUpdate);
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