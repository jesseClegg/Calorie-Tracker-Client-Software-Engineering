import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Stack';
import AddBoxIcon from '@mui/icons-material/AddBox';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import ConstructionIcon from '@mui/icons-material/Construction';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export function Interface() {

    const [mealItems, updateMealItems] = useState(JSON.parse(localStorage.getItem('meal-list')) || []);                     //stores all meals as object array
    const [calSum, setCalSum] = useState(JSON.parse(localStorage.getItem('cal-sum')) || 0);                                 //stores calorie sum as number


    React.useEffect(() => {                                                                                                 //saves user data to localStorage on every rerender
        localStorage.setItem('meal-list', JSON.stringify(mealItems));
        localStorage.setItem('cal-sum', calSum)
    }, [mealItems, calSum]);

    const AddButton = styled(Button)(() => ({                                                                              //styled addButton, used in buttonhandler
        color: 'white',
        left: 20,
        width: 130,
        backgroundColor: '#1565C0',
        '&:hover': {
            backgroundColor: '#1254a1',
        },
    }));

    const UpdateButton = styled(Button)(() => ({                                                                           //styled updateButton, used in buttonhandler
        backgroundColor: 'orange',
        float: 'right',
        '&:hover': {
            backgroundColor: '#cc8500',
        },
    }));

    const DeleteButton = styled(Button)(() => ({                                                                          //styled deleteButton, used in buttonhandler
        backgroundColor: 'red',
        float: 'right',
        '&:hover': {
            backgroundColor: '#cc0000',
        },
    }));

    function handleAddMeal(name, cal_count) {                                                                              //handles addMeal functionality, called onClick of add meal
        // console.log("addmeal handler called");   

        if (name == null || cal_count == null) {  //checking for user errors
            console.log("null");
            return;
        }

        let newItems = mealItems;               //new ref to mealItems

        newItems.push({                         //push new meal to array
            foodName: name,
            calories: cal_count
        });

        setCalSum(parseInt(calSum) + parseInt(newItems[newItems.length - 1].calories));  // add new calories to old sum and update state

        mealInput.current.value = "";          //reset textfields
        calInput.current.value = "";

        setCalText(null);                      //reset onChange handler states
        setMealText(null);

        // console.log(mealItems);      


    }

    const MealItem = ({ id, foodName, calories }) => {                                    //MealItem DOM object as li, edit iconbutton found here as well
        return (
            <Box>
                <Divider />
                <ListItem key={id}>
                    <strong>{foodName}:{'\u00A0'}</strong>
                    <em>{calories} Calories</em>
                    <IconButton style={{ left: '98%', position: 'absolute' }} onClick={() => { handleEdit(id, calories, foodName) }}><EditIcon /></IconButton>
                </ListItem>
                <Divider />
            </Box>
        )
    }

    const MealList = () => {                                                           //meal list DOM object, holds list of MealItems
        return (
            <List>
                {mealItems.map((item, i) => (
                    <MealItem
                        key={i}
                        id={i}
                        foodName={item.foodName}
                        calories={item.calories}
                    ></MealItem>
                ))}
            </List>
        )
    }

    const [isEditing, setIsEditing] = useState(false);              //is the user editing?
    const [editingId, setEditingId] = useState(-1);                 //what index of MealItems is the user editing?
    const [editingCalCount, setEditingCalCount] = useState(-1);     //calorie count of the mealItem being edited?

    function handleEdit(id, calories, foodName) {                    //handle first part of editing of MealItems, called by edit IconButton
        setEditingId(id);                   //set states
        setEditingCalCount(calories);
        if (isEditing) {                      //triggers when user clicks iconbutton again to return to AddMeal state without making edits to MealItems
            setIsEditing(false);
            mealInput.current.value = "";
            calInput.current.value = "";
            return;
        }
        setIsEditing(true);
        mealInput.current.value = foodName;
        calInput.current.value = calories;
    }

    const ButtonHandler = () => {                                   //toggles between addmeal buttons and edit/delete buttons onClick of iconButton                           
        if (isEditing) {          //returns update and delete buttons if user is trying to edit
            return (
                <Stack direction='row' alignItems='flex-start' spacing={2}>
                    <div />
                    <UpdateButton
                        variant="contained"
                        onClick={() => { updateMeal() }}
                        startIcon={<ConstructionIcon />}
                    >UPDATE MEAL</UpdateButton>
                    <DeleteButton
                        variant="contained"
                        onClick={() => { deleteMeal() }}
                        startIcon={<CloseIcon />}
                    >DELETE MEAL</DeleteButton>
                </Stack>
            )
        }
        //else we return the addMeal button to the DOM
        return (
            <AddButton startIcon={<AddBoxIcon />} onClick={() => {
                handleAddMeal(mealText, calText);
            }}>
                ADD MEAL
            </AddButton>
        )

    }

    function updateMeal() {                                  //called when orange updateButton is pressed
        if (mealInput.current.value === '' || calInput.current.value === '') {      //user made an error or maybe they don't like me :( (just kidding it's me. I'm the user)
            setIsEditing(false);

            mealInput.current.value = "";   //reset our textfields (they should already be like this but...)
            calInput.current.value = "";

            return;     //do nothing and return 
        }

        let newItems = mealItems;
        var oldCals = editingCalCount;

        // console.log('look at dis - ', calInput.current.value)

        newItems.splice(editingId, 1, { id: editingId, foodName: mealInput.current.value, calories: calInput.current.value });  //splice edited item with "new" item, retain same ID, values pulled from TextField refs
        localStorage.setItem('meal-list', JSON.stringify(newItems));    //push modifications to localStorage

        //console.log(oldCals);
        setCalSum(parseInt(calSum) + (parseInt(calInput.current.value) - parseInt(oldCals)));       //arithmetic to adjust calorie count     
        //reset our states
        setIsEditing(false);

        mealInput.current.value = "";   //reset our textfields
        calInput.current.value = "";
    }

    function deleteMeal() {          //called onclick of delete button
        if (editingId === -1) {           //this should never happen but I have no faith when it comes to software
            console.log('delete failed unxexpectedly');
            return;
        }

        updateMealItems(mealItems.filter((o, i) => editingId !== i));       //I was informed this is a better solution than splicing, because splice does a deep copy behind the scenes?

        setCalSum(parseInt(calSum) - parseInt(editingCalCount));      //subtract from old calories
        setIsEditing(false);
        setEditingId(-1);
        mealInput.current.value = "";
        calInput.current.value = "";
    }

    const [mealText, setMealText] = useState();     //states for storing keystrokes made in textfields
    const [calText, setCalText] = useState();

    const mealInput = React.useRef(null);       //refs to textfields
    const calInput = React.useRef(null);

    const TFtheme = createTheme({
        palette: {
            primary: {
                main: '#499c8c'
            },
        }
    });

    return (            //main DOM return
        <Box className="interfaceContainer">
            <Stack className="outerStack">
                <Paper>
                    <br />
                    <Stack justifyContent="left">
                        <Container style={{ fontSize: "24px", paddingLeft: "22px", margin: "0px", textAlign: "left" }}>Add Meal / Food Item</Container>
                        <br />
                        <ThemeProvider theme={TFtheme}>
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <Stack>
                                        <Container style={{ fontSize: "14px", /*color: mfocused ? '#499c8c' : ''*/ }}>
                                            <TextField id="interfaceTF" placeholder="Add item" variant="standard" fullWidth sx={{ width: '100%' }} label='meal'
                                                onChange={(mealText) => setMealText(mealText.target.value)}
                                                inputRef={mealInput}
                                                InputLabelProps={{ shrink: true, fontSize: '14.5px' }}
                                            />
                                        </Container>
                                    </Stack>
                                </Grid>
                                <Grid item xs={6}>
                                    <Stack>
                                        <Container style={{ fontSize: "14px", /*color: cfocused ? '#499c8c' : ''*/ }}>
                                            <TextField id="interfaceTF" placeholder="Add calories" variant="standard" fullWidth sx={{ width: '100%' }} type="number" label='calories'
                                                onChange={(calText) => setCalText(calText.target.value)}
                                                inputRef={calInput}
                                                InputLabelProps={{ shrink: true }}
                                            />
                                        </Container>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </ThemeProvider>
                        <br />
                        <ButtonHandler />
                    </Stack>
                    <br />
                    <br />
                </Paper>
            </Stack>
            <Container style={{
                textAlign: "left",
                fontSize: "1rem",
                margin: ".1rem"
            }}>
                <h3>Net daily intake: {calSum + " calories"}</h3>
            </Container>
            <MealList />
        </Box>
    )
}

export default Interface