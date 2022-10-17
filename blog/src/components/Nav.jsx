import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authActions } from "../store";

const Nav = () => {

    const dispatch = useDispatch;

    const isLoggedIn = useSelector(state=> state.isLoggedIn);

    return (
    <div className='nav-bar'>
            <a href="/blogs" className='pane'>Pane Blog</a>
           { isLoggedIn && 
           (<div className='nav-link'>
                <a href="/blogs" label="All Blogs">Posts</a>
                <a href="/myblogs" label="My Blogs">My Page</a>
                <a href="/blogs/new" label="New Blog">New</a>
            </div>)}
            <Box display="flex" marginLeft="auto">
                { !isLoggedIn && <> <Button className='log' LinkComponent={Link} to="/auth"
                sx={{margin: '1'}} color="secondary">Login</Button>
                </>}
                { isLoggedIn && (<Button onClick={()=> dispatch(authActions.logout())} LinkComponent={Link} to="/auth" color="secondary">Log Out</Button>)}
            </Box>
    </div>
  );
};

export default Nav