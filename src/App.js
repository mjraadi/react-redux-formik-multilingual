import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/appStore/actions';

class App extends Component {
  componentDidMount(){
    const { changeLocale } = this.props;
    changeLocale('fa');
  }
  render() {
    const { selectedLocale } = this.props;
    console.log(selectedLocale)
    return (
      <h1>
        Redux Store Added.
      </h1>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    selectedLocale: state.appStore.selectedLocale
  }
};

export default connect(mapStateToProps, actions)(App);
