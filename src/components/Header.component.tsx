import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
    appBar: {
      background: '#EFF0F4',
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: '#191C23',
    },
    title: {
      '& > a': {
        color: '#191C23',
        textDecoration: 'none',
      }
    }
  }),
);

const Header: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.appBar}>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            <Link to={'/'}>{'Observables playground'}</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;