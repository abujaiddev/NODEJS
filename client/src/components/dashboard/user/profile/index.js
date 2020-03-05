import React, { Component } from "react";
import { connect } from "react-redux";
import { profileUser } from "../../../store/actions/profileAction";
import {
  withStyles,
  Paper,
  Button,
  FormControl,
  Input,
  InputLabel
} from "@material-ui/core";
import Sidebar from "../../../sidebar";
import Grid from "@material-ui/core/Grid";

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
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: []
    };
  }
  handleSubmit = e => {
    e.preventDefault();
  };
  handaleChange = e => {};
  componentDidMount() {
    this.props.profileUser();
  }
  static getDerivedStateFromProps(props, state) {
    return {
      profile: props.profile.profile
    };
  }
  render() {
    const { classes } = this.props;
    console.log(this.state.profile);
    const { work, username, phone } = this.state.profile;
    return (
      <React.Fragment>
        <Grid>
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper}>
              <form onSubmit={this.handleSubmit} noValidate>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="username">Username</InputLabel>
                  <Input
                    type="text"
                    value={username}
                    onChange={this.handaleChange}
                    id="email"
                    name=""
                  />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    type="text"
                    name=""
                    onChange={this.handaleChange}
                    autoFocus
                  />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Phone</InputLabel>
                  <Input
                    type="text"
                    name=""
                    onChange={this.handaleChange}
                    autoFocus
                  />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Bio</InputLabel>
                  <Input
                    type="text"
                    name=""
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
                  Update Profile
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile
  };
};

export default connect(mapStateToProps, { profileUser })(
  withStyles(styles)(Profile)
);
