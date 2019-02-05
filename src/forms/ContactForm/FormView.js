import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { formModel } from './formModel';
import styles from './styles';

class FormView extends Component {
  handleInputChange(name, e){
    const {
      handleChange,
      setFieldTouched
    } = this.props;
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  }
  renderInputFields(){
    const {
      values,
      errors,
      touched,
      classes,
      selectedLocale
    } = this.props;
    const renderedInputFields =
      formModel.inputs.map((input, id) => {
        return(
          <FormattedMessage 
            key={selectedLocale.locale + id}
            id={input.i18nLabelID}
            >
            { (localeMessage) => 
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                >
                  <TextField
                    label={`${localeMessage}`}
                    id={input.name}
                    name={input.name}
                    value={values[input.name]}
                    error={touched[input.name] && Boolean(errors[input.name])}
                    helperText={
                      (touched[input.name] && errors[input.name]) 
                      ? <FormattedMessage id={errors[input.name]} />
                      : null
                    }
                    fullWidth
                    multiline={input.multiline}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <input.icon  />
                        </InputAdornment>
                      ),
                      ...input.inputProps
                    }}
                    onChange={
                      this.handleInputChange.bind(this, input.name)
                    }
                    className={classes.input}
                  />
              </Grid>
            }
          </FormattedMessage>
        );
      });
    return renderedInputFields;
  }
  renderFormFooter(){
    const { 
      isValid, 
      handleSubmit,
      classes,
      isSubmitting
    } = this.props;
    return(
      <Button  
        size="large"
        variant="contained" 
        color="primary"
        disabled={!isValid || isSubmitting}
        onClick={handleSubmit}
        className={classes.input}
        >
        {
          (isSubmitting)
          ? <FormattedMessage id="contactForm.submiting"/>
          : <FormattedMessage id="contactForm.submit"/>
        }
      </Button>
    );
  }
  render() {
    return(
      <form >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          { this.renderInputFields() }
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
          >
            { this.renderFormFooter() }
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default withStyles(styles)(FormView);