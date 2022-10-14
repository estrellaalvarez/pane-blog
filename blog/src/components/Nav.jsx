import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, Box, Tabs, Tab } from '@mui/material';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authActions } from "../store";

const Nav = () => {

    const dispatch = useDispatch;

    const isLoggedIn = useSelector(state=> state.isLoggedIn);

    const [value, setvalue] = useState();

    return (
    <AppBar sx={{background: 'gray'}} position="sticky">
        <Toolbar>
            <Typography variant="h5">Pane Blog</Typography>
           { isLoggedIn && 
           (<Box display="flex" marginLeft={'auto'} marginRight={'auto'}>
                <Tabs value={value} onChange={(e, val)=>setvalue(val)}>
                    <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
                    <Tab LinkComponent={Link} to="/myblogs" label="My Blogs" />
                    <Tab LinkComponent={Link} to="/blogs/new" label="New Blog" />
                </Tabs>
            </Box>)}
            <Box display="flex" marginLeft="auto">
                { !isLoggedIn && <> <Button LinkComponent={Link} to="/auth"
                sx={{margin: '1'}} color="secondary">Login</Button>
                <Button LinkComponent={Link} to="/auth"
                sx={{margin: '1'}} color="secondary">Sign Up</Button>
                </>}
                { isLoggedIn && (<Button onClick={()=> dispatch(authActions.logout())} LinkComponent={Link} to="/auth"
                sx={{margin: '1'}} color="secondary">Log Out</Button>)}
            </Box>
        </Toolbar>
    </AppBar>
  );
};

export default Nav