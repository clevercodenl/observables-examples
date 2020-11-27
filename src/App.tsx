import React from 'react';
import Header from './components/Header.component';
import Footer from './components/Footer.component';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import OverviewPage from './pages/Overview.page';
import ExamplePage from './pages/Example.page';

import './App.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    app: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
  }),
);

const App: React.FC<{}> = () => {
const classes = useStyles();

return (
    <div className={classes.app}>
      <Router>
        <Header /> 
        <Switch>
            <Route path='/examples/:exampleSlug/:isFolder?'>
              <ExamplePage />
            </Route>
            <Route path='/'>
              <OverviewPage />
            </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
