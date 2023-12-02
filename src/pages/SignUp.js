import React, { useState } from "react";
import { Paper, Typography, Grid, TextField, Button, Container } from "@mui/material";
import '../App.css'


const SignUp = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [showPassword, setShowPassword] = useState(false);


  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const handleSubmit = () => {
    console.log(username, password);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Paper
          className="login-paper"
          elevation={2}
          square={false}
          style={{ textAlign: "center" }}
        >
          <Typography variant="h4" color="secondary">Sign Up</Typography>
          <Typography variant="h6">Sign up with Email address</Typography>
          <Grid container spacing={2} >
          <Grid item xs={6}>
              <TextField
                id="firstname"
                label="First Name"
                variant="outlined"
                value={firstName}              
                onChange={(e)=>setFirstName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
            <TextField
              id="lastname"
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(e)=>setLastName(e.target.value)}
              fullWidth
            />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="username"
                label="Email Address/Username"
                variant="outlined"
                value={username}              
                onChange={(e)=>setUsername(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              fullWidth
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
              id="confirm-password"              
              label="Confirm Password"
              variant="outlined"
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
              fullWidth
            />
            </Grid>
            <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Sign Up
            </Button>
            </Grid>
          </Grid>
        </Paper>
        </Container>
    </div>
  );
};

export default SignUp;
