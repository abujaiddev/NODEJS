import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

export default function LeftSidebar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          <ListItem button>
            <ListItemIcon>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4E03AQHEdDsCgvNfzg/profile-displayphoto-shrink_200_200/0?e=1588809600&v=beta&t=LDE5sA0e0k3VmEiKQpBqcwO8OO-wBoBxn5DDjkzSmwA"
                alt=""
                className="profile-img"
              />
            </ListItemIcon>
            <ListItemText primary="Abu Jaid" />
            <span className="edit-profile">
              <Link to="#" id="Popover1" type="button">
                ...
              </Link>
            </span>
          </ListItem>
          <Popover
            placement="bottom"
            isOpen={popoverOpen}
            target="Popover1"
            toggle={toggle}
          >
            <PopoverBody>
              <Link to="/user/profile">Edit Profile</Link>
            </PopoverBody>
          </Popover>
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button>
        <ListItemIcon>
          <AnnouncementIcon />
        </ListItemIcon>
        <ListItemText primary="News Feed" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AnnouncementIcon />
        </ListItemIcon>
        <Link to="/users">
          <ListItemText primary="Users" />
        </Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SubscriptionsIcon />
        </ListItemIcon>
        <ListItemText primary="Watch" />
      </ListItem>
    </List>
  );
}
