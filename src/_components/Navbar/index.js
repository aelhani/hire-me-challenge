import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';

import Drawer from './Drawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#222',
    textDecoration: 'none',
  }
}));

const Navbar = (props) => {
  const classes = useStyles();

  const preventDefault = (event) => {
    // event.preventDefault()
    // console.log(event)
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Drawer />
          <Typography variant="h6" className={classes.title}>
            HireMe Coding Challenge
          </Typography>
          <Link
            className={classes.link}
            href="https://github.com/aelhani"
            onClick={preventDefault}
            target="_blank"
          >
            <Button color="inherit"><GitHubIcon style={{ fill: "white" }} /></Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;