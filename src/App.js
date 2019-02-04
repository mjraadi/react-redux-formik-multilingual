import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import * as actions from './redux/appStore/actions';
import messages from './i18n/messages';

class App extends Component {
  componentDidMount(){
    const { changeLocale } = this.props;
    changeLocale('fa');
  }
  render() {
    const { selectedLocale } = this.props;
    console.log(selectedLocale)
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
          <h1>
            <FormattedMessage id="app.header"/>
          </h1>
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

export default connect(mapStateToProps, actions)(App);
