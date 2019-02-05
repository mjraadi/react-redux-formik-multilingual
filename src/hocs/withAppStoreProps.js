import React from 'react';
import { connect } from 'react-redux';
import { changeLocale } from './../redux/appStore/actions';

const mapStateToProps = (state) => {
  return{
    selectedLocale: state.appStore.selectedLocale
  }
};
function withAppStoreProps(Component) {
  function WithAppStoreProps(props) {
    return (
      <Component {...props} />
    );
  }

  return connect(mapStateToProps, { changeLocale })(WithAppStoreProps);
}

export default withAppStoreProps;