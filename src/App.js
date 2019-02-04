import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { FormattedMessage } from 'react-intl';
import * as actions from './redux/appStore/actions';
import messages from './i18n/messages';

class App extends Component {
  componentDidMount(){
    // const { changeLocale } = this.props;
    // changeLocale('fa');
  }
  render() {
    const { selectedLocale } = this.props;
    console.log(selectedLocale)
    return (
      <IntlProvider
        locale={selectedLocale.locale}
        messages={messages[selectedLocale.locale]}
        >
        <h1>
          <FormattedMessage id="app.header"/>
        </h1>
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
