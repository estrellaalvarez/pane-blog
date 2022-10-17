import React, { useState } from 'react'
import axios from 'axios';
import { authActions } from "../store";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Box, TextField} from '@mui/material';

const Auth = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    name: '', email: '', password: ''
  })

  const [isSignup, setisSignup] = useState(false);
  
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  };

  const sendRequest = async (type='login') => {
    const res = await axios.post(`http://localhost:5000/api/user/${type}`, {
      name: inputs.name,
      email: inputs.email,
      password: inputs.password
    }).catch(err=> console.log(err));
    const data = await res.data;
    console.log(data);
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault()
      console.log(inputs);
      if(isSignup) {
        sendRequest('signup').then((data)=> localStorage.setItem('userId', data.user._id))
        .then(()=> dispatch(authActions.login())).then(() => navigate("/blogs"))
        .then(data=> console.log(data))
      } else {
        sendRequest()
        .then(()=> dispatch(authActions.login())).then(() => navigate("/blogs"))
        .then(data=> console.log(data));
      }
  };

  return (
    <div>
      <div className='icons8'></div>
      <div className='gif'></div>
      <form onSubmit={handleSubmit}>
        <Box className='user-auth' maxWidth={600} 
        display="flex" 
        flexDirection={'column'} 
        alignItems='center' 
        justifyContent={'center'} 
        padding={3}
        marginTop={10}>
          <h2> {isSignup ? 'Sign Up' : 'Login'} 
          </h2>
         { isSignup && 
         <> <TextField name="name" onChange={handleChange} value={inputs.name} placeholder="Username" margin="normal" /> 
         </>}
          <TextField name="email" onChange={handleChange} value={inputs.email} type={'email'} placeholder="user@pane.com" margin="normal"/>
          <TextField name="password" onChange={handleChange} value={inputs.password} type={'password'} placeholder="Password" margin="normal"/>
          <button className='btn-1' type='submit'>Submit</button>
          <button className='btn-2' onClick={()=> setisSignup(!isSignup)}> Or {isSignup ? 'Login' : 'Sign Up'} </button>
        </Box>
      </form>
    </div>
  )
};

export default Auth