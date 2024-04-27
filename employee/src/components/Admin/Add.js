import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import AddEmployee from './AddEmployee';
import PersonIcon from '@mui/icons-material/Person';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      <AddEmployee />
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
          <AdminNavbar />
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
        <List component="nav" className="MuiList-paddingTop"> {/* Added className to target the list */}
        {/* Three lines icon (Menu Icon) */}
        <ListItem sx={{ display: 'flex', justifyContent: 'left' }}>
        <ListItemIcon>
        <MenuIcon />
        </ListItemIcon>
        </ListItem>
            <ListItem button component={RouterLink} to="/addemployee">
              <ListItemIcon>
                <PersonAddIcon />
              </ListItemIcon>
              <ListItemText primary="Add Employee" />
            </ListItem>
            <ListItem button component={RouterLink} to="/viewemployees">
              <ListItemIcon>
                <PersonIcon /> {/* Use the PersonIcon */}
              </ListItemIcon>
              <ListItemText primary="View Employees" />
            </ListItem>
            <ListItem button component={RouterLink} to="/deleteemployee">
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemText primary="Delete Employee" />
            </ListItem>
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
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={10}>
              {/* Your grid items here */}
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
