import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'; // Import MenuIcon
import AssignmentIcon from '@mui/icons-material/Assignment';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { Link as RouterLink } from 'react-router-dom';
import EmployeeNavbar from './EmployeeNavbar';
import Leave from './ApplyLeave';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      <Leave />
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      color: 'black',
      position: 'relative',
      whiteSpace: 'nowrap',
      backgroundColor: 'yellow', // Setting drawer background color to yellow
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      border: '3px solid black', // Adding a black border around the drawer
      borderRadius: '0px', // Making the drawer border slightly rounded
    },
    '& .MuiListItem-root': {
      '&:hover': {
        backgroundColor: 'white', // Changing background color to white on hover
      },
    },
    '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
      color: 'black', // Setting text and icon color to black
      fontWeight: 'bold', // Making text bold
    },
    '& .MuiList-paddingTop': {
      paddingTop: 0, // Removing the top padding of the list
    },
  }),
);

const defaultTheme = createTheme({
  palette: {
    mode: 'dark', // Set the theme mode to dark for a black background
  },
});

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <EmployeeNavbar />
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Divider />
          <List component="nav" className="MuiList-paddingTop">
            {/* Menu Icon */}
            <ListItem sx={{ display: 'flex', justifyContent: 'left' }}> {/* Adjusted marginTop */}
              <ListItemIcon> 
                <MenuIcon />
              </ListItemIcon>
            </ListItem>
            {/* Apply Leave */}
            <ListItem button component={RouterLink} to="/applyleave">
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary={<Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Apply Leave</Typography>} />
            </ListItem>
            {/* Leaves Taken */}
            <ListItem button component={RouterLink} to="/leavestaken">
              <ListItemIcon>
                <ScheduleIcon />
              </ListItemIcon>
              <ListItemText primary={<Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Leaves Taken</Typography>} />
            </ListItem>
            {/* Add more list items for other components */}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={4}>
              {/* Your grid items here */}
            </Grid>
            <Copyright sx={{ pt: 10 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
