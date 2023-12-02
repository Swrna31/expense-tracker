import React, { useState } from "react";
import { Paper, Typography, Grid, TextField, Button, Stack, FormControlLabel, Checkbox, Container } from "@mui/material";
import '../App.css'


const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [checked, setChecked] = useState("")

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
          <Typography variant="h4" color="secondary">Hi, Welcome Back</Typography>
          <Typography variant="body1">Enter you credentials to continue</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="username"
                label="Username"
                variant="outlined"
                value={username}              
                onChange={(e)=>setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            </Grid>
            <Grid item xs={12}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
              <FormControlLabel
                control={
                  <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} name="checked" color="primary" />
                }
                label="Remember me"
              />
              <Typography variant="subtitle1" color="secondary" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                Forgot Password?
              </Typography>
            </Stack>
            </Grid>
            <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Sign In
            </Button>
            </Grid>
          </Grid>
        </Paper>
        </Container>
    </div>
  );
};

export default Login;
