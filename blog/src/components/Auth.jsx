import React, { useState } from 'react'
import axios from 'axios';
import { Box, Typography, TextField, Button } from '@mui/material';

const Auth = () => {

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

  const sendRequest = async () => {
    const res = await axios.post("http://localhost:5000/user/login", {
      email: inputs.email,
      password: inputs.password
    }).catch(err=> console.log(err));
    const data = await res.data;
    return data;
  }

  const handleSubmit = (e) => {
    e.preventDefault()
      console.log(inputs);
      sendRequest();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box maxWidth={600} display="flex" borderRadius={10} flexDirection={'column'} boxShadow="10px 10px 20px #ccc" alignItems='center' justifyContent={'center'} padding={3} margin={'auto'} marginTop={10}>
          <Typography variant="h5"> {isSignup ? 'Sign Up' : 'Login'} </Typography>
         { isSignup && <> <TextField name="name" onChange={handleChange} value={inputs.name} placeholder="Username" margin="normal" /> </>}
          <TextField name="email" onChange={handleChange} value={inputs.email} type={'email'} placeholder="user@pane.com" margin="normal"/>
          <TextField name="password" onChange={handleChange} value={inputs.password} type={'password'} placeholder="Password" margin="normal"/>
          <Button type='submit'>Submit</Button>
          <Button onClick={()=> setisSignup(!isSignup)}> Or {isSignup ? 'Login' : 'Sign Up'} </Button>
        </Box>
      </form>
    </div>
  )
};

export default Auth