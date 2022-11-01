import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LoginIcon from '@mui/icons-material/Login';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ActivityPage from './Pages/ActivityPage';
import REStButtonTestPage from './Pages/REStButtonTestPage';
import FoodPage from './Pages/FoodPage';
import PastDates from './Pages/PastDates';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Dash from './dash/Dash';

import Nutrition from './components/Nutrition';
import Fitness from './components/Fitness';



import LogoutIcon from '@mui/icons-material/Logout';
import CellTowerIcon from '@mui/icons-material/CellTower';
//import Landing from './Landing';
// import REStButtonTestPage from './nutrition/REStButtonTestPage';
// import ActivityPage from './activity/ActivityPage';



const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [page, setPage] = React.useState(<Dash />);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Hey Coach!
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => setPage(<Dash />)}>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Dashboard"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>

                        <ListItemButton onClick={() => setPage(<Nutrition />)}>
                            <ListItemIcon>
                                <RestaurantIcon />
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton onClick={() => {
                            localStorage.clear();
                            window.location.href = '/';
                        }
                        }>
                            <ListItemIcon>
                                <LogoutIcon />

                            </ListItemIcon>
                            <ListItemText primary={"Food"} />
                        </ListItemButton>
                    </ListItem>





                    {<ListItem disablePadding>
                        <ListItemButton onClick={() => setPage(<Fitness />)}>
                            <ListItemIcon>
                                <FitnessCenterIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Fitness"} />
                        </ListItemButton>
                    </ListItem>}











                    {<ListItem disablePadding>
                        <ListItemButton onClick={() => setPage(<REStButtonTestPage />)}>
                            <ListItemIcon>
                                <CellTowerIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Test Request Button Page"} />
                        </ListItemButton>
                    </ListItem>}




                    {<ListItem disablePadding>
                        <ListItemButton onClick={() => setPage(<ActivityPage />)}>
                            <ListItemIcon>
                                <LoginIcon />
                            </ListItemIcon>
                            <ListItemText primary={"ActivityPage"} />
                        </ListItemButton>
                    </ListItem>}






                    {<ListItem disablePadding>
                        <ListItemButton onClick={() => setPage(<FoodPage />)}>
                            <ListItemIcon>
                                <RestaurantIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Food"} />
                        </ListItemButton>
                    </ListItem>}



                    {<ListItem disablePadding>
                        <ListItemButton onClick={() => setPage(<PastDates />)}>
                            <ListItemIcon>
                                <CalendarMonthIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Past Dates"} />
                        </ListItemButton>
                    </ListItem>}


                </List>
                <Divider />
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                {page}
            </Main>
        </Box>
    );
}
