import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';
import Button from '@material-ui/core/Button';
import withStyles from "@material-ui/core/styles/withStyles";

class About extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Typography variant="h6" color="inherit" className={classes.section}>
          <FormattedMessage id="about" />
        </Typography>
        <Button  
          size="large"
          variant="contained" 
          color="primary"
          className={classes.section}
          >
          <a href="https://www.bitsnbytes.ir" target="_blank" rel="noopener noreferrer" className={classes.link}>
            <FormattedMessage id="about.website" />
          </a>
        </Button>
      </Fragment>
    );
  }
}

const styles = theme => ({
  section: {
    margin: theme.spacing.unit * 2,
  },
  link: {
    color: "white",
    textDecoration: "none"
  }
});

export default withStyles(styles)(About);