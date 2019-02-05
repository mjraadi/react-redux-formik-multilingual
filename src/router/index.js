import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from './../components/Home';
import About from './../components/About';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TopBar from './../components/TopBar';
import styles from './styles';


class RootRouter extends Component{
  render(){
    const { classes } = this.props;
    return(
      <Router>
        <main className={classes.layout}>
          <div className={classes.heroContent}>
            <TopBar />
            <Paper className={classes.root} elevation={1}>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
              </Switch>
            </Paper>
          </div>
        </main>
      </Router>
    );
  }
}
export default withStyles(styles)(RootRouter);