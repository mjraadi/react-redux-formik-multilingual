import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import ReactCountryFlag from "react-country-flag";

import globalConfig from './../config/config.global.json';
import { changeLocale } from '../redux/appStore/actions';
import MenuItems from './Menu';

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
    return MenuItems.map((menu, index) => {
      return(
        <FormattedMessage id={menu.label} key={index}>
          {
            (label) => {
              return(
                <ListItem button>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={label} />
                </ListItem>
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
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <FormattedMessage id="app.author" />
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

const mapStateToProps = (state) => {
  return{
    selectedLocale: state.appStore.selectedLocale
  }
};

export default 
  connect(mapStateToProps, {changeLocale})(withStyles(styles)(TopBar));