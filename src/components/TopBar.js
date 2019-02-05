import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FormattedMessage } from 'react-intl';
import ReactCountryFlag from "react-country-flag";

import globalConfig from './../config/config.global.json';
import MenuItems from './Menu';
import withAppStoreProps from '../hocs/withAppStoreProps';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
  menuLinks: {
    textDecoration: 'none'
  },
  brandLink: {
    textDecoration: 'none',
    color: 'white'
  }
});

class TopBar extends Component{
  renderChangeLocaleLink(){
    const { availableLocales } = globalConfig;
    const { selectedLocale, changeLocale } = this.props;
    return availableLocales.map((locale, index) => {
      return(
        <ListItem 
          button
          key={index}
          disabled={
            (locale.locale === selectedLocale.locale)
          }
          onClick={
            () => changeLocale(locale.locale)
          }
          >
          <ListItemIcon>
            <ReactCountryFlag
              code={locale.countryCode}
              svg={true}
            />
            </ListItemIcon>
          <ListItemText primary={locale.localeDisplayName} />
        </ListItem>
      );
    });
  }
  renderMenuItems(){
    const { classes } = this.props
    return MenuItems.map((menu, index) => {
      return(
        <FormattedMessage id={menu.label} key={index}>
          {
            (label) => {
              return(
                <Link to={menu.pathname} className={classes.menuLinks}>
                  <ListItem button>
                    <ListItemIcon>
                      <menu.icon />
                    </ListItemIcon>
                    <ListItemText primary={label} />
                  </ListItem>
                </Link>
              )
            }
          }
        </FormattedMessage>
      );
    });
  }
  render(){
    const { classes, selectedLocale } = this.props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <a href="https://www.bitsnbytes.ir" target="_blank" rel="noopener noreferrer" className={classes.brandLink}>
              <FormattedMessage id="app.author" />
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor={
          (selectedLocale.direction === "ltr")? "left": "right"
        }
      >
        <div className={classes.toolbar} />
        <List>
          { this.renderMenuItems() }
        </List>
        <Divider />
        <List>
          { this.renderChangeLocaleLink() }
        </List>
      </Drawer>
    </div>
  );
  }
}
  

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withAppStoreProps(withStyles(styles)(TopBar));