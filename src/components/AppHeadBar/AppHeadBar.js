import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import {
  // NavLink,
  Outlet } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  marginRight: '40px',
  borderRadius: '5px',
  padding: '5px 10px',
  border: '1px solid white',
};

const activeLinkStyle = {
  textDecoration: 'none',
  color: 'black',
  backgroundColor: 'white',
  padding: '5px 10px',
  marginRight: '40px',
  borderRadius: '5px',
};

const AppHeadBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}>
              Phonebook
          </Typography>
            <>
              <Button style={activeLinkStyle }>
                {/* <NavLink style={activeLinkStyle } to='/register'> */}
                  Register
                {/* </NavLink> */}
              </Button>
              <Button style={linkStyle}>
              {/* <NavLink style={linkStyle} to='/login'> */}
                  Log in
                {/* </NavLink> */}
              </Button>
            </>
             <UserMenu />
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
};

export default AppHeadBar;
