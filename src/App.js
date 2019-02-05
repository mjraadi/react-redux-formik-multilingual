import React, { Component, Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';

import messages from './i18n/messages';
import withMaterialUI from './hocs/withMaterialUI';
import withAppStoreProps from './hocs/withAppStoreProps';
import RootRouter from './router';

class App extends Component {
  render() {
    const { selectedLocale } = this.props;
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
            <title>{selectedLocale.appTitle}</title>
            <meta name="description" content={selectedLocale.appDescription} />
          </Helmet>
            <RootRouter />
        </Fragment>
      </IntlProvider>
    );
  }
}

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

export default withAppStoreProps(withMaterialUI(withStyles(styles)(App)));
