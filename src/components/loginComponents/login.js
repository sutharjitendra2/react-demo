import { Avatar, Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography } from '@material-ui/core';
import { Router } from '@material-ui/icons';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React, { Component } from 'react'
import { Route } from 'react-router';
import '../loginComponents/login.css'
import Signup from './signup';


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
export class login extends Component {
    
    render() {
        return (
            <Grid container component="main" className="root">
              <CssBaseline />
              <Grid item xs={false} sm={4} md={7} className="image" />
              <Grid item xs={12} sm={8} md={5} className="paper" elevation={6} square="true">
                <div className="paper">
                  <Avatar className="avatar">
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Sign in
                  </Typography>
                  <form className="form" noValidate>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                    <FormControlLabel className="custom"
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className="submit"
                    >
                      Sign In
                    </Button>
                    <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2" className="custom">
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item>
                          
                        <Link to="/signup" component={Signup}  variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                        <Router>
                         <Route path='/signup' component={Signup}/>
                        </Router>
                       
                      </Grid>
                    </Grid>
                    <Box mt={5}>
                      <Copyright/>
                    </Box>
                  </form>
                </div>
              </Grid>
            </Grid>
          );
    }
}

export default login
