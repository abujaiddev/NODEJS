import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { userLogin } from "../store/actions/authAction";
import { connect } from "react-redux";
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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handaleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const data = { email, password };

    this.props.userLogin(data, this.props.history);
  };

  render() {
    const { classes } = this.props;
    const { email, password } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>L</Avatar>
            <Typography variant="h6">Log In</Typography>
            <form onSubmit={this.handleSubmit} noValidate>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  type="email"
                  onChange={this.handaleChange}
                  id="email"
                  name="email"
                  value={email}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handaleChange}
                  autoFocus
                />
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Log In
              </Button>
            </form>
            <Typography variant="body1" className={classes.footer}>
              Don't have an account?
              <Link to="/signup" className={classes.link}>
                {" "}
                Sign Up
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
    auth: state.auth
  };
};
export default connect(mapStateToProps, { userLogin })(
  withStyles(styles)(Login)
);
