
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 275,
    margin: 10,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

interface SimpleCardInterface {
  title: string,
  category: string[],
  description?: string,
  path: string;
}

const SimpleCard: React.FC<SimpleCardInterface> = ({ title, category, description, path }: SimpleCardInterface) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardContent>
        <Typography variant='h5' component='h2'>
          {title}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          {category.join(', ')}
        </Typography>
        <Typography variant='body2' component='p'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'><Link to={path}>{'Learn More'}</Link></Button>
      </CardActions>
    </Card>
  );
}

export default SimpleCard;