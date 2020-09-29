import {
  Avatar,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import "./login.css";
import Axios from "axios";

export class signup extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      error: null,
      isLoaded: false,
      datas:''
    };
    this.handelFirstName = this.handelFirstName.bind(this);
    this.handelLastName = this.handelLastName.bind(this);
    this.handelEmail = this.handelEmail.bind(this);
    this.handelPassword = this.handelPassword.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  handelFirstName = (event) => {
    this.setState({ firstName: event.target.value });
  };
  handelLastName = (event) => {
    this.setState({ lastName: event.target.value });
  };
  handelEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handelPassword = (event) => {
    this.setState({ password: event.target.value });
  };
  submitHandler(event) {
    event.preventDefault();
    
    const article ={
     
      "email": this.state.email,
      "password": this.state.password
  };
    Axios.post('https://reqres.in/api/articles', article)
        .then(response => this.setState({ datas: response.data.id },
          ));
  }

  componentDidMount() {
    
  }
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
          <Avatar className="avatar">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className="form" onSubmit={this.submitHandler} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={this.handelFirstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  value={this.state.datas}
                  onChange={this.handelLastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={this.handelEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.handelPassword}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default signup;
