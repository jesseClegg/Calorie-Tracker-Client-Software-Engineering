import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import AddBoxIcon from '@mui/icons-material/AddBox'
import TextField from '@mui/material/TextField';
import { useState, useRef } from 'react'

export default function ActivityTracker() {

    const [totalCalories, setTotalCalories] = useState(0);
    function updateCaloriesOut(hours, caloriesPerHour) {

        setTotalCalories(parseInt(totalCalories) + (parseInt(hours) * parseInt(caloriesPerHour)));
    }
    function ActivityCard() {

        const [hoursOfActivity, setHoursOfActivity] = useState('');
        const [hoursTextField, setHoursTextField] = useState('');
        const hoursInput = useRef(null);

        return (
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="https://hey-coach-bucket.s3.us-east-2.amazonaws.com/swimming.jpg"
                    alt="Live from space album cover"
                />
                <CardContent>
                    <Container>
                        <b>Swimming</b> - 100 calories per hour
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
                                        updateCaloriesOut(hoursTextField, 100);
                                    }}
                                >ADD</Button>
                            </Grid>
                        </Grid>
                    </Container>
                </CardContent>
            </Card>
        )
    }
    return (
        <Box>
            <Paper sx={{ p: 3 }}>
                <h3>Quick Add Activity</h3>
                <Container>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <ActivityCard />
                        </Grid>
                        <Grid item xs={12}>
                            <ActivityCard />
                        </Grid>
                        <Grid item xs={12}>
                            <ActivityCard />
                        </Grid>
                        <Grid item xs={12}>
                            <ActivityCard />
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
            <br />
            <Paper sx={{ p: 3 }}>
                <h3>Total daily expenditure: {totalCalories} calories</h3>
            </Paper>
        </Box>
    );
}