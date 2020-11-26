import * as React from 'react';
import { Avatar } from '@material-ui/core';
import rxjsLogo from '../logo-rxjs.png';
import clevercodeLogo from '../logo-clevercode.svg';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      padding: 4,
      background: '#EFF0F4',
      display: 'flex',
      marginTop: 'auto',
    },
    logoWrapper: {
      marginLeft: 'auto',
      marginRight: 'auto',
      '& > .MuiAvatar-root': {
        display: 'inline-block',
        marginRight: 25,
      }
    }
  }),
);

const Footer: React.FC<{}> =  () => {
  const classes = useStyles();
    
  return (
      <footer className={classes.footer}>
        <div className={classes.logoWrapper}>
          <Avatar alt="clevercode-logo" src={clevercodeLogo} />
          <Avatar alt="rxjs-logo" src={rxjsLogo} />
        </div>
      </footer>
  );
}

export default Footer;