import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    padding: theme.spacing.unit * 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: theme.spacing.unit * 50,
    backgroundColor: "theme.palette.background.paper",
    boxShadow: theme.shadows[5]
  },
  footer: {
    marginTop: theme.spacing.unit * 2,
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
    marginTop: theme.spacing.unit * 2
  }
});

class Login extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>L</Avatar>
            <Typography variant="h6">Log In</Typography>
            <form action="">
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  onChange={this.handleInputChange}
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input name="password" />
              </FormControl>
              <Button variant="contained" color="primary" fullWidth>
                Log In
              </Button>
              <Typography variant="body1" className={classes.footer}>
                Don't have an account?
                <Link to="/signup" className={classes.link}>
                  {" "}
                  Sign Up
                </Link>
              </Typography>
            </form>
          </Paper>
        </Container>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(Login);
