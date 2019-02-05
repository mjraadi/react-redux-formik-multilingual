import React, { Component, Fragment } from 'react';
import { Formik } from "formik";
import FormView from './FormView';
import { formModel } from './formModel';
import { validationSchema } from './validationSchema';

class FormController extends Component {
  
  render() {
    const { selectedLocale } = this.props;
    return(
      <Fragment>
        <Formik
          render={
            props =>
              <FormView 
                {...props} 
                selectedLocale={selectedLocale} 
              /> 
          }
          initialValues={formModel.initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const message = { ...values };
            setTimeout(() => {
              // Do some async tasks
              console.log(message)
              setSubmitting(false);
              resetForm();
            }, 3000);
          }}
        />
      </Fragment>
    );
  }
}

export default FormController;