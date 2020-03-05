import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import AnnouncementIcon from "@material-ui/icons/Announcement";

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

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          <img
            src="http://aspire.infogain.com/AspireSSO/ImageHandler.ashx?n=109908.jpg"
            alt=""
            className="profile-img"
          />{" "}
          <strong>Abou Jaid ...</strong>
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
          <SubscriptionsIcon />
        </ListItemIcon>
        <ListItemText primary="Watch" />
      </ListItem>
    </List>
  );
}
