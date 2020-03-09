import React, { Component } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../store/actions/authAction";
import {
  withStyles,
  Container,
  CssBaseline,
  Typography,
  Paper,
  Button,
  FormControl,
  Input,
  InputLabel,
  Avatar
} from "@material-ui/core";
import { connect } from "react-redux";
const styles = theme => ({
  root: {
    backgroundColor: "red"
  },
  paper: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: theme.spacing(50),
    backgroundColor: "theme.palette.background.paper",
    boxShadow: theme.shadows[5]
  },
  footer: {
    marginTop: theme.spacing(2),
    textAlign: "center"
  },
  link: {
    textDecoration: "none",
    color: "#3f51b5",
    "&:hover": {
      textDecoration: "none"
    }
  },
  avatar: {
    backgroundColor: "#f50057",
    marginTop: theme.spacing(2)
  }
});

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      errors: {}
    };
  }
  handaleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handaleSubmit = e => {
    e.preventDefault();
    const { username, email, password } = this.state;
    const user = {
      username,
      email,
      password
    };

    this.props.registerUser(user, this.props.history);
  };
  static getDerivedStateFromProps(props, state) {
    return {
      errors: props.errors
    };
  }
  render() {
    const { classes } = this.props;
    const { username, email, password } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>C</Avatar>
            <Typography variant="h6">Sign Up</Typography>
            <form onSubmit={this.handaleSubmit} noValidate>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="username">User Name</InputLabel>
                <Input
                  type="text"
                  name="username"
                  value={username}
                  autoComplete="username"
                  onChange={this.handaleChange}
                />
              </FormControl>
              <span className="error">{this.state.errors.username}</span>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  autoComplete="email"
                  onChange={this.handaleChange}
                />
              </FormControl>
              <span className="error">{this.state.errors.email}</span>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handaleChange}
                />
              </FormControl>
              <span className="error">{this.state.errors.password}</span>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Create Account
              </Button>
            </form>
            <Typography variant="body1" className={classes.footer}>
              Already have an account?
              <Link to="/login" className={classes.link}>
                {" "}
                Log In
              </Link>
            </Typography>
          </Paper>
        </Container>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    errors: state.error
  };
};

export default connect(mapStateToProps, { registerUser })(
  withStyles(styles)(Signup)
);
