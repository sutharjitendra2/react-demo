import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link as Links,
  TextField,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Axios from "axios";
import React, { Component } from "react";
import "../loginComponents/login.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Links color="inherit" href="https://material-ui.com/">
        Your Website
      </Links>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export class login extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       email:'',
       password:'',
       isLoggedIn:false
    }
    this.handleEmail=this.handleEmail.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
  }
handleEmail=(event)=>{
  this.setState({
    email:event.target.value
  });
}
handlePassword=(event)=>{
  this.setState({
    password:event.target.value
  });
} 
handelSubmit=(event)=>{

  event.preventDefault();
  let Datas={
    "email": this.state.email,
    "password": this.state.password
}
  Axios.post('https://reqres.in/api/login', Datas)
  .then(response => this.setState({ isLoggedIn: true },
    console.log(response),
    localStorage.setItem("token",response.data.token)
    ))
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    
}

logout=()=>{
  localStorage.setItem("token","")
  History.replace("/")
}
  render() {
    const isLoggedIn = localStorage.getItem("token")
    if (isLoggedIn === "") {
      return (
        <Grid container component="main" className="root">
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className="image" />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          className="paper"
          elevation={6}
          square="true"
        >
          <div className="paper">
            <Avatar className="avatar">
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className="form" noValidate onSubmit={this.handelSubmit}>
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
                onChange={this.handleEmail}
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
                onChange={this.handlePassword}
              />
              <FormControlLabel
                className="custom"
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
                  <Links href="#" variant="body2" className="custom">
                    Forgot password?
                  </Links>
                </Grid>
                <Grid item>
                <Links href="/signup" variant="body2" className="custom">
                    Signup
                  </Links>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>);
    } 
    else {
     return (
       <React.Fragment>
         <h1>Welcome</h1>
         <Button onClick={this.logout}>Logout</Button>
       </React.Fragment>
     );
    }
   
  }
}

export default login;
