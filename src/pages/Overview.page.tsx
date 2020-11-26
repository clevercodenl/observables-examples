import React from 'react';
import SimpleCard from '../components/SimpleCard.component';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import routes from '../routes';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'stretch',
    },
    gridCardWrapper: {
      flex: '0 0 200px',
      margin: 10
    }
  }),
);

const OverviewPage: React.FC<{}> = () => {
    const classes = useStyles();

    return (
        <div className={classes.grid}>
          {routes.map((route, i) => (
            <div key={i} className={classes.gridCardWrapper}>
              <SimpleCard 
                title={route.title} 
                category={route.category} 
                description={route.description}
                path={route.path}
              />
            </div>
          ))}
      </div>
    );
}

export default OverviewPage;