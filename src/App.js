import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router } from 'react-router-dom';

import * as actions from './redux/appStore/actions';
import messages from './i18n/messages';
import withMaterialUI from './hocs/withMaterialUI';
import TopBar from './components/TopBar';

class App extends Component {
  handleClick(){
    const { changeLocale, selectedLocale } = this.props;
    if(selectedLocale.locale === 'fa')
      changeLocale('en');
    else
      changeLocale('fa');
  }
  render() {
    const { selectedLocale, classes } = this.props;
    return (
      <IntlProvider
        locale={selectedLocale.locale}
        messages={messages[selectedLocale.locale]}
        >
        <Fragment>
          <Helmet
            encodeSpecialCharacters={true}  
            >
            <html lang={selectedLocale.locale} />
            <body dir={selectedLocale.direction} />
          </Helmet>
          {/* <Router> */}
            <TopBar />
            <div className={classes.root}>
              <h1>
                <FormattedMessage id="app.header"/>
              </h1>
              
            </div>
          {/* </Router> */}
        </Fragment>
      </IntlProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    selectedLocale: state.appStore.selectedLocale
  }
};
const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

export default 
  connect(mapStateToProps, actions)(withMaterialUI(withStyles(styles)(App)));
